"use server";
import { addFavorite, removeFavorite } from "@/app/db";

/**
 * Adds the given recipeID to the current user's favorites.
 */
export async function handleAddFavorite(recipeID: string) {
  await addFavorite(recipeID);
}

/**
 * Removes the given recipeID from the current user's favorites.
 */
export async function handleRemoveFavorite(recipeID: string) {
  await removeFavorite(recipeID);
}
