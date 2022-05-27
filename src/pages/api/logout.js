import cookie from "cookie";

export default async function handler(req, res) {
  // setCookie
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("authToken", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    })
  );
  res.status(200).json({ success: true });
}
