const axios = require("axios");

describe("JSON Placeholder tests bundle", () => {
	test("Getting all posts", async () => {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		expect(response.status).toEqual(200);
		expect(response.data).toBeInstanceOf(Array);
	});

	test("Getting a post by id", async (id = 1) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		expect(response.status).toEqual(200);
		expect(response.data).toHaveProperty("id", id);
	});

	test("Create a new post", async (userId = 665) => {
		const newPost = { title: "foo", body: "bar", userId: `${userId}` };
		const response = await axios.post(
			"https://jsonplaceholder.typicode.com/posts",
			newPost,
			{
				headers: { "Content-Type": "application/json; charset=UTF-8" },
			}
		);
		expect(response.status).toBe(201);
		expect(response.data).toMatchObject(newPost);
	});

	test("Getting posts by a specific user", async (userId = 1) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
		);
		expect(response.status).toBe(200);
		expect(response.data).toBeInstanceOf(Array);
		expect(response.data.length).toBeGreaterThan(0);
		response.data.forEach((post) => {
			expect(post).toHaveProperty("userId", userId);
		});
	});

	test("Getting comments by a specific post", async (postId = 1) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
		);
		expect(response.status).toBe(200);
		expect(response.data).toBeInstanceOf(Array);
		expect(response.data.length).toBeGreaterThan(0);
		response.data.forEach((comment) => {
			expect(comment).toHaveProperty("postId", postId);
		});
	});
});
