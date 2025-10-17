"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Flex,
  TextField,
  TextArea,
  Button,
  Container,
  Card,
  Heading,
  Text,
  Separator,
} from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Project } from "../../../../../generated/prisma";
// import { toast } from "sonner";

function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams() as { projectId: string };
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [projectData, setProjectData] = useState<Project | null>(null);

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`/api/projects/${params.projectId}`);
        const data = res.data;
        setValue("title", data.title);
        setValue("description", data.description);
        setProjectData(data);
      } catch (error) {
        console.error(error);
        // toast.error("Error loading project");
        router.push("/dashboard");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProject();
  }, [params.projectId, router, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    setIsSaving(true);
    try {
      const res = await axios.put(`/api/projects/${params.projectId}`, data);
      if (res.status === 200) {
        // toast.success("Project updated");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      // toast.error("Error updating project");
    } finally {
      setIsSaving(false);
    }
  });

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/projects/${params.projectId}`);
      if (res.status === 200) {
        // toast.success("Project deleted");
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      console.error("Error deleting project");
      // toast.error("Error deleting project");
    }
  };

  if (isLoading) {
    return (
      <Flex align="center" justify="center" height="100vh">
        <Text>Cargando...</Text>
      </Flex>
    );
  }

  return (
    <Box>
      <Container size="4" height="100%" className="p-3 md:p-0">
        <Flex align="center" justify="center" height="100vh" width="100%">
          <Card size="4" style={{ width: "100%", maxWidth: 540 }}>
            <Flex direction="column" gap="4">
              <Heading size="6" weight="bold">
                Detalles del proyecto
              </Heading>

              <Separator size="4" />

              <form onSubmit={onSubmit}>
                <Flex direction="column" gap="3">
                  <Box>
                    <Text as="label" htmlFor="title" weight="medium">
                      Título
                    </Text>
                    <Controller
                      name="title"
                      control={control}
                      render={({ field }) => (
                        <TextField.Root
                          id="title"
                          placeholder="Project title"
                          mt="1"
                          {...field}
                        >
                          <TextField.Slot>
                            <Pencil1Icon height="16" width="16" />
                          </TextField.Slot>
                        </TextField.Root>
                      )}
                    />
                  </Box>

                  <Box>
                    <Text as="label" htmlFor="description" weight="medium">
                      Descripción
                    </Text>
                    <Controller
                      name="description"
                      control={control}
                      render={({ field }) => (
                        <TextArea
                          id="description"
                          placeholder="Edit project description..."
                          size="3"
                          rows={4}
                          mt="1"
                          {...field}
                        />
                      )}
                    />
                  </Box>
                  <Separator size="4" my="3" />

                  <Flex justify="between" align="center">
                    <Text color="gray">Creado</Text>
                    <Text color="gray" weight="medium">
                      {projectData?.createdAt
                        ? new Date(projectData.createdAt).toLocaleDateString()
                        : "—"}
                    </Text>
                  </Flex>

                  <Flex justify="between" align="center">
                    <Text color="gray">Última actualización</Text>
                    <Text color="gray" weight="medium">
                      {projectData?.updatedAt
                        ? new Date(projectData.updatedAt).toLocaleDateString()
                        : "—"}
                    </Text>
                  </Flex>

                  <Flex justify="between" mt="4">
                    <Button
                      type="submit"
                      disabled={isSaving}
                      color="blue"
                      variant="solid"
                    >
                      {isSaving ? "Guardando..." : "Guardar cambios"}
                    </Button>

                    <Button
                      color="red"
                      variant="soft"
                      onClick={handleDelete}
                      type="button"
                    >
                      <TrashIcon />
                      Eliminar
                    </Button>
                  </Flex>
                </Flex>
              </form>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </Box>
  );
}

export default ProjectDetailPage;

// "use client";
// import { Text, TextArea, Container } from "@radix-ui/themes";
// import { useParams } from "next/navigation";
// import axios from "axios";
// import { useEffect, useState } from "react";

// function ProjectDetailsPage() {
//   const { projectId } = useParams();

//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     axios.get(`/api/projects/${projectId}`).then((res) => {
//       setProject(res.data);
//     });
//   }, [projectId]);

//   if (!project) {
//     return <Container>Loading...</Container>;
//   }

//   return (
//     <Container size="1" height="100%" className="p-3 md:p-0">
//       <Text>Detalles del proyecto</Text>
//       {project && (
//         <>
//           <Text>{project.title}</Text>
//           <Text>{project.description}</Text>
//         </>
//       )}
//     </Container>
//   );
// }

// export default ProjectDetailsPage;
