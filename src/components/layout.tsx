import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import axios from "axios";
import { useEffect, useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SideBar from "./side-bar";
import CustomBlockNoteViews from "./custom-block-note-view";

export default function Layout() {
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
        <SideBar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <span>Loading...</span>
          </div>
        ) : (
          <>
            <CustomBlockNoteViews />

            <div className="m-10">
              <SyntaxHighlighter language="go" style={atomOneDark}>
                {data ? atob(data) : "No content available"}
              </SyntaxHighlighter>
            </div>
          </>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
