import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-black shadow">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex gap-8 items-center">
            <Link href="/" className="text-md font-medium text-gray-200">
              New Arrivals
            </Link>
            <Link href="/" className="text-md font-medium text-gray-200">
              Categories
            </Link>
          </div>
          <div className="hidden sm:flex items-center justify-center flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Nirankari Jewellers</span>
              <Image
                src="/nj.png"
                alt="nirankari jewellers"
                className="w-[150px]"
                width={100}
                height={100}
                unoptimized
              />
            </Link>
          </div>
          <div className="flex gap-6 items-center">
            <Link
              href="/contact"
              className="text-gray-200 hover:text-gray-100 px-3 py-2 rounded-md text-md font-medium"
            >
              Shop
            </Link>
            <Link href="/" className="text-md font-medium text-gray-200">
              Contact
            </Link>
          </div>
          <div className="flex sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10 p-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <nav className="flex flex-col space-y-4 mt-4">
                  <Link
                    href="/"
                    className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
