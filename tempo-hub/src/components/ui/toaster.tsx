"use client";

import { useToast } from "@/contexts/toast-context";
import { ToastComponent } from "./toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 pointer-events-none max-w-[420px] w-full sm:w-auto">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <ToastComponent toast={toast} onClose={dismiss} />
        </div>
      ))}
    </div>
  );
}
