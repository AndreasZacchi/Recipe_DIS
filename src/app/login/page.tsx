"use server";
import { cookies } from "next/headers";
import db from "../db";
import { redirect } from "next/navigation";

export default async function Login() {
  async function login(formData: FormData) {
    "use server";
    const username = formData.get("username")?.toString().toLowerCase();
    const password = formData.get("password")?.toString();

    if (username !== null && password !== null) {
      console.log("SELECT username, password from Users WHERE username = '" + username! + "'");
      const users = await db.unsafe(
        "SELECT username, password from Users WHERE username = '" + username! + "'"
      );

      if (users.length === 0) {
        console.log("User not found");
        return;
      } else if (users[0].password !== password) {
        console.log("Incorrect password");
        return;
      } else {
        console.log("Login successful");
        const cookieStore = await cookies();
        cookieStore.set("session", username + "_bestrecipesiteever", {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000), // 1 week
          sameSite: "lax",
          path: "/",
        });
        redirect("/dashboard");
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center mb-50 w-72 h-100 bg-gray-400 rounded-lg">
        <form action={login} className="flex flex-col gap-4">
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
