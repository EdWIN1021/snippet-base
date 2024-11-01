import Note from "@/components/note";
import dynamic from "next/dynamic";

export const Editor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

export default async function Page({
  params,
}: {
  params: { folderId: string; pageId: string };
}) {
  const { folderId, pageId } = params;

  const response = await fetch(
    `https://api.github.com/repos/edwin1021/notes/contents/${folderId}/${pageId}?ref=unreal-engine`,
    {
      cache: "no-store",
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  console.log(atob(data.content));

  return <Note content={atob(data.content)} />;
}
