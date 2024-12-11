import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme/theme-provider';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Travel Trail Holidays',
        template: '%s',
    },
    description:
        'Crafting unforgettable travel experiences. We take care of the details, so you can focus on making memories.',
    icons: {
        icon: '/icon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
