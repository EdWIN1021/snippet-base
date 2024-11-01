"use client";

import { useQuery } from "@tanstack/react-query";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

async function fetchBranches() {
  const response = await fetch(
    "https://api.github.com/repos/edwin1021/notes/branches",
    {
      cache: "no-store",
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return data;
}

const Vault = () => {
  const {
    data: branches,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <span className={navigationMenuTriggerStyle()}>{branches[1]?.name}</span>
  );
};

export default Vault;
