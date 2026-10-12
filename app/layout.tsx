import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Around Tech — UI/UX Design & Website Development Agency',
  description:
    'Around Tech turns bold ideas into digital experiences with thoughtful UI/UX design, modern website development, and custom software solutions.',
  openGraph: {
    title: 'Around Tech — UI/UX Design & Website Development Agency',
    description:
      'Around Tech turns bold ideas into digital experiences with thoughtful UI/UX design, modern website development, and custom software solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Around Tech — UI/UX Design & Website Development Agency',
    description:
      'Around Tech turns bold ideas into digital experiences with thoughtful UI/UX design, modern website development, and custom software solutions.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
