"use client";

import { useActionState } from "react";
import { addBookmark } from "../actions/bookmark";

export default function AddBookmark() {
  const [state, formAction, pending] = useActionState(
    addBookmark,
    { error: "", success: false }
  );

  return (
    <form action={formAction} className="space-y-3">
      <input
        name="title"
        placeholder="Bookmark title"
        required
        className="w-full border p-2 rounded"
      />

      <input
        name="url"
        type="url"
        placeholder="https://example.com"
        required
        className="w-full border p-2 rounded"
      />

      {state.error && (
        <p className="text-red-500">{state.error}</p>
      )}

      {state.success && (
        <p className="text-green-600">
          Bookmark added successfully!
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {pending ? "Adding..." : "Add Bookmark"}
      </button>
    </form>
  );
}