"use client";

import { Pencil1Icon } from "@radix-ui/react-icons";
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
} from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";

function ProjectNewPage() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Box>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex align="center" justify="center" height="100vh" width="100%">
          <Card size="3" style={{ width: "100%", maxWidth: 480 }}>
            <Flex direction="column" gap="4">
              <Heading size="6" weight="bold">
                Create a new project
              </Heading>

              <form onSubmit={onSubmit}>
                <Flex direction="column" gap="3">
                  <Box>
                    <Text as="label" htmlFor="title" weight="medium">
                      Project title
                    </Text>
                    <Controller
                      name="title"
                      control={control}
                      rules={{
                        required: {
                          message: "El título es obligatorio",
                          value: true,
                        },
                      }}
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
                      Project description
                    </Text>
                    <Controller
                      name="description"
                      control={control}
                      rules={{
                        required: {
                          message: "La descripción es obligatoria",
                          value: true,
                        },
                      }}
                      render={({ field }) => (
                        <TextArea
                          id="description"
                          placeholder="Write something about the project..."
                          mt="1"
                          {...field}
                        />
                      )}
                    />
                  </Box>

                  <Button type="submit" mt="3">
                    Create project
                  </Button>
                </Flex>
              </form>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </Box>
  );
}

export default ProjectNewPage;

// "use client";

// import {
//   TextField,
//   TextArea,
//   Button,
//   Container,
//   Flex,
//   Card,
//   Heading,
// } from "@radix-ui/themes";
// function ProjectNewPage() {
//   return (
//     <div>
//       <Container size="1" height="100%" className="p-3 md:p-0">
//         <Flex className="h-screen w-full items-center">
//           <Card className="w-full p-7">
//             <Heading className="text-2xl font-bold">
//               Create a new project
//             </Heading>
//             <form className="flex flex-col gap-3">
//               <label>Project title</label>
//               <TextField.Root placeholder="Project title" />

//               <label>Project description</label>
//               <TextArea placeholder="Reply to comment..." />

//               <Button type="submit" mt="4">
//                 Create project
//               </Button>
//             </form>
//           </Card>
//         </Flex>
//       </Container>
//     </div>
//   );
// }

// export default ProjectNewPage;
