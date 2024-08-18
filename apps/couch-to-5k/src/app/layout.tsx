import './global.css';

export const metadata = {
  title: 'Welcome to couch-to-5k',
  description: 'an app to help you with your couch-to-5k goals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
