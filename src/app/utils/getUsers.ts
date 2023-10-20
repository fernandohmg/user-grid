import React from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  company: {
    department: string;
  };
};

type UsersResponse = {
  users: Array<User>;
};

export const getUsers = React.cache(async () => {
  const res = await fetch("https://dummyjson.com/users");

  if (!res.ok) throw new Error(`Failed to fetch users - Error ${res.status}`);

  const usersResponse: UsersResponse = await res.json();

  return usersResponse.users;
});
