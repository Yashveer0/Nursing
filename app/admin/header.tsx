'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

// This is an example Header component. You will need to integrate this
// logic into your website's actual header file.

export function Header() {
  // You'll need a way to determine if the user is logged in.
  // This might come from a context, a hook, or server-side props.
  const isLoggedIn = false; 

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-blue-50/80 backdrop-blur-md shadow-sm border-b border-blue-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Your Logo
          </Link>
          {/* Your other navigation links go here */}
        </div>
        <div className="flex items-center">
          {isLoggedIn ? (
            <Button variant="outline">Logout</Button>
          ) : (
            <Link href="/login" passHref>
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
