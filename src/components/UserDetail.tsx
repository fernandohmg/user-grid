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
    email: string;
    phone: string;
    address: {
      address: string;
      city: string;
      state: string;
    };
  };
};

function UserDetail({ user }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <article className="bg-white w-96 flex flex-col gap-2 justify-center items-center rounded-[20px] border p-6">
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

export default UserDetail;
