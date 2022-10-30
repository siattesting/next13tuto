'use client';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function NavLink({ href, children }) {
  let layoutSegments = useSelectedLayoutSegments();
  let segment = layoutSegments[0];
  if (segment === undefined) segment = '';
  let active = href === `/${segment}`;
  //   console.log({ href, segment });
  return (
    <Link
      href={href}
      className={
        active ? 'underline hover:text-blue-400' : 'hover:text-blue-400'
      }
    >
      {children}
    </Link>
  );
}
