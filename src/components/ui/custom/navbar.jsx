'use client';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="w-full  max-w-7xl  mx-auto md:px-8 flex items-center justify-between py-4 bg-white dark:bg-gray-800">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6 text-fuchsia-600 " />
        <span className="text-lg font-semibold">Gift Hub</span>
      </Link>
      <div className="hidden md:flex gap-2 ">
        <Link
          href="/"
          className="flex w-full items-center py-2 text-base"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/finding-gift"
          className="flex   w-[300px]  py-2 text-base "
          prefetch={false}
        >
          Find Gift
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid w-[200px] p-4">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-base"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/finding-gift"
              className="flex w-full items-center py-2 text-base"
              prefetch={false}
            >
              Find Gift
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
