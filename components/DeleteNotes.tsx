'use client'

import { useState } from "react"
import { deleteNote } from "@/actions/notes"

export function DeleteNodes({id}:{id:number}){

const [loading,setLoading] = useState(true)

async function NoteDelete(){
    await deleteNote({id});
    setLoading(false)
}   

    return (
    <button
        className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition duration-200 disabled:opacity-50"
        onClick={NoteDelete}
        disabled={!loading}
    >
        {loading ? 'Delete' : 'Deleted'}
    </button>
)
}