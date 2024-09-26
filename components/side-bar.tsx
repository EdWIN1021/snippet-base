"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { CaretRightIcon } from "@radix-ui/react-icons";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import CreateDropdown from "./create-dropdown";
import { Button } from "./ui/button";
import { useState } from "react";
import ListItem from "./list-item";

async function fetchUser() {
  const response = await fetch(
    "https://api.github.com/repos/EdWIN1021/notes/contents/unreal-engine/",
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

  const [, setPages] = useState([
    { id: 1, title: "Page1" },
    { id: 2, title: "Page2" },
  ]);

  const [, setWhiteboards] = useState([
    { id: 1, title: "Whiteboard1" },
    { id: 2, title: "Whiteboard2" },
  ]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="p-5 max-h-[100vh] overflow-y-auto overflow-x-hidden ">
      <CreateDropdown setPages={setPages} setWhiteboards={setWhiteboards} />

      <Link className={navigationMenuTriggerStyle()} href={`/`}>
        Home
      </Link>

      <div>
        <p className="text-sm text-muted-foreground my-3">Pages</p>
        <ul>
          {data?.map((item) => (
            <div key={item?.name}>
              {item?.name.split(".").length < 2 && (
                <ListItem key={item?.name} name={item?.name} />
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
