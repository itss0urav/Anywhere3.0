import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { FaUser } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MdOutlineEditNote } from "react-icons/md";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Careers",
    href: "/carrers/",
    description: "Positions opening soon",
  },
  {
    title: "Services",
    href: "/services/",
    description: "What we provide",
  },
  {
    title: "Help",
    href: "/help/",
    description: "Connect with us",
  },
];

export function Navbar({ className }: { className?: string }) {
  return (
    <NavigationMenu className={cn(className, " max-w-screen z-[11]")}>
      <NavigationMenuList className="text-white">
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Create <MdOutlineEditNote />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink className="hover:bg-slate-800" asChild>
                  <ListItem
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/community/create/"
                  >
                    <FaUser className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Community
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Have some fun ideas you want to share?
                    </p>
                  </ListItem>
                </NavigationMenuLink>
              </li>
              <ListItem
                className="hover:bg-slate-800"
                href="/post/create"
                title="Create Post"
              >
                See what others have shared...{" "}
              </ListItem>
              <ListItem
                className="hover:bg-slate-800"
                href="/communities"
                title="Browse Communities"
              >
                See what others have shared...{" "}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  className="hover:bg-slate-800"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
