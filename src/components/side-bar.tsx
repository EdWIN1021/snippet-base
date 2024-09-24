import axios from "axios";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const SideBar = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://api.github.com/repos/EdWIN1021/programming-languages/branches"
        );

        setBranches(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {branches.map((branch) => (
            <NavigationMenuItem key={branch?.name}>
              <Button
                className="w-full justify-start"
                variant={"ghost"}
                onClick={() => {
                  navigate(`/notes/${branch.name}`);
                }}
              >
                {branch?.name}
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default SideBar;
