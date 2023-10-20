import UserCard from "../components/UserCard";
import { getUsers } from "../utils/getUsers";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="p-2 grid grid-cols-fluid auto-rows-min gap-4 max-w-7xl mx-auto">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
}
