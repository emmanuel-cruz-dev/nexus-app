import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
