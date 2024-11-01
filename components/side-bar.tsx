"use client";

import { useQuery } from "@tanstack/react-query";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import ListItem from "./list-item";
import Vault from "./vault";

async function fetchUser() {
  const response = await fetch(
    "https://api.github.com/repos/edwin1021/notes/contents?ref=unreal-engine",
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
  const {
    data: directories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["directories"],
    queryFn: fetchUser,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="p-5 max-h-[100vh] overflow-y-auto overflow-x-hidden ">
      <Vault />
      <div>
        <p className="text-sm text-muted-foreground my-3">Pages</p>
        <ul>
          {directories?.map((item) => (
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
