export default function getAuthTokenFromCookie(ctx) {
  const cookie = ctx ? ctx.req.headers.cookie : document.cookie;

  const [name, value] = cookie ? cookie.split("=") : [null, null];
  const authToken = name === "authToken" ? value : null;

  return authToken;
}
