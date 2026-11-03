"use client";

import { useFormStatus } from "react-dom";
import { deleteBookmark } from "../actions/bookmark";

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="text-red-500 disabled:opacity-50"
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}

export default function DeleteBookmark({
  id,
}: {
  id: number;
}) {
  const action = deleteBookmark.bind(null, id);

  return (
    <form action={action}>
      <DeleteButton />
    </form>
  );
}