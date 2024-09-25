"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import CreateDropdown from "./create-dropdown";

const Sidebar = () => {
  const [pages, setPages] = React.useState([
    { id: 1, title: "Page1" },
    { id: 2, title: "Page2" },
  ]);

  const [whiteboards, setWhiteboards] = React.useState([
    { id: 1, title: "Whiteboard1" },
    { id: 2, title: "Whiteboard2" },
  ]);

  return (
    <div>
      <CreateDropdown setPages={setPages} setWhiteboards={setWhiteboards} />
      <NavigationMenu>
        <NavigationMenuList>
          {pages?.map((page) => (
            <NavigationMenuItem key={page?.id}>
              <Link
                className={navigationMenuTriggerStyle()}
                href={`/pages/${page?.id}`}
              >
                {page.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <NavigationMenuList>
          {whiteboards?.map((whiteboard) => (
            <NavigationMenuItem key={whiteboard?.id}>
              <Link
                className={navigationMenuTriggerStyle()}
                href={`/whiteboards/${whiteboard?.id}`}
              >
                {whiteboard.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Sidebar;
