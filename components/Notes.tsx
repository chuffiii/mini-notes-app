import { prisma } from "@/db/client";
import { DeleteNodes } from "./DeleteNotes";

export async function Notes() {
    'use cache'
    const notes = await prisma.notes.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    if (notes.length === 0) {
        return <div>
            no notes exist!!!!
        </div>
    }

    return (
        <div>
            <ul className="w-180 mx-auto mt-8">
                {notes.map(note => (
                    <li
                        key={note.id}
                        className=" p-5 rounded-xl shadow-md border border-gray-200"
                    >
                        <h2 className=" flex justify-between text-xl font-bold text-white-800 mb-2">
                            <div>{note.title}</div>
                            <div> <DeleteNodes id={note.id} /> </div>
                        </h2>

                        <p className="text-gray-600 mb-4">
                            {note.content}
                        </p>

                        <p className="text-sm text-white-400">
                            Created at: {new Date(note.createdAt).toLocaleDateString()}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}