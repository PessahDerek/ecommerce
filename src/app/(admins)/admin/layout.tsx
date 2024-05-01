import React from "react";
import Aos from "@/utils/aos";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Aos />
        {/*<NavigationBar/>*/}
        {children}
        </body>
        </html>
    );
}

