export async function middleware(request) {
  const sessionCookie = request.cookies.get("session")?.value;

  if (!sessionCookie) {
    // DO SOMETHING, I'm not sure...
  }
}

export const config = {
  matcher: ["/((?!api/login|_next/static|_next/image|.*\\.png$).*)"],
};
