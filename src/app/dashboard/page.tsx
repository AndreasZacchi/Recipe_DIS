"use server";
import { getRecipesByUser, getFavoritesByUser, getRecipe } from "@/app/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { Row } from "postgres";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const userID = cookieStore.get("session")?.value.split("_bestrecipesiteever")[0];
  if (!userID) {
    return <div>Please log in to view your dashboard.</div>;
  }
  const userRecipes = await getRecipesByUser(userID);
  const userFavorites = await getFavoritesByUser(userID);
  const recipeFavorites: Promise<Row & Iterable<Row>>[] = [];
  if (!userRecipes || !userFavorites) {
    return <div>Error loading your dashboard data.</div>;
  }

  if (userFavorites.length > 0) {
    userFavorites.forEach((favorite: any) => {
      recipeFavorites.push(getRecipe(favorite.recipe));
    });
  }
  const resolvedRecipeFavorites = await Promise.all(recipeFavorites);
  console.log(resolvedRecipeFavorites);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex gap-4">
        <section className="flex-1 shadow-md rounded p-4">
          <h2>Your Recipes</h2>
          <ul className="list-disc pl-5">
            {userRecipes.map((recipe: any) => (
              <li key={recipe.id}>
                <Link className="text-blue-500 hover:text-blue-600" href={`recipes/${recipe.id}`}>
                  {recipe.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex-1 shadow-md rounded p-4">
          <h2>Your Favorites</h2>
          <ul className="list-disc pl-5">
            {resolvedRecipeFavorites.map((favorite: any) => (
              <li key={favorite.id}>
                <Link className="text-blue-500 hover:text-blue-600" href={`recipes/${favorite.id}`}>
                  {favorite.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
