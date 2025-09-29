import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MediumLogo from "@/assets/medium-logo.svg";
import {
  ArrowTopRight,
  BellIcon,
  HamburgerMenuIcon,
  SearchIcon,
  WriteIcon,
} from "./icons";

export function Header() {
  return (
    <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex items-center justify-center py-2 font-light text-[#6B6B6B] space-x-2 border-b border-border/50 text-xs sm:hidden">
        <span>Open on app </span>
        <ArrowTopRight />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-14">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="lg:hidden p-2">
              <HamburgerMenuIcon className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <img src={MediumLogo} alt="Medium Logo" className="w-30" />
            </div>
          </div>

          {/* Center - Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-10 bg-muted/30 border-0  rounded-full"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex items-center gap-2 hover:bg-muted rounded-full px-3 text-gray-600 font-light"
            >
              <WriteIcon className="h-6 w-6" />
              <span className="hidden md:inline">Write</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex hover:bg-muted rounded-full p-2 text-gray-600"
            >
              <BellIcon className="h-5 w-5" />
            </Button>
            <SearchIcon className="h-6 w-6 sm:hidden hover:bg-muted text-gray-400" />
            <Avatar className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                S
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
