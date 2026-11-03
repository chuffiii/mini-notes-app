"use client";

import { useState } from "react";
import DeleteBookmark from "./DeleteBookmark";

type Bookmark = {
  id: number;
  title: string;
  url: string;
  createdAt: Date;
};

export default function BookmarkList({
  bookmarks,
}: {
  bookmarks: Bookmark[];
}) {
  const [search, setSearch] = useState("");

  const filteredBookmarks = bookmarks.filter((bookmark) =>
    bookmark.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search bookmarks..."
        className="w-full border p-2 rounded"
      />

      {filteredBookmarks.length === 0 ? (
        <p className="text-gray-500">No bookmarks found.</p>
      ) : (
        filteredBookmarks.map((bookmark) => (
          <div
            key={bookmark.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{bookmark.title}</h2>

              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm"
              >
                {bookmark.url}
              </a>
            </div>

            <DeleteBookmark id={bookmark.id} />
          </div>
        ))
      )}
    </div>
  );
}