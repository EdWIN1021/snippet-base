"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlusIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

interface CreateDropdownProps {
  setPages: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
      }[]
    >
  >;

  setWhiteboards: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
      }[]
    >
  >;
}

const CreateDropdown: React.FC<CreateDropdownProps> = ({
  setPages,
  setWhiteboards,
}) => {
  const router = useRouter();

  const handleCreatePage = () => {
    const newPageId = Date.now();
    setPages((prev) => [...prev, { id: newPageId, title: "new page" }]);
    router.push(`/pages/${newPageId}`);
  };

  const handleWhiteboard = () => {
    const newWhiteboardId = Date.now();
    setWhiteboards((prev) => [
      ...prev,
      { id: newWhiteboardId, title: "new whiteboard" },
    ]);
    router.push(`/whiteboards/${newWhiteboardId}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <PlusIcon className="h-5 w-5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Create</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleCreatePage}>Page</DropdownMenuItem>
        <DropdownMenuItem onClick={handleWhiteboard}>
          Whiteboard
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CreateDropdown;
