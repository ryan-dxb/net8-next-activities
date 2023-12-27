import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface NavbarProps {
  // Add your page props here
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="w-full h-14 bg-primary text-primary-foreground">
      <div className="flex flex-row items-center w-full h-full mx-4 max-w-7xl xl:mx-auto">
        <div className="flex flex-row items-center justify-between w-full h-full">
          <div className="flex flex-row items-center">
            <div className="relative w-8 h-8">
              <Image fill src="/logo.png" alt="logo" />
            </div>
            <h1 className="ml-2 text-2xl font-bold">Reactivities</h1>
          </div>
        </div>

        <ul className="flex flex-row items-center space-x-4">
          <li>
            <Link
              href="/activities"
              className="transition duration-200 hover:text-primary-foreground/80"
            >
              Activities
            </Link>
          </li>
          <Separator
            orientation="vertical"
            className="w-[1px] h-6 bg-primary-foreground/30"
          />
          <Button variant="secondary">Create Activity</Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
