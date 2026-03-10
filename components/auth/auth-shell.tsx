'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type AuthShellProps = {
  title: string;
  description: string;
  altText: string;
  altLinkText: string;
  altHref: string;
  children: ReactNode;
};

export function AuthShell({
  title,
  description,
  altText,
  altLinkText,
  altHref,
  children,
}: AuthShellProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_55%,#f7f9fc_100%)] py-10 sm:py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          <Card className="border-blue-100/80 shadow-lg shadow-blue-900/5">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl text-gray-900">{title}</CardTitle>
              <CardDescription className="text-gray-500">{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {children}
              <p className="text-center text-sm text-gray-600">
                {altText}{' '}
                <Link href={altHref} className="font-semibold text-primary hover:text-red-600 transition-colors">
                  {altLinkText}
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
