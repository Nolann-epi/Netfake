import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1 className="text-red-500">Netfake</h1>
      <h2 className="text-lg text-green-500">Logged in as : {user?.email}</h2>
      <button className="h-10 w-20 bg-red-500" onClick={() => signOut()}>
        Sign out
      </button>
    </>
  );
}
