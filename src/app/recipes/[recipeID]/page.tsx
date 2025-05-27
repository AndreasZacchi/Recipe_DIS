import { getRecipe } from "@/app/db";
import Image from "next/image";

export default async function Recipe({ params }: { params: Promise<{ recipeID: string }> }) {
  const { recipeID } = await params;
  const recipe = await getRecipe(recipeID);
  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <div className="flex justify-center mb-6">
        <Image
          className="rounded"
          src={recipe.image_path}
          width={500}
          height={500}
          alt={recipe.name}
        />
      </div>

      <div className="flex justify-center mb-6 gap-x-20">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Total time</h2>
          <p className="text-gray-600">{recipe.total_time}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Servings</h2>
          <p className="text-gray-600">{recipe.servings}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Made by</h2>
        <p className="text-gray-600">{recipe.created_by}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="text-gray-600 list-disc list-inside">
          {recipe.ingredients.split(",").map((ingredient: string, index: number) => (
            <li key={index}>{ingredient.trim()}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="text-gray-600 list-decimal list-inside">
          {recipe.instructions.split(",").map((instruction: string, index: number) => (
            <li key={index}>{instruction.trim()}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
