import Link from "next/link";
import Image from "next/image";
import { getRecipes } from "./db";

export default async function Home({ searchParams }: { searchParams: { query?: string } }) {
  const query = (await searchParams).query || undefined;
  const recipes = await getRecipes(query);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col w-1/2">
          <p className="mt-4">Your one-stop solution for all your recipe needs.</p>
        </div>
        <form method="get" className="flex items-center mt-4 mb-6 ml-2">
          <input
            type="text"
            name="query"
            defaultValue={query || ""}
            placeholder="Search recipes..."
            className="px-4 py-2 border rounded-l focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r hover:cursor-pointer hover:bg-blue-600">
            Search
          </button>
          <Link
            href="/recipes/new"
            className="ml-2 px-4 py-2 w-m bg-green-500 text-white rounded hover:bg-green-600">
            Add New Recipe
          </Link>
        </form>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Link href={`/recipes/${recipe.id}`} key={recipe.id} className="mx-4">
                <div className="p-4 rounded shadow hover:shadow-lg transition">
                  <div className="relative w-full h-72 overflow-hidden">
                    <Image
                      src={recipe.image_path}
                      alt={recipe.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{recipe.name}</h3>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-600 text-center">No recipes found.</p>
          )}
        </div>
      </div>
    </>
  );
}
