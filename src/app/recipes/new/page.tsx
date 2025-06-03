"use server";
import { createRecipe } from "@/app/db";
import { redirect } from "next/navigation";

export default async function NewRecipePage() {
  async function sanitiseList(input: string): Promise<string> {
    "use server";
    return input.replace(/(\r\n|\n|\r)/gm, "");
  }

  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString();
    const image_url = formData.get("image_url")?.toString();
    const time = formData.get("time")?.toString();
    const servings = formData.get("servings")?.toString();
    const ingredients = formData.get("ingredients")?.toString();
    const instructions = formData.get("instructions")?.toString();

    if (!name || !time || !servings || !ingredients || !instructions) {
      console.log("All fields are required");
      return;
    }

    const id = await createRecipe({
      name,
      time,
      servings,
      ingredients: await sanitiseList(ingredients),
      instructions: await sanitiseList(instructions),
      image_url: image_url || "",
    });
    redirect(`/recipes/${id}`);
  }
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white mt-3 shadow-lg rounded-lg p-6 w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
          <form action={handleSubmit} className="space-y-2">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label htmlFor="ImageURL" className="block mb-1">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                id="image_url"
                name="image_url"
                type="text"
                className="w-full border rounded px-2 py-1"
                placeholder="https://example.com/image.png"
              />
            </div>
            <div>
              <label htmlFor="time" className="block mb-1">
                Time <span className="text-red-500">*</span>
              </label>
              <input
                id="time"
                name="time"
                type="text"
                placeholder="e.g. 30 min"
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label htmlFor="servings" className="block mb-1">
                Servings <span className="text-red-500">*</span>
              </label>
              <input
                id="servings"
                name="servings"
                className="w-full border rounded px-2 py-1"
                placeholder="e.g. 4 servings"
                required
              />
            </div>
            <div>
              <label htmlFor="ingredients" className="block mb-1">
                Ingredients (comma-separated) <span className="text-red-500">*</span>
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                rows={6}
                placeholder="400g flour, 200ml water, etc."
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label htmlFor="instructions" className="block mb-1">
                Instructions (comma-separated) <span className="text-red-500">*</span>
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows={8}
                placeholder="Start by mixing the flour and water, put it in the oven, etc."
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 hover:cursor-pointer">
              Save Recipe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
