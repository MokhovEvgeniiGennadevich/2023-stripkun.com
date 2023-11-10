import { H3Event } from "h3";

type User = {
  id: string | null;
  login: string | null;
  permissions: string[];
};

export const useUserStore = defineStore(
  // $id
  "user",
  () => {
    // if (process.server) {
    //   // const {
    //   //   data: quote,
    //   //   pending,
    //   //   error,
    //   // } = await useFetch(
    //   //   () => `https://dummyjson.com/quotes/${props.id}`
    //   // );

    //   const id = "gh";
    //   const login = "user";
    // } else {
    //   const id = null;
    //   const login = null;
    // }

    // fake user
    // const user: User = {
    //   id: "fsdfdfsdfs",
    //   login: "user",
    //   permissions: ["dashboard.enter"],
    // };

    // anonymous
    const user: User = {
      id: null,
      login: null,
      permissions: [],
    };

    return { user };
  }
);

// userStore.id
