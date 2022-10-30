import 'tailwindcss/tailwind.css';
import NavLink from './nav-link';

export default function RootLayout({ children }) {
  console.log('rendering');
  return (
    <html lang="en">
      <head>
        <title>Next 13 Tuto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="bg-gray-700 text-gray-100 antialiased">
        <header className="border-b p-4">
          <nav className="space-x-4  mb-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shops">Shops</NavLink>
          </nav>
        </header>

        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
