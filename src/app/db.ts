import postgres from "postgres";
import { cookies } from "next/headers";

const db = postgres({
  host: "localhost",
  port: 5432,
  database: "postgres",
  username: "andreaszacchi",
  password: "admin",
});

// const db = postgres({
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });

async function getUserID(): Promise<string> {
  "use server";
  const cookieStore = await cookies();
  const userID = cookieStore.get("session")?.value.split("_bestrecipesiteever")[0];
  if (!userID) {
    throw new Error("User not authenticated");
  }
  return userID;
}

async function getRecipes(searchParam?: string) {
  "use server";
  console.log(searchParam);
  let recipes;
  if (searchParam) {
    recipes = await db.unsafe("SELECT * from recipes WHERE name ~* $1", [searchParam]);
  } else {
    recipes = await db.unsafe("SELECT * from recipes");
  }
  return recipes;
}

async function getRecipesByUser(userID: string) {
  "use server";
  const recipes = await db.unsafe("SELECT * from recipes WHERE created_by = $1", [userID]);
  return recipes;
}

async function getFavoritesByUser(userID: string) {
  "use server";
  const favorites = await db.unsafe("SELECT recipe FROM favorites WHERE username = $1", [userID]);
  return favorites;
}

async function addFavorite(recipeID: string) {
  "use server";
  const userID = await getUserID();
  await db.unsafe("INSERT INTO favorites (username, recipe) VALUES ($1, $2)", [userID, recipeID]);
}

async function removeFavorite(recipeID: string) {
  "use server";
  const userID = await getUserID();
  await db.unsafe("DELETE FROM favorites WHERE username = $1 AND recipe = $2", [userID, recipeID]);
}

async function checkFavorite(recipeID: string) {
  "use server";
  const userID = await getUserID();
  const favorite = await db.unsafe("SELECT * FROM favorites WHERE username = $1 AND recipe = $2", [
    userID,
    recipeID,
  ]);
  console.log(favorite);
  return favorite.length > 0;
}

async function getRecipe(recipeID: string) {
  "use server";
  const recipe = await db.unsafe("SELECT * from recipes WHERE id = $1", [recipeID]);
  if (recipe.length === 0) {
    throw new Error(`Recipe with ID ${recipeID} not found`);
  }
  return recipe[0];
}

async function createRecipe(recipe: {
  name: string;
  time: string;
  servings: string;
  ingredients: string;
  instructions: string;
  image_url: string;
}) {
  "use server";
  const { name, time, servings, ingredients, instructions, image_url } = recipe;
  const cookieStore = await cookies();
  const created_by = cookieStore.get("session")?.value.split("_bestrecipesiteever")[0];

  if (!created_by) {
    throw new Error("User not authenticated");
  }

  console.log("Creating recipe:", {
    name,
    time,
    servings,
    ingredients,
    instructions,
    image_url,
    created_by,
  });
  const result = await db.unsafe(
    "INSERT INTO recipes (created_by, name, total_time, servings, instructions, ingredients, image_path) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id",
    [created_by, name, time, servings, instructions, ingredients, image_url]
  );
  return result[0].id;
}

export default db;
export {
  getRecipes,
  getRecipe,
  createRecipe,
  getRecipesByUser,
  getFavoritesByUser,
  addFavorite,
  removeFavorite,
  checkFavorite,
  getUserID,
};
