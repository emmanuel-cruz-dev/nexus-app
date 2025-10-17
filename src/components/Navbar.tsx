"use client";

import {
  Container,
  Flex,
  Heading,
  Link,
  DropdownMenu,
  Button,
} from "@radix-ui/themes";
import {
  CaretDownIcon,
  ExitIcon,
  GearIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import NextLink from "next/link";
import { useSession, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="px-10 md:px-0 bg-zinc-950 py-4">
      <Container>
        <Flex justify="between" align="center">
          <NextLink href="/">
            <Heading>Nexus</Heading>
          </NextLink>

          <ul className="flex gap-x-2 items-center">
            <li>
              <Link asChild>
                <NextLink href="/">Home</NextLink>
              </Link>
            </li>
            {!session && (
              <>
                <li>
                  <Link asChild>
                    <NextLink href="/auth/login" passHref>
                      Iniciar sesión
                    </NextLink>
                  </Link>
                </li>
                <li>
                  <Link asChild>
                    <NextLink href="/auth/register" passHref>
                      Registrarse
                    </NextLink>
                  </Link>
                </li>
              </>
            )}
            {session && (
              <>
                <li>
                  <Link asChild>
                    <NextLink href="/dashboard" passHref>
                      Dashboard
                    </NextLink>
                  </Link>
                </li>
                <li>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="soft">
                        {session?.user?.name}
                        <CaretDownIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>
                        <PersonIcon />
                        Mi Perfil
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <GearIcon /> Ajustes
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item color="red" onClick={() => signOut()}>
                        <ExitIcon />
                        Cerrar sesión
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </li>
              </>
            )}
          </ul>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
