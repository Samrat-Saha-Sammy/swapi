/**
 * Extracts the last parameter from a URL string.
 * The parameter is defined as the part of the URL after the last `/`, and it is returned as a string.
 * If the URL does not have a valid last parameter, null is returned.
 *
 * @param url - The URL string from which the last parameter will be extracted.
 * @returns The last parameter as a string, or null if no parameter exists.
 */
export const extractLastParamFromURL = (url: string): string | null => {
	const regex = /\/([^\/]+)\/?$/; // Regex to match the last segment of the URL
	const match = url.match(regex);

	// If a match is found, return the captured parameter; otherwise, return null.
	return match ? match[1] : null;
};

/**
 * Extracts the last parameters from an array of URL strings.
 * It calls the `extractLastParamFromURL` function on each URL in the array
 * and returns an array containing the last parameters for all valid URLs.
 *
 * @param urls - An array of URL strings from which the last parameters will be extracted.
 * @returns An array of strings containing the last parameters from the URLs.
 */
export const extractLastParamsFromURLArray = (urls: string[]): string[] => {
	// Use reduce to accumulate the last parameters of all valid URLs
	return urls.reduce<string[]>((filtered, url) => {
		const param = extractLastParamFromURL(url);
		if (param) {
			filtered.push(param); // Add the parameter if it's valid
		}
		return filtered;
	}, []);
};
