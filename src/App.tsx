import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SideBar from "@/components/side-bar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-[100vh]">
      <ResizablePanel defaultSize={20}>
        <SideBar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <Outlet />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
