"use server"

import { prisma } from "@/db/client"
import { revalidatePath } from "next/cache"

export async function addNote({title,content}:{title:string,content:string}){
    const note = await prisma.notes.create({
        data:{
            title,
            content
        }
    })

    revalidatePath('/')
    console.log(note)
    return {success:true}
}

export async function deleteNote({id}:{id:number}){
    await prisma.notes.delete({
        where:{id}
    })
    revalidatePath('/')
    return {success:true}
}