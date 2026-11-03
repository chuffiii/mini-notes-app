import { prisma } from "@/db/client";
import AddBookmark from "@/components/AddBookmark";
import BookmarkList from "@/components/BookmarkList";

export default async function Home() {
  const bookmarks = await prisma.bookmark.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          My Bookmarks
        </h1>

        <p className="text-gray-500">
          Save and manage your favorite websites.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Add New Bookmark
        </h2>

        <AddBookmark />
      </section>

      <section className="space-y-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">
            Saved Bookmarks
          </h2>

          <span>
            {bookmarks.length} saved
          </span>
        </div>

        <BookmarkList bookmarks={bookmarks} />
      </section>
    </main>
  );
}