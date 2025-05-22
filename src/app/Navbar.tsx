import Link from "next/link";
import { cookies } from "next/headers";

export default async function NavBar() {
  const cookieStore = await cookies();
  const session = cookieStore.has("session");
  return session ? (
    <nav className="flex justify-between py-4 bg-gray-400">
      <Link href="/" className="ml-4 hover:text-white">
        Home
      </Link>
      <div className="mr-4">
        <Link href="/logout" className="hover:text-white mr-4">
          Logout
        </Link>
      </div>
    </nav>
  ) : (
    <nav className="flex justify-between py-4 bg-gray-400">
      <Link href="/" className="ml-4 hover:text-white">
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
