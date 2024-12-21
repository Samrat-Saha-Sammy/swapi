export const extractPlanetIdFromURL = (planetUrl: string) => {
  return planetUrl.split("/").pop() || null;
};
