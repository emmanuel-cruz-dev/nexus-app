import HeaderDashboard from "@/components/dashboard/HeaderDashboard";
import { Container, Grid } from "@radix-ui/themes";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ProjectCard from "@/components/projects/ProjectCard";

async function loadProjects(userId: number) {
  return await prisma.project.findMany({
    where: {
      userId,
    },
  });
}

async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const userId = parseInt(session?.user.id as string);
  const projects = await loadProjects(userId);

  return (
    <Container className="mt-10">
      <HeaderDashboard />

      <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Container>
  );
}

export default DashboardPage;
