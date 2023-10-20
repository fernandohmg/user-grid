import Link from "next/link";
import ThumbImage from "./ThumbImage";

type Props = {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    company: {
      department: string;
    };
  };
};

function UserCard({ user }: Props) {
  return (
    <section className="h-[404px] w-full rounded-[20px] bg-white border overflow-clip shadow-md">
      <div className="h-[214px] bg-custom-gradient" />
      <div className="flex flex-col items-center -translate-y-20">
        <header className="flex flex-col items-center ">
          <div className="p-1 rounded-full bg-custom-gradient border-[6px] border-white">
            <ThumbImage
              className="w-24 h-24 rounded-full border-white border-4 bg-white"
              src={user.image}
              alt="avatar"
              height={100}
              width={100}
            />
          </div>
          <h2 className="mt-2.5 text-lg font-medium">{`${user.firstName} ${user.lastName}`}</h2>
          <p className="text-sm text-gray-400 font-normal tracking-wide">
            {user.company.department}
          </p>
        </header>
        <Link
          href={`/user/${user.id}`}
          className="mt-2 rounded border-2 border-black px-3.5 py-0.5"
        >
          Profile
        </Link>
      </div>
    </section>
  );
}

export default UserCard;
