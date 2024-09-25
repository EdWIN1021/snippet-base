"use client";

import { useState } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { Textarea } from "@/components/ui/textarea";

export default function Editor() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
      {
        type: "heading",
        content: "This is a heading block",
      },
      {
        type: "paragraph",
        content: "This is a paragraph block",
      },
      {
        type: "paragraph",
      },
    ],
  });

  console.log(JSON.stringify(blocks, null, 2));

  return (
    <div className="p-10">
      <Textarea
        className="text-5xl border-0 outline-none px-12"
        placeholder="New Page"
      />
      <BlockNoteView
        editor={editor}
        onChange={() => {
          setBlocks(editor.document);
        }}
      />
    </div>
  );
}
