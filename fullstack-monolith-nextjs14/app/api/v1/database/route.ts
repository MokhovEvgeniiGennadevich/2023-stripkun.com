import { query } from "@/utils/postgresql/postgresql";

export async function GET() {
  try {
    const result = await query(
      "SELECT datname FROM pg_database;",
      []
    );

    return Response.json({
      result: "success",
      message: "database up",
    });
  } catch (error) {
    return Response.json(
      {
        result: "error",
        message: "database down",
      },
      { status: 500 }
    );
  }
}
