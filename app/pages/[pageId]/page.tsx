import dynamic from "next/dynamic";

export const Editor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

export default function Page() {
  return <Editor />;
}
