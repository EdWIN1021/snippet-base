import dynamic from "next/dynamic";

export const Editor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

export default async function Page({
  params,
}: {
  params: { folderId: string; pageId: string };
}) {
  console.log(params);

  const { folderId, pageId } = params;

  const response = await fetch(
    `https://api.github.com/repos/EdWIN1021/notes/contents/unreal-engine/${folderId}/${pageId}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return <Editor content={data?.content} name={data?.name} />;
}
