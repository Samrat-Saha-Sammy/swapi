export const extractLastParamFromURL = (url: string): string | null => {
  const regex = /\/([^\/]+)\/?$/;
  const match = url.match(regex);

  return match ? match[1] : null;
};

export const extractLastParamsFromURLArray = (urls: string[]): string[] => {
  return urls.reduce<string[]>((filtered, url) => {
    const param = extractLastParamFromURL(url);
    if (param) {
      filtered.push(param);
    }
    return filtered;
  }, []);
};
