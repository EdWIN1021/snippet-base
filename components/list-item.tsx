import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CaretRightIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

async function getList(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/edwin1021/notes/contents/${name}?ref=unreal-engine`,
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

interface ListItemProps {
  name: string;
}

const ListItem: React.FC<ListItemProps> = ({ name }) => {
  const [show, toggle] = useState(false);
  const { data } = useQuery({
    queryKey: ["list", name],
    queryFn: () => getList(name),
    enabled: show,
  });

  const handleClick = async () => {
    toggle((show) => !show);
  };

  return (
    <li>
      <Button variant={"ghost"} onClick={handleClick}>
        {show ? (
          <CaretDownIcon className="mr-2" />
        ) : (
          <CaretRightIcon className="mr-2" />
        )}
        {name}
      </Button>

      {show && (
        <ul className="ml-10">
          {data?.map((item) => (
            <li key={item.name}>
              <Link
                className={navigationMenuTriggerStyle()}
                href={`/pages/${name}/${item?.name}`}
                key={item?.name}
              >
                {item?.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ListItem;
