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
    // fake user
    const user: User = {
      id: "a",
      login: "user",
      permissions: ["dashboard.enter"],
    };

    // anonymous
    // const user: User = {
    //   id: null,
    //   login: null,
    //   permissions: [],
    // };

    return { user };
  }
);

// userStore.id
