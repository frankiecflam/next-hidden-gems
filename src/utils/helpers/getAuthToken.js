export default function getAuthTokenFromCookie(ctx) {
  const cookie = ctx.req.headers.cookie;

  const [name, value] = cookie ? cookie.split("=") : [null, null];
  const authToken = name === "authToken" ? value : null;

  return authToken;
}
