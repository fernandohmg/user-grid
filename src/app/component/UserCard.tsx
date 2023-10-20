/* eslint-disable @next/next/no-img-element */

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
    <section className="h-[404px] w-full rounded-[20px] bg-white border overflow-clip">
      <div className="h-[214px] bg-custom-gradient" />
      <div className="flex flex-col items-center -translate-y-20">
        <header className="flex flex-col items-center ">
          <div className="p-1 rounded-full bg-custom-gradient border-8 border-white">
            <img
              className="w-24 h-24 rounded-full border-white border-4 bg-white"
              src={user.image}
              alt=""
            />
          </div>
          <h2 className="mt-2.5 text-lg font-medium">{`${user.firstName} ${user.lastName}`}</h2>
          <p className="text-sm text-gray-400 font-normal tracking-wide">
            {user.company.department}
          </p>
        </header>
        <a
          href="#"
          className="mt-2 rounded border-2 border-black px-3.5 py-0.5"
        >
          View Profile
        </a>
      </div>
    </section>
  );
}

export default UserCard;
