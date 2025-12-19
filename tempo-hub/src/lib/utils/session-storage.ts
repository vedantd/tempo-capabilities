/**
 * Centralized sessionStorage utility with type-safe getters/setters
 * Provides key management, address-scoped keys, and automatic cleanup helpers
 */

// Storage key structure: `tempo-hub:{category}:{key}[:{address}]`
export const STORAGE_KEYS = {
  payment: {
    processedTxHash: 'tempo-hub:payment:processed-tx-hash',
  },
  toast: {
    cooldown: (txHash: string) => `tempo-hub:toast:cooldown:${txHash}`,
  },
  transactions: {
    seenIds: (address: string, type: 'incoming' | 'history') => 
      `tempo-hub:tx:seen-ids:${type}:${address.toLowerCase()}`,
    lastBlock: (address: string, type: 'incoming' | 'history') => 
      `tempo-hub:tx:last-block:${type}:${address.toLowerCase()}`,
  },
  forms: {
    sendForm: 'tempo-hub:forms:send',
  },
  filters: {
    transactions: 'tempo-hub:filters:transactions',
  },
} as const;

/**
 * Check if we're in a browser environment
 */
function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Get a value from sessionStorage
 */
export function getSessionStorage<T>(key: string): T | null {
  if (!isBrowser()) return null;
  
  try {
    const item = sessionStorage.getItem(key);
    if (item === null) return null;
    return JSON.parse(item) as T;
  } catch (error) {
    console.warn(`Failed to parse sessionStorage item "${key}":`, error);
    return null;
  }
}

/**
 * Set a value in sessionStorage
 */
export function setSessionStorage<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Failed to set sessionStorage item "${key}":`, error);
  }
}

/**
 * Remove a value from sessionStorage
 */
export function removeSessionStorage(key: string): void {
  if (!isBrowser()) return;
  
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.warn(`Failed to remove sessionStorage item "${key}":`, error);
  }
}

/**
 * Clear all sessionStorage items with a given prefix
 */
export function clearSessionStorageByPrefix(prefix: string): void {
  if (!isBrowser()) return;
  
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith(prefix)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => sessionStorage.removeItem(key));
  } catch (error) {
    console.warn(`Failed to clear sessionStorage items with prefix "${prefix}":`, error);
  }
}

/**
 * Get a Set from sessionStorage
 */
export function getSessionStorageSet(key: string): Set<string> {
  const stored = getSessionStorage<string[]>(key);
  return stored ? new Set(stored) : new Set<string>();
}

/**
 * Set a Set in sessionStorage (converts to array)
 */
export function setSessionStorageSet(key: string, set: Set<string>): void {
  setSessionStorage(key, Array.from(set));
}

/**
 * Add an item to a Set in sessionStorage
 */
export function addToSessionStorageSet(key: string, value: string): void {
  const set = getSessionStorageSet(key);
  set.add(value);
  setSessionStorageSet(key, set);
}

/**
 * Check if a value exists in a Set in sessionStorage
 */
export function hasInSessionStorageSet(key: string, value: string): boolean {
  const set = getSessionStorageSet(key);
  return set.has(value);
}

/**
 * Clear all address-scoped data for a given address
 */
export function clearAddressScopedData(address: string | undefined): void {
  if (!address) return;
  const normalizedAddress = address.toLowerCase();
  
  // Clear transaction seen IDs
  removeSessionStorage(STORAGE_KEYS.transactions.seenIds(normalizedAddress, 'incoming'));
  removeSessionStorage(STORAGE_KEYS.transactions.seenIds(normalizedAddress, 'history'));
  
  // Clear last block numbers
  removeSessionStorage(STORAGE_KEYS.transactions.lastBlock(normalizedAddress, 'incoming'));
  removeSessionStorage(STORAGE_KEYS.transactions.lastBlock(normalizedAddress, 'history'));
}

/**
 * Clean up expired toast cooldowns (older than 5 minutes)
 */
export function cleanupExpiredToastCooldowns(): void {
  if (!isBrowser()) return;
  
  const now = Date.now();
  const COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes
  const prefix = 'tempo-hub:toast:cooldown:';
  
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith(prefix)) {
        const timestamp = getSessionStorage<number>(key);
        if (timestamp && now - timestamp > COOLDOWN_MS) {
          keysToRemove.push(key);
        }
      }
    }
    keysToRemove.forEach(key => removeSessionStorage(key));
  } catch (error) {
    console.warn('Failed to cleanup expired toast cooldowns:', error);
  }
}

/**
 * Limit Set size in sessionStorage (keep only last N items)
 */
export function limitSessionStorageSetSize(key: string, maxSize: number): void {
  const set = getSessionStorageSet(key);
  if (set.size <= maxSize) return;
  
  // Convert to array, keep last N items
  const array = Array.from(set);
  const limited = array.slice(-maxSize);
  setSessionStorageSet(key, new Set(limited));
}
