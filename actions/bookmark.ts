"use server";

import { prisma } from "../db/client";
import { revalidatePath } from "next/cache";

type ActionState = {
  error: string;
  success: boolean;
};

export async function addBookmark(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const title = formData.get("title");
  const url = formData.get("url");

  if (
    typeof title !== "string" ||
    typeof url !== "string" ||
    !title.trim() ||
    !url.trim()
  ) {
    return { error: "Both fields are required.", success: false };
  }

  try {
    const parsedUrl = new URL(url.trim());

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      throw new Error("Invalid protocol");
    }
  } catch {
    return { error: "Please enter a valid HTTP or HTTPS URL.", success: false };
  }

  try {
    await prisma.bookmark.create({
      data: {
        title: title.trim(),
        url: url.trim(),
      },
    });

    revalidatePath("/");

    return { error: "", success: true };
  } catch {
    return { error: "Something went wrong. Please try again.", success: false };
  }
}

export async function deleteBookmark(id: number) {
  if (!id) {
    throw new Error("Invalid bookmark ID");
  }

  await prisma.bookmark.delete({
    where: { id:Number(id)},
  });

  revalidatePath("/");
}