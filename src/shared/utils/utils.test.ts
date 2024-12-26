import { extractLastParamFromURL, extractLastParamsFromURLArray } from ".";

describe("extractLastParamFromURL", () => {
	it("should return the last parameter for a valid URL", () => {
		expect(extractLastParamFromURL("https://example.com/users/123")).toBe(
			"123"
		);
		expect(
			extractLastParamFromURL("https://example.com/path/to/resource")
		).toBe("resource");
		expect(extractLastParamFromURL("/api/v1/item/42")).toBe("42");
	});

	it("should handle URLs with trailing slashes", () => {
		expect(extractLastParamFromURL("https://example.com/users/123/")).toBe(
			"123"
		);
		expect(extractLastParamFromURL("/path/to/resource/")).toBe("resource");
	});

	it("should return null for URLs without a last parameter", () => {
		expect(extractLastParamFromURL("/")).toBe(null);
	});

	it("should return null for an empty string", () => {
		expect(extractLastParamFromURL("")).toBe(null);
	});
});

describe("extractLastParamsFromURLArray", () => {
	it("should return an array of last parameters for valid URLs", () => {
		const urls = [
			"https://example.com/users/123",
			"/api/v1/item/42",
			"https://example.com/path/to/resource",
		];
		const result = extractLastParamsFromURLArray(urls);
		expect(result).toEqual(["123", "42", "resource"]);
	});

	it("should skip URLs without a last parameter", () => {
		const urls = ["/api/v1/item/", "/", "https://example.com/users/123"];
		const result = extractLastParamsFromURLArray(urls);
		expect(result).toEqual(["item", "123"]);
	});

	it("should handle an empty array", () => {
		expect(extractLastParamsFromURLArray([])).toEqual([]);
	});

	it("should handle mixed valid and invalid URLs", () => {
		const urls = ["https://example.com/users/123", "", "/api/v1/item/42/"];
		const result = extractLastParamsFromURLArray(urls);
		expect(result).toEqual(["123", "42"]);
	});
});
