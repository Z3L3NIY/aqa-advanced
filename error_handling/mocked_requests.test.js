const axios = require("axios");
const getDataWithHeadersAndParams = require("./headers_and_params.js");
const fetchWrongUlrData = require("./url_error.js");

jest.mock("axios");

test("fetchWrongUlrData handles wrong url errors", async () => {
	const mockError = new Error("Status Code 404 or something like that...");

	axios.get.mockRejectedValue(mockError);

	expect.assertions(1);
	try {
		await fetchWrongUlrData();
		throw new Error("Expected error not thrown");
	} catch (e) {
		expect(e.message).toContain("Status Code 404 or something like that...");
	}
});

test("getDataWithHeadersAndParams includes custom headers and parameters", async () => {
	const mockResponse = {
		data: {
			status: 200,
			statusText: "Ok",
		},
	};

	axios.get.mockResolvedValue(mockResponse);

	await getDataWithHeadersAndParams();

	expect(axios.get).toHaveBeenCalledWith(
		"https://jsonplaceholder.typicode.com/posts",
		{
			headers: {
				"Custom-Header": "SomeValue",
			},
			params: {
				userId: 1,
			},
		}
	);
});
