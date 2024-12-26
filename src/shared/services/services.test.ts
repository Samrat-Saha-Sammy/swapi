import axios from "axios";
import {
	getCharacters,
	getCharacterDetails,
	getPlanetDetails,
	getFilmDetails,
	getStarshipDetails,
} from ".";
import { API_PEOPLE, API_PLANET, API_FILM, API_STARSHIP } from "./endpoints";

jest.mock("axios");

describe("API Utility Functions", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("getCharacters", () => {
		it("should fetch the list of characters successfully", async () => {
			const mockResponse = { data: { results: [{ name: "Luke Skywalker" }] } };
			(axios.get as jest.Mock).mockResolvedValue(mockResponse);

			const response = await getCharacters({ search: "Luke" });
			expect(response).toEqual(mockResponse);
			expect(axios.get).toHaveBeenCalledWith(`${API_PEOPLE}`, {
				params: { search: "Luke" },
			});
		});

		it("should throw an error if fetching characters fails", async () => {
			const mockError = new Error("Network Error");
			(axios.get as jest.Mock).mockRejectedValue(mockError);

			await expect(getCharacters()).rejects.toThrow("Network Error");
			expect(axios.get).toHaveBeenCalledWith(`${API_PEOPLE}`, { params: {} });
		});
	});

	describe("getCharacterDetails", () => {
		it("should fetch character details successfully", async () => {
			const mockResponse = { data: { name: "Luke Skywalker" } };
			(axios.get as jest.Mock).mockResolvedValue(mockResponse);

			const response = await getCharacterDetails("1");
			expect(response).toEqual(mockResponse);
			expect(axios.get).toHaveBeenCalledWith(`${API_PEOPLE}/1`);
		});

		it("should throw an error if fetching character details fails", async () => {
			const mockError = new Error("Network Error");
			(axios.get as jest.Mock).mockRejectedValue(mockError);

			await expect(getCharacterDetails("1")).rejects.toThrow("Network Error");
			expect(axios.get).toHaveBeenCalledWith(`${API_PEOPLE}/1`);
		});
	});

	describe("getPlanetDetails", () => {
		it("should fetch planet details successfully", async () => {
			const mockResponse = { data: { name: "Tatooine" } };
			(axios.get as jest.Mock).mockResolvedValue(mockResponse);

			const response = await getPlanetDetails("1");
			expect(response).toEqual(mockResponse);
			expect(axios.get).toHaveBeenCalledWith(`${API_PLANET}/1`);
		});

		it("should throw an error if fetching planet details fails", async () => {
			const mockError = new Error("Network Error");
			(axios.get as jest.Mock).mockRejectedValue(mockError);

			await expect(getPlanetDetails("1")).rejects.toThrow("Network Error");
			expect(axios.get).toHaveBeenCalledWith(`${API_PLANET}/1`);
		});
	});

	describe("getFilmDetails", () => {
		it("should fetch film details successfully", async () => {
			const mockResponse = { data: { title: "A New Hope" } };
			(axios.get as jest.Mock).mockResolvedValue(mockResponse);

			const response = await getFilmDetails("1");
			expect(response).toEqual(mockResponse);
			expect(axios.get).toHaveBeenCalledWith(`${API_FILM}/1`);
		});

		it("should throw an error if fetching film details fails", async () => {
			const mockError = new Error("Network Error");
			(axios.get as jest.Mock).mockRejectedValue(mockError);

			await expect(getFilmDetails("1")).rejects.toThrow("Network Error");
			expect(axios.get).toHaveBeenCalledWith(`${API_FILM}/1`);
		});
	});

	describe("getStarshipDetails", () => {
		it("should fetch starship details successfully", async () => {
			const mockResponse = { data: { name: "Millennium Falcon" } };
			(axios.get as jest.Mock).mockResolvedValue(mockResponse);

			const response = await getStarshipDetails("1");
			expect(response).toEqual(mockResponse);
			expect(axios.get).toHaveBeenCalledWith(`${API_STARSHIP}/1`);
		});

		it("should throw an error if fetching starship details fails", async () => {
			const mockError = new Error("Network Error");
			(axios.get as jest.Mock).mockRejectedValue(mockError);

			await expect(getStarshipDetails("1")).rejects.toThrow("Network Error");
			expect(axios.get).toHaveBeenCalledWith(`${API_STARSHIP}/1`);
		});
	});
});
