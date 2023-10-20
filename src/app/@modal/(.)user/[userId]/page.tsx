import Modal from "@/components/Modal";
import UserDetail from "@/components/UserDetail";
import { getUser } from "@/utils/getUser";
import { notFound } from "next/navigation";

type Props = {
  params: { userId: number };
};

async function fetchUser(userId: number) {
  const user = await getUser(userId);
  if (!user) notFound();
  return user;
}

async function UserPage({ params }: Props) {
  const user = await fetchUser(params.userId);
  return (
    <Modal>
      <UserDetail user={user} />
    </Modal>
  );
}

export default UserPage;
