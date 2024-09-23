import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CaretRightIcon } from "@radix-ui/react-icons";

const SideBar = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="p-2">
      {branches.map((branch) => (
        <Button
          key={branch?.name}
          variant={"ghost"}
          className="block w-full text-left"
        >
          <div className="flex items-center gap-2">
            <CaretRightIcon />
            {branch?.name}
          </div>
        </Button>
      ))}
    </div>
  );
};

export default SideBar;
