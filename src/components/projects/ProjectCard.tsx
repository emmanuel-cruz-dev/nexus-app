"use client";

import { Card, Flex, Box, Heading, Text, Separator } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { Project } from "../../../generated/prisma";

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  const router = useRouter();

  return (
    <Card
      size="3"
      variant="surface"
      className="transition-opacity hover:cursor-pointer hover:shadow-md hover:opacity-75"
      onClick={() => router.push(`/dashboard/projects/${project.id}`)}
    >
      <Flex direction="column" gap="3">
        <Box>
          <Heading size="4" weight="medium" mb="1">
            {project.title}
          </Heading>
          <Text color="gray" size="2" mb="2" as="p" className="line-clamp-2">
            {project.description || "Sin descripción disponible."}
          </Text>
        </Box>

        <Separator size="4" my="2" />

        <Flex justify="between" align="center">
          <Text size="1" color="gray">
            Última actualización:
          </Text>
          <Text size="1" color="gray" weight="medium">
            {new Date(project.updatedAt).toLocaleDateString()}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}

export default ProjectCard;

// "use client";

// import { Card, Heading, Text } from "@radix-ui/themes";
// import { useRouter } from "next/navigation";
// import { Project } from "../../../generated/prisma";

// interface Props {
//   project: Project;
// }

// function ProjectCard({ project }: Props) {
//   const router = useRouter();

//   return (
//     <Card
//       key={project.id}
//       className="hover:cursor-pointer hover:opacity-90"
//       onClick={() => router.push(`/dashboard/projects/${project.id}`)}
//     >
//       <Heading>{project.title}</Heading>
//       <Text className="text-slate-500">{project.description}</Text>
//       <Text className="text-sm text-slate-400">
//         Última actualización: {project.updatedAt.toLocaleString()}
//       </Text>
//     </Card>
//   );
// }

// export default ProjectCard;
