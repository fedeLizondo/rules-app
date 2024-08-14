import React, { PropsWithChildren } from "react"
import { Head } from '@inertiajs/react';
import ThemeProvider from "@/components/ui/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavBar from "@/Components/NavBar";
import Header from "@/Components/Header";
import { Toaster } from "@/components/ui/toaster";


interface Props {
  title: string;
  renderHeader?(): JSX.Element;
}

export default function AppAuthLayout({
  title,
  renderHeader,
  children,
}: PropsWithChildren<Props>) {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <TooltipProvider>
      <Head title={title} />
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <NavBar />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Header />
            {/* <!-- Page Content --> */}
            <main className="w-full">
                {children}
            </main>
          </div>
        </div>
        <Toaster/>
      </TooltipProvider>
    </ThemeProvider>
  )
}
