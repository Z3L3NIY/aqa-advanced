const axios = require("axios");

async function getDataWithHeadersAndParams() {
	try {
		const response = await axios.get(
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
		return response.data;
	} catch (error) {
		console.error("There has been a problem with your request!", error);
	}
}

module.exports = getDataWithHeadersAndParams;
