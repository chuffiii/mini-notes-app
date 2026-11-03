import { AddNotes } from "@/components/AddNotes";
import { DeleteNodes } from "@/components/DeleteNotes";
import { Notes } from "@/components/Notes";



export default async function Home() {


  return (
    <main className="max-w-2xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Create notes
        </h1>

        <p className="text-gray-500">
          save and manage notes
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Add New Note
        </h2>
        <AddNotes />
      </section>
      <section className="space-y-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">
            Created Notes
          </h2>
        </div>
        <div>
          <Notes />
        </div>


      </section>
    </main>
  );
}