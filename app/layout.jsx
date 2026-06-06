import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.doss.com'),
  title: 'DOSS | Adaptive ERP and Operations Cloud',
  description:
    'Tools for real-world operations. Level-up from ERP and spreadsheets with the Operations Cloud and Adaptive Resource Platform (ARP).',
  manifest: '/assets/site-DCsMd7Bk.webmanifest',
  icons: {
    icon: [
      { url: '/assets/img/favicon-96x96-KjyAR8AR.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/favicon-BTmdGodD.svg', type: 'image/svg+xml' },
    ],
    apple: '/assets/img/apple-touch-icon-BCXGCEhF.png',
    shortcut: '/assets/img/favicon-C21zMLzH.ico',
  },
  openGraph: {
    title: 'DOSS | Adaptive ERP and Operations Cloud',
    description:
      'Tools for real-world operations. Level-up from ERP and spreadsheets with the Operations Cloud and Adaptive Resource Platform (ARP).',
    url: 'https://www.doss.com/',
    siteName: 'DOSS | Adaptive ERP and Operations Cloud',
    images: [
      {
        url: '/assets/img/og-image-DgTw3QV_.png',
        width: 1200,
        height: 1200,
        alt: 'Tools for real-world operations.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DOSS | Adaptive ERP and Operations Cloud',
    description:
      'Tools for real-world operations. Level-up from ERP and spreadsheets with the Operations Cloud and Adaptive Resource Platform (ARP).',
    images: ['/assets/img/og-image-DgTw3QV_.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
