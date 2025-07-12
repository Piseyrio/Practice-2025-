'use server'

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { userSchema, UserSchemaData} from './zod';

export async function createUser(data: UserSchemaData) {

  const parsed = userSchema.safeParse(data)

  if(!parsed.success) {
    throw new Error("failed")
  }
  
  await prisma.user.create({
    data: parsed.data,
  })
  revalidatePath("/")
}