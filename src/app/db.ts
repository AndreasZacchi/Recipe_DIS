import postgres from "postgres";

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

async function getRecipe(recipeID: string) {
  "use server";
  const recipe = await db.unsafe("SELECT * from recipes WHERE id = $1", [recipeID]);
  if (recipe.length === 0) {
    throw new Error(`Recipe with ID ${recipeID} not found`);
  }
  return recipe[0];
}

export default db;
export { getRecipes, getRecipe };
