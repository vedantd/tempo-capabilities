import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Web3Provider } from "@/providers/web3-provider";
import { DemoProvider } from "@/contexts/demo-context";
import { ToastProvider } from "@/contexts/toast-context";
import { DemoToggleButton } from "@/components/demo/demo-toggle-button";
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/error-boundary";
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
  title: "TempoHub - Stablecoin Payments",
  description:
    "Send stablecoin payments with passkey authentication on Tempo blockchain",
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
        <ErrorBoundary>
          <DemoProvider>
            <ToastProvider>
              <Web3Provider>
                {children}
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
