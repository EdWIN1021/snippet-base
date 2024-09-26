"use client";

import * as React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import CreateDropdown from "./create-dropdown";

async function fetchUser() {
  const response = await fetch(
    "https://api.github.com/repos/EdWIN1021/notes/contents/unreal-engine",
    {
      cache: "no-store",
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return data;
}

const Sidebar = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
  });

  console.log(data);

  const [pages, setPages] = React.useState([
    { id: 1, title: "Page1" },
    { id: 2, title: "Page2" },
  ]);

  const [whiteboards, setWhiteboards] = React.useState([
    { id: 1, title: "Whiteboard1" },
    { id: 2, title: "Whiteboard2" },
  ]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="p-5 max-h-[100vh] overflow-y-scroll overflow-x-hidden">
      <CreateDropdown setPages={setPages} setWhiteboards={setWhiteboards} />

      <Link className={navigationMenuTriggerStyle()} href={`/`}>
        Home
      </Link>

      <div>
        <p className="text-sm text-muted-foreground my-3">Pages</p>
        <ul>
          {data?.map((item) => (
            <li key={item?.id}>
              <Link
                className={navigationMenuTriggerStyle()}
                href={`/pages/${item?.id}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
