export default function getAuthTokenFromCookie(ctx) {
  const { authToken } = ctx.req.cookies;

  return authToken || null;
}
