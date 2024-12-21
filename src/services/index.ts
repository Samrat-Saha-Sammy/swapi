import axios, { AxiosResponse } from "axios";
import { API_PEOPLE, API_PLANET } from "./endpoints";
import { ICharacterDetails, ICharacterList, IPlanetDetails } from "./types";

export const getCharacters = async (
  limit: Number = 10
): Promise<AxiosResponse<ICharacterList>> => {
  try {
    return await axios.get<ICharacterList>(`${API_PEOPLE}?limit=${limit}`);
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export const getCharacterDetails = async (
  cid: string
): Promise<AxiosResponse<ICharacterDetails>> => {
  try {
    return await axios.get<ICharacterDetails>(`${API_PEOPLE}/${cid}`);
  } catch (error) {
    console.error("Error fetching characters details:", error);
    throw error;
  }
};

export const getPlanetDetails = async (
  planetId: string
): Promise<AxiosResponse<IPlanetDetails>> => {
  try {
    return await axios.get<IPlanetDetails>(`${API_PLANET}/${planetId}`);
  } catch (error) {
    console.error("Error fetching planet details:", error);
    throw error;
  }
};
