import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function NavBar() {
  const cookieStore = await cookies();
  const session = cookieStore.has("session");
  return session ? (
    <nav className="flex justify-between py-4 bg-gray-400">
      <div>
        <Link href="/" className="ml-6 hover:text-white">
          Home
        </Link>
        <Link href="/dashboard" className="ml-6 hover:text-white">
          Dashboard
        </Link>
      </div>
      <div className="mr-4">
        <button
          className="hover:text-white mr-4 hover:cursor-pointer"
          onClick={async () => {
            "use server";
            const cookieStore = await cookies();
            cookieStore.delete("session");
            redirect("/");
          }}>
          Logout
        </button>
      </div>
    </nav>
  ) : (
    <nav className="flex justify-between py-4 bg-gray-400">
      <Link href="/" className="ml-6 hover:text-white">
        Home
      </Link>
      <div className="mr-4">
        <Link href="/login" className="hover:text-white mr-4">
          Login
        </Link>
        <Link href="/register" className="hover:text-white">
          Register
        </Link>
      </div>
    </nav>
  );
}
