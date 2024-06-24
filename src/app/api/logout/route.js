import { cookies } from "next/headers";

export async function POST() {
  cookies().set("session", "", { expires: new Date(0) });
  return Response.json({ status: "success" });
}
