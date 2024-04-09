const publicUrl = (function () {
  if (process.env.NEXT_PUBLIC_URL) {
    return process.env.NEXT_PUBLIC_URL;
  } else if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  } else {
    return "http://localhost:3000";
  }
})();

export function getAbsoluteUrl(path: string) {
  return `${publicUrl}${path}`;
}
