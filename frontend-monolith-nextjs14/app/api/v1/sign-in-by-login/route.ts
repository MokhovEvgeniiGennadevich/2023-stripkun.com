import { randomUUID } from "crypto";
import { SignInByLoginUserDtoResponse } from "./signInByLogin.dto";

export async function POST() {
  const user: SignInByLoginUserDtoResponse = {
    id: randomUUID(),
    name: "John Doe",
  };

  return Response.json(user);
}
