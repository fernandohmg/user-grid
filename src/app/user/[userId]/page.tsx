import ThumbImage from "@/app/component/ThumbImage";
import { getUser } from "@/app/utils/getUser";
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
    <div className="flex flex-col justify-center items-center">
      <article className="w-96 flex flex-col gap-2 justify-center items-center rounded-[20px] border p-6">
        <ThumbImage
          className="w-[100px] h-[100px] rounded-full border"
          src={user.image}
          alt="avatar"
          width={100}
          height={100}
        />
        <h2 className="text-2xl font-medium">{`${user?.firstName} ${user.lastName}`}</h2>
        <p className="font-medium text-gray-500">{user.company.department}</p>
        <address className="mt-3 gap-1 text-sm flex flex-col items-center text-center">
          <a className="underline" href={`mailto:${user.email}`}>
            {user.email}
          </a>
          <a className="underline" href={`tel:+${user.phone}`}>
            {user.phone}
          </a>
          {user.address.address}
          <br />
          {user.address.city} - {user.address.state}
        </address>
      </article>
    </div>
  );
}

export default UserPage;
