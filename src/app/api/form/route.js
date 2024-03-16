import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { nombre, number, email, msg } = await request.json()
  const newForm = await prisma.form.create({
    data: {
      nombre,
      number,
      email,
      msg
    }
  })
  return NextResponse.json(newForm)
}