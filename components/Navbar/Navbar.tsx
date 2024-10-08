import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenuDemo } from "./NavDrop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Navbar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-black px-4 md:px-6 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          {/* <Package2 className="h-6 w-6" /> */}
          <h1 className="font-bold  text-blue-600 text-xl">
            <a href="/">IDEA</a>
          </h1>
          <span className="sr-only">Idea Nebi</span>
        </Link>
        <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
          Home
        </Link>
        <NavigationMenuDemo />
        <Link
          href="/events"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Events
        </Link>
        <Link
          href="/about"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact Us
        </Link>
        {/* <Link href="#" className="text-foreground transition-colors hover:text-foreground">
          Settings
        </Link> */}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <h1 className="font-bold relative left-10 text-blue-600 text-xl md:hidden">
          <a href="/">IDEA</a>
        </h1>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              {/* <Package2 className="h-6 w-6" /> */}
              <h1 className="font-bold text-blue-600 text-xl">
                <a href="/">IDEA</a>{" "}
              </h1>
              <span className="sr-only">Idea Nebbi</span>
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Thematic Areas</AccordionTrigger>
                <AccordionContent>
                  <a href="/thematic-areas/health">Health</a>
                </AccordionContent>
                <AccordionContent>
                  <a href="/thematic-areas/youth">Youth livelihood</a>
                </AccordionContent>
                <AccordionContent>
                  <a href="/thematic-areas/civic">Civic Accountability</a>
                </AccordionContent>
                <AccordionContent>
                  <a href="/thematic-areas/climate">Climatic Justice</a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link href="/events" className="text-muted-foreground hover:text-foreground">
              Events
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact Us
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      {/* <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-black!"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
    </header>
  );
}
