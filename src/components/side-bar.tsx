import axios from "axios";
import { useEffect, useState } from "react";
// import { CaretRightIcon } from "@radix-ui/react-icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useParams } from "react-router-dom";

const SideBar = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

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
    // <NavigationMenu>
    //   <NavigationMenuList>
    //     {branches.map((branch) => (
    //       <NavigationMenuItem key={branch?.name}>
    //         <Link to={`/notes/${branch.name}`}>
    //           <NavigationMenuLink
    //             className={navigationMenuTriggerStyle()}
    //             active={params.noteId === branch.name}
    //           >
    //             {branch?.name}
    //           </NavigationMenuLink>
    //         </Link>
    //       </NavigationMenuItem>
    //     ))}
    //   </NavigationMenuList>
    // </NavigationMenu>

    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
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
};

export default SideBar;
