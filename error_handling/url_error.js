const axios = require("axios");

async function fetchWrongUlrData() {
	try {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/obviously_wrong_url"
		);
		return response.data;
	} catch (error) {
		console.error("There has been a problem with your request!", error);
		throw error;
	}
}

module.exports = fetchWrongUlrData;
