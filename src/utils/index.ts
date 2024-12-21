export const extractLastParamFromURL = (url: string): string | null => {
  const regex = /\/([^\/]+)\/?$/;
  const match = url.match(regex);

  return match ? match[1] : null;
};
