import 'tailwindcss/tailwind.css';
import DataProvider from './DataContext';
import NavLink from './nav-link';

export default function RootLayout({ children }) {
  // console.log('rendering');
  return (
    <html lang="en">
      <head>
        <title>Next 13 Tuto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="bg-gray-700 text-gray-100 antialiased w-11/12 m-auto">
        <header className="sticky top-0 border-b-2 p-4 w-full">
          <nav className="space-x-4  text-2xl mb-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shops">Shops</NavLink>
            <NavLink href="/cities">Cities</NavLink>
            <NavLink href="/products">Products</NavLink>
          </nav>
        </header>

        <main className=" p-4 w-full">
          {/* <DataProvider>{children}</DataProvider> */}
          {children}
        </main>
      </body>
    </html>
  );
}
