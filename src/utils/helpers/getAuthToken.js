import { getCookie } from "cookies-next";

export default function getAuthTokenFromCookie(ctx) {
  const authToken = getCookie("authToken", ctx);

  return authToken || null;
}
