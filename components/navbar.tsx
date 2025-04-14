"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="/images/logo.png"
                alt="SLABZ Logo"
                fill
                className="object-contain rounded"
              />
            </div>
            <span className="text-2xl font-bold text-white">slabz</span>
          </Link>
        </div>

        <div className="hidden md:flex relative max-w-md w-full mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by pack or card name"
              className="w-full pl-10 bg-muted/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Link
            href="/how-it-works"
            className={cn(
              "hidden sm:block text-sm font-medium transition-colors hover:text-primary",
              pathname === "/how-it-works" ? "text-primary" : "text-muted-foreground"
            )}
          >
            how does it work?
          </Link>
          <Link href="/signin">
            <Button variant="ghost" size="sm" className="text-sm">
              sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="text-sm">
              sign up
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
