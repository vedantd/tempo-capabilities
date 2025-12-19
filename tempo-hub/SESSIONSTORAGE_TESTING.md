# SessionStorage Testing Guide

This guide explains how to test the sessionStorage functionality that was added to the app.

## What Was Added

SessionStorage is now used to persist:
1. **Toast cooldowns** - Prevents duplicate toast notifications
2. **Transaction seen IDs** - Prevents re-processing the same transactions
3. **Last block numbers** - Makes polling more efficient
4. **Form state** - Saves send form data (recipient, amount, memo, etc.)
5. **Filter preferences** - Saves transaction filter settings
6. **Payment celebration tracking** - Prevents celebration on refresh

## How to Test

### 1. Toast Cooldown (No Duplicate Toasts)

**Test Steps:**
1. Send a payment or receive a transaction
2. You should see a toast notification
3. **Refresh the page immediately** (F5 or Cmd+R)
4. **Expected:** The same toast should NOT appear again (cooldown is 5 seconds)

**How to Verify:**
- Open browser DevTools (F12)
- Go to Application tab → Storage → Session Storage
- Look for keys like `tempo-hub:toast:cooldown:0x...`
- You should see timestamps stored there

### 2. Transaction Deduplication

**Test Steps:**
1. Go to Dashboard or Receive page
2. Wait for incoming transactions to appear
3. **Refresh the page**
4. **Expected:** Transactions should NOT show duplicate toast notifications
5. Transactions should load faster (using cached seen IDs)

**How to Verify:**
- Open DevTools → Application → Session Storage
- Look for keys like:
  - `tempo-hub:tx:seen-ids:incoming:0x...` (array of transaction IDs)
  - `tempo-hub:tx:last-block:incoming:0x...` (last processed block number)

### 3. Form State Persistence

**Test Steps:**
1. Go to Send page (`/send`)
2. Fill in:
   - Recipient address
   - Amount (e.g., "10")
   - Memo (optional)
   - Select a token
3. **Navigate away** (go to Dashboard)
4. **Come back to Send page**
5. **Expected:** All form fields should be filled with your previous values

**How to Verify:**
- Open DevTools → Application → Session Storage
- Look for key: `tempo-hub:forms:send`
- Should contain JSON with all form fields

**Note:** Form state is cleared when you successfully send a payment.

### 4. Transaction Filter Persistence

**Test Steps:**
1. Go to Transactions page (`/transactions`)
2. Set filters:
   - Search query (e.g., search for an address)
   - Type filter (Sent/Received)
   - Token filter (select a specific token)
3. **Refresh the page**
4. **Expected:** All filters should remain as you set them

**How to Verify:**
- Open DevTools → Application → Session Storage
- Look for key: `tempo-hub:filters:transactions`
- Should contain JSON with filter state

### 5. Payment Celebration (No Refresh Trigger)

**Test Steps:**
1. Send a payment successfully
2. You should see confetti celebration on dashboard
3. **Refresh the dashboard page** (F5)
4. **Expected:** Confetti should NOT appear again

**How to Verify:**
- Open DevTools → Application → Session Storage
- Look for key: `tempo-hub:payment:processed-tx-hash`
- Should contain the transaction hash that was already processed

### 6. Efficient Polling (Last Block Number)

**Test Steps:**
1. Connect wallet and let transactions load
2. **Refresh the page**
3. **Expected:** Transactions should load faster (starts from last processed block, not from scratch)

**How to Verify:**
- Open DevTools → Network tab
- Filter by "rpc" or "getLogs"
- After refresh, you should see fewer RPC calls (only fetching new blocks)

### 7. Address Change Cleanup

**Test Steps:**
1. Connect wallet (Address A)
2. Let some transactions load
3. **Disconnect wallet**
4. **Connect a different wallet** (Address B)
5. **Expected:** Address A's data should be cleared, Address B starts fresh

**How to Verify:**
- Open DevTools → Application → Session Storage
- After switching addresses, old address-scoped keys should be removed
- New address-scoped keys should be created

## Browser DevTools Quick Reference

### View SessionStorage:
1. Open DevTools (F12 or Cmd+Option+I)
2. Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
3. Expand **Session Storage**
4. Click on your domain (e.g., `localhost:3000`)
5. You'll see all keys with `tempo-hub:` prefix

### Clear SessionStorage (for testing):
1. Right-click on your domain in Session Storage
2. Select "Clear" or "Delete All"
3. Refresh the page to test fresh state

### Monitor Changes:
1. Keep DevTools open on Application tab
2. Perform actions (send payment, filter transactions, etc.)
3. Watch Session Storage update in real-time

## Expected Behavior Summary

| Feature | On Refresh | On Navigation | On Address Change |
|---------|-----------|---------------|-------------------|
| Toast cooldowns | ✅ Persists (no duplicates) | ✅ Persists | ✅ Cleared |
| Transaction IDs | ✅ Persists (no duplicates) | ✅ Persists | ✅ Cleared |
| Last block number | ✅ Persists (faster loading) | ✅ Persists | ✅ Cleared |
| Form state | ✅ Persists | ✅ Persists | ✅ Persists |
| Filter preferences | ✅ Persists | ✅ Persists | ✅ Persists |
| Celebration | ✅ No trigger | ✅ No trigger | ✅ Cleared |

## Troubleshooting

**If something doesn't work:**
1. Check browser console for errors
2. Verify Session Storage is enabled (some browsers/incognito modes disable it)
3. Check if storage quota is exceeded (unlikely but possible)
4. Clear Session Storage and test again
5. Check that you're testing in the same browser session (Session Storage is cleared when browser closes)

## Key Storage Locations

All keys follow the pattern: `tempo-hub:{category}:{key}[:{address}]`

- `tempo-hub:payment:processed-tx-hash` - Last processed payment
- `tempo-hub:toast:cooldown:{txHash}` - Toast cooldown timestamps
- `tempo-hub:tx:seen-ids:incoming:{address}` - Incoming transaction IDs
- `tempo-hub:tx:seen-ids:history:{address}` - History transaction IDs
- `tempo-hub:tx:last-block:incoming:{address}` - Last block for incoming
- `tempo-hub:tx:last-block:history:{address}` - Last block for history
- `tempo-hub:forms:send` - Send form state
- `tempo-hub:filters:transactions` - Transaction filter state
