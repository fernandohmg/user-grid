import React from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  company: {
    department: string;
  };
  address: {
    address: string;
    city: string;
    state: string;
  };
};

export const getUser = React.cache(async (id: number) => {
  if (!id) return null;

  const res = await fetch(`https://dummyjson.com/users/${id}`);

  if (res.status === 404) return null;

  if (!res.ok) throw new Error(`Failed to fetch user - Error ${res.status}`);

  await new Promise((resolve) => setTimeout(resolve, 500));

  return (await res.json()) as User;
});
