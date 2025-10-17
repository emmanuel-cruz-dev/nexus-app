"use client";

import { SessionProvider } from "next-auth/react";

interface GlobalContextProps {
  children: React.ReactNode;
}

function GlobalContext({ children }: GlobalContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default GlobalContext;
