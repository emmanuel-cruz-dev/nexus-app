"use client";

import { Container, Heading, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

function DashboardPage() {
  const router = useRouter();

  return (
    <Container className="mt-10">
      <div className="flex justify-between">
        <Heading>Projects</Heading>
        <Button onClick={() => router.push("/dashboard/projects/new")}>
          Create Project
        </Button>
      </div>
    </Container>
  );
}

export default DashboardPage;
