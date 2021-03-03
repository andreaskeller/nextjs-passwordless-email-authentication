import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  pages: {
    signIn: "/signin",
    verifyRequest: "/verify-request",
  },
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.MONGODB_URI,
};

export default (req, res) => NextAuth(req, res, options);
