// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import pg from "pg";

// const { Pool } = pg;
// const pool = new Pool({
//   connectionString: process.env.CONNECTION_STRING,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     async session({ session, token }) {
//       const email = session.user.email;

//       // Check if user exists in the database
//       const query = `
//         SELECT * FROM public."user" 
//         WHERE email = $1;
//       `;
//       const values = [email];
//       const { rows } = await pool.query(query, values);
//       const existingUser = rows[0];

//       if (!existingUser) {
//         //Insert new user into the database
//         const insertQuery = `
//           INSERT INTO public."user" (nama, email, role)
//           VALUES ($1, $2, $3)
//           RETURNING id_user
//         `;
//         const insertValues = [session.user.name, email, "user"];
//         const { rows: insertRows } = await pool.query(insertQuery, insertValues);
//         const newUser = insertRows[0];

//         //Add user id to the session object
//         session.user.id = newUser.id_user;
//       } else {
//         //Add user id to the session object
//         session.user.id = existingUser.id_user;
//       }

//       session.accessToken = token.accessToken;
//       return session;
//     },
//     async jwt({ token, account, user }) {
//       if (account) {
//         token.accessToken = account.access_token;
//       }
//       return token;
//     },
//     async redirect({ url, baseUrl }) {
//       return baseUrl;
//     },
//   },
// });

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
    sslmode: "require",
  },
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Simpan user ke database jika belum ada, termasuk gambar dan nama
      const query = `
        INSERT INTO public."user" (nama, email, picture_url, role)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (email) DO UPDATE SET picture_url = EXCLUDED.picture_url
      `;
      const values = [user.name, user.email, user.image, "user"];
      await pool.query(query, values);
      return true;
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
        token.picture = user.image;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      session.user.picture = token.picture;
      session.user.name = token.name;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Menambahkan secret ke konfigurasi NextAuth
});

export { handler as GET, handler as POST };
