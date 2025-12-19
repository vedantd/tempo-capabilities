import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Web3Provider } from "@/providers/web3-provider";
import { DemoProvider } from "@/contexts/demo-context";
import { ToastProvider } from "@/contexts/toast-context";
import { DemoToggleButton } from "@/components/demo/demo-toggle-button";
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/error-boundary";
import { Background } from "@/components/layout/background";
import { PageTransition } from "@/components/layout/page-transition";
import { SessionStorageCleanup } from "@/components/session-storage-cleanup";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TempoHub - Payments",
  description: "Send payments with passkey authentication on Tempo blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Background />
        <ErrorBoundary>
          <DemoProvider>
            <ToastProvider>
              <Web3Provider>
                <SessionStorageCleanup />
                <PageTransition>{children}</PageTransition>
                <DemoToggleButton />
                <Toaster />
              </Web3Provider>
            </ToastProvider>
          </DemoProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
