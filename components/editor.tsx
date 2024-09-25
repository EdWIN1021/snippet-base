"use client";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { Input } from "@/components/ui/input";

const Editor = () => {
  const editor = useCreateBlockNote();
  return (
    <div>
      <Input className=" " placeholder="New page" />
      <BlockNoteView editor={editor} />
    </div>
  );
};

export default Editor;
