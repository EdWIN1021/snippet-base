import axios from "axios";
import { useEffect, useState } from "react";
import { CaretRightIcon } from "@radix-ui/react-icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";

const SideBar = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          "https://api.github.com/repos/EdWIN1021/programming-languages/branches"
        );

        setBranches(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load branches.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {branches.map((branch) => (
            <NavigationMenuItem key={branch?.name}>
              <Button
                className="w-full justify-start"
                variant={"ghost"}
                onClick={(e) => {
                  navigate(`/notes/${branch.name}`);
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => e.stopPropagation()}
                >
                  <CaretRightIcon className="h-3 w-3" />
                </Button>

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
