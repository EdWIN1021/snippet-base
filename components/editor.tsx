"use client";

import { useEffect } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { Textarea } from "@/components/ui/textarea";
// import { Block } from "@blocknote/core";

interface EditorProps {
  name: string;
  content: string;
}
const Editor: React.FC<EditorProps> = ({ name, content }) => {
  // const [blocks, setBlocks] = useState<Block[]>([]);

  // const editor = useCreateBlockNote({
  //   initialContent: [
  //     {
  //       type: "paragraph",
  //       content: "Welcome to this demo!",
  //     },
  //     {
  //       type: "heading",
  //       content: "This is a heading block",
  //     },
  //     {
  //       type: "paragraph",
  //       content: "This is a paragraph block",
  //     },
  //     {
  //       type: "paragraph",
  //     },
  //   ],
  // });
  const editor = useCreateBlockNote();

  useEffect(() => {
    async function loadInitialHTML() {
      const blocks = await editor.tryParseMarkdownToBlocks(atob(content));
      editor.replaceBlocks(editor.document, blocks);
    }
    loadInitialHTML();
  }, [editor, content]);

  return (
    <div className="p-10">
      <Textarea
        className="text-5xl border-0 outline-none px-12"
        value={name.split(".")[0]}
        placeholder="New Page"
      />
      <BlockNoteView
        editor={editor}
        // onChange={() => {
        //   setBlocks(editor.document);
        // }}
        editable={false}
      />
    </div>
  );
};

export default Editor;
