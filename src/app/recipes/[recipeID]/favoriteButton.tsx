"use client";

import { useState } from "react";
import { handleAddFavorite, handleRemoveFavorite } from "./actions";

type FavoriteButtonProps = {
  recipeID: string;
  initialFavoriteStatus: boolean;
};

export default function FavoriteButton({ recipeID, initialFavoriteStatus }: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(initialFavoriteStatus);

  async function toggleFavorite() {
    const wasFavorited = isFavorited;

    // Optimistically flip the local UI state:
    setIsFavorited((prev) => !prev);

    try {
      if (wasFavorited) {
        // If it was already favorited, remove it
        await handleRemoveFavorite(recipeID);
      } else {
        // Otherwise, add it
        await handleAddFavorite(recipeID);
      }
    } catch (err) {
      console.error("Error toggling favorite:", err);
      setIsFavorited(wasFavorited);
    }
  }

  return (
    <button
      onClick={toggleFavorite}
      className={
        isFavorited
          ? "bg-red-500 text-white py-2 px-4 w-50 rounded hover:cursor-pointer"
          : "bg-blue-500 text-white py-2 px-4 w-50 rounded hover:cursor-pointer"
      }>
      {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}
