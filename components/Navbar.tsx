import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200/70 bg-white/50 backdrop-blur-md supports-[backdrop-filter]:bg-white/40">
      <div className="max-w-2xl mx-auto px-8 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-light tracking-tight text-gray-900 hover:text-gray-700 transition-colors">
          My Blog
        </Link>
        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">Posts</Link>
          <a href="https://github.com/mahirmahtab" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
          <a href="mailto:mahir.mahtab@example.com" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Mobile menu */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open menu" className="p-2 rounded-md border border-gray-200 bg-white/60 hover:bg-white/80 transition-colors backdrop-blur">
              <Menu className="h-5 w-5 text-gray-800" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/40 backdrop-blur-xl border-l border-white/30">
              <div className="px-6 py-6">
                <div className="text-lg font-light tracking-tight text-gray-900 mb-6">Menu</div>
                <nav className="flex flex-col gap-4 text-base text-gray-700">
                  <SheetClose asChild>
                    <Link href="/" className="hover:text-gray-900 transition-colors">Posts</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="https://github.com/mahirmahtab" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="mailto:mahir.mahtab@example.com" className="hover:text-gray-900 transition-colors">Contact</a>
                  </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
