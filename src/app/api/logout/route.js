// import { cookies } from "next/headers";

// export async function POST() {
//   cookies().set("session", "", { expires: new Date(0) });
//   return Response.json({ status: "success" });
// }


import { cookies } from "next/headers";

export async function POST() {
  // Hapus cookie sesi untuk login biasa
  cookies().set("session", "", { expires: new Date(0) });

  return new Response(JSON.stringify({ status: "success" }), { status: 200 });
}

