import { cookies } from "next/headers";

export async function POST(request: Request) {
  // Cookies check
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  const refresh_token = cookieStore.get("refresh_token");

  // Cookies: Not Set, Bad Request
  if (!access_token || !refresh_token) {
    return Response.json(
      { result: "error", message: "bad request" },
      { status: 400 }
    );
  }

  // OK
  return Response.json(
    {
      result: "success",
      message: "Signed out successfully",
    },
    { status: 200 }
  );
}
