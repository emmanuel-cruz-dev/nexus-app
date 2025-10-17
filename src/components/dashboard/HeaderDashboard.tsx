"use client";

import { Heading, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

function HeaderDashboard() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-4">
      <Heading>Projects</Heading>
      <Button onClick={() => router.push("/dashboard/projects/new")}>
        Create Project
      </Button>
    </div>
  );
}

export default HeaderDashboard;
