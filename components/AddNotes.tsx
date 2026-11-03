"use client"

import { addNote } from "@/actions/notes"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function AddNotes() {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const router = useRouter()

    async function addNotes(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        await addNote({ title, content })

        setTitle('')
        setContent('')

        router.refresh()
    }

    return (
        <div>
            <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-xl border">

                <h2 className="text-2xl font-bold mb-6 text-white">
                    Create a Note
                </h2>

                <form className="flex flex-col gap-4" onSubmit={addNotes}>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-white">
                            Title
                        </label>

                        <input
                            type="text"
                            placeholder="Enter note title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-white">
                            Content
                        </label>

                        <textarea
                            placeholder="Write your note..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Save Note
                    </button>

                </form>
            </div>
        </div>
    )
}