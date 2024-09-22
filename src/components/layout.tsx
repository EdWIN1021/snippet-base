import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import axios from "axios";
import { useEffect, useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Layout() {
  const editor = useCreateBlockNote();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://api.github.com/repos/EdWIN1021/programming-languages/contents/defer/main.go?ref=go"
        );
        setData(res.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-[100vh]">
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <span>Loading...</span>
          </div>
        ) : (
          <>
            <BlockNoteView
              editor={editor}
              shadCNComponents={
                {
                  // Pass modified ShadCN components from your project here.
                  // Otherwise, the default ShadCN components will be used.
                }
              }
            />
            <SyntaxHighlighter language="go" style={docco}>
              {data ? atob(data) : "No content available"}
            </SyntaxHighlighter>
          </>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
