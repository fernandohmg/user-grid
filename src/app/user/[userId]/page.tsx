import UserDetail from "@/components/UserDetail";
import { getUser } from "@/utils/getUser";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { userId: number };
};

async function fetchUser(userId: number) {
  const user = await getUser(userId);
  if (!user) notFound();
  return user;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await fetchUser(params.userId);
  return { title: `${user.firstName} ${user.lastName}` };
}

async function UserPage({ params }: Props) {
  const user = await fetchUser(params.userId);
  return <UserDetail user={user} />;
}

export default UserPage;
