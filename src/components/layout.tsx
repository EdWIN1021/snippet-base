import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";

export default function Layout() {
  const editor = useCreateBlockNote();

  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-[100vh]">
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <BlockNoteView
          editor={editor}
          shadCNComponents={
            {
              // Pass modified ShadCN components from your project here.
              // Otherwise, the default ShadCN components will be used.
            }
          }
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
