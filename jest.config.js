module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	testMatch: ["**/tests/unit/**/*.ts?(x)"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	verbose: true,
};
