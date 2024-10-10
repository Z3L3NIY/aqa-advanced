const axios = require("axios");
const getDataWithHeadersAndParams = require("./headers_and_params.js");

test("getDataWithHeadersAndParams includes custom headers and parameters", async () => {
	const spy = jest.spyOn(axios, "get");

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

	spy.mockRestore();
});
