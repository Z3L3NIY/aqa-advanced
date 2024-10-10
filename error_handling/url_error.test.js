const fetchWrongUlrData = require("./url_error.js");

test("fetchWrongUlrData handles wrong url errors", async () => {
	expect.assertions(1);
	try {
		await fetchWrongUlrData();
		throw new Error("Expected error not thrown");
	} catch (e) {
		expect(e.message).toContain("Request failed with status code 404");
	}
});
