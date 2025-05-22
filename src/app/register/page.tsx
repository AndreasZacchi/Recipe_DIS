"use server";
import { redirect } from "next/navigation";
import db from "../db";
import { cookies } from "next/headers";

export default async function Register() {
  async function register(formData: FormData) {
    "use server";
    const username = formData.get("username")?.toString().toLowerCase();
    const password = formData.get("password")?.toString();

    if (username !== null && password !== null) {
      if (username === "" || password === "") {
        console.log("Username or password is empty");
        return;
      }
      try {
        const users = await db.unsafe(
          "INSERT INTO Users VALUES('" + username! + "', '" + password! + "')"
        );
        const cookieStore = await cookies();
        cookieStore.set("session", username + "_bestrecipesiteever", {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000), // 1 week
          sameSite: "lax",
          path: "/",
        });
        redirect("/home");
      } catch (error) {
        console.log("Error inserting user: " + error);
        return;
      }
    } else {
      console.log("Username or password is null");
      return;
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center mb-50 w-72 h-100 bg-gray-400 rounded-lg">
        <form action={register} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="p-2 border rounded bg-white"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="p-2 border rounded bg-white"
          />
          <button
            type="submit"
            className="p-2 border rounded bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
