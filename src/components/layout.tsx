import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import axios from "axios";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SideBar from "./side-bar";
// import CustomBlockNoteViews from "./custom-block-note-view";

import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

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

  const initialNodes = useMemo(
    () => [
      { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
      {
        id: "2",
        position: { x: 0, y: 100 },
        style: {
          backgroundColor: "#6865A5",
          width: "500px",
          height: "500px",
          textAlign: "left",
        },
        data: {
          label: (
            <div>
              <SyntaxHighlighter language="go" style={atomOneDark}>
                {data ? atob(data) : "No content available"}
              </SyntaxHighlighter>
            </div>
          ),
        },
      },
    ],
    [data]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes(initialNodes);
  }, [initialNodes, setNodes]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-[100vh]">
      <ResizablePanel defaultSize={20}>
        <SideBar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <Outlet />
        {/* {loading ? (
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
        )} */}

        {/* <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow> */}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
