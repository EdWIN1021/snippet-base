import dynamic from "next/dynamic";

export const Editor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

export default async function Page() {
  const response = await fetch(
    "https://api.github.com/repos/EdWIN1021/notes/contents/unreal-engine/Character/Character.md",
    {
      cache: "no-store",
      headers: {
        Authorization: `token ${process.env.ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return <Editor content={data?.content} name={data?.name} />;
}
