import api from "@server/api";
import auth, { signIn, signOut } from "@server/auth";
import Link from "next/link";

const SignIn = async () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}>
      <button
        type="submit"
        className="rounded bg-green-400 px-4 py-2 font-bold text-white">
        Sign In
      </button>
    </form>
  );
};

const SignOut = async () => {
  const user = await api.get.user();

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
        <button
          type="submit"
          className="rounded bg-red-400 px-4 py-2 font-bold text-white">
          Sign Out
        </button>
        <Link href="/hello">
          <p className="underline">{user.email}</p>
        </Link>
      </form>
    </div>
  );
};

const Home = async () => {
  const session = await auth();

  return <div className="p-4">{session ? <SignOut /> : <SignIn />}</div>;
};

export default Home;
