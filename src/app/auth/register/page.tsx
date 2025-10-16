"use client";

import {
  Box,
  Card,
  Heading,
  Flex,
  Text,
  Link,
  Container,
} from "@radix-ui/themes";
import NextLink from "next/link";
import SignupForm from "@/components/auth/SignupForm";

function RegisterPage() {
  return (
    <Container size="1" height="100vh">
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100%"
        p="4"
      >
        <Card
          size="3"
          style={{ width: "100%", maxWidth: "420px" }}
          variant="surface"
        >
          <Box mb="4">
            <Heading size="6" mb="2">
              Crear cuenta
            </Heading>
            <Text size="2" color="gray">
              Regístrate para comenzar a usar la aplicación.
            </Text>
          </Box>

          <SignupForm />

          <Flex justify="between" mt="4" align="center">
            <Text size="2">¿Ya tienes una cuenta?</Text>
            <Link asChild>
              <NextLink href="/auth/login">Iniciar sesión</NextLink>
            </Link>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}

export default RegisterPage;
