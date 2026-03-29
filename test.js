import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

const lint = async (file) => {
	try {
		const { stdout, stderr } = await run(
			"npx",
			["@biomejs/biome", "lint", "--max-diagnostics=none", file],
			{ encoding: "utf8" },
		);
		return stdout + stderr;
	} catch (error) {
		// biome exits non-zero when diagnostics are found
		return (error.stdout || "") + (error.stderr || "");
	}
};

const countPluginHits = (output) => (output.match(/plugin/g) || []).length;

describe("solid-router-no-link-component", () => {
	it("flags Link import and <Link> usage from @solidjs/router", async () => {
		const output = await lint("fixtures/no-link-component.fixture.tsx");
		assert.equal(countPluginHits(output), 2);
	});

	it("flags the import on line 6", async () => {
		const output = await lint("fixtures/no-link-component.fixture.tsx");
		assert.ok(output.includes(":6:"));
	});

	it("flags the <Link> opening element on line 10", async () => {
		const output = await lint("fixtures/no-link-component.fixture.tsx");
		assert.ok(output.includes(":10:"));
	});
});

describe("solid-router-no-to-prop", () => {
	it("flags `to` prop on <A> components", async () => {
		const output = await lint("fixtures/no-to-prop.fixture.tsx");
		assert.equal(countPluginHits(output), 2);
	});
});

describe("solid-router-no-initial-entries", () => {
	it("flags initialEntries prop on <MemoryRouter>", async () => {
		const output = await lint("fixtures/no-initial-entries.fixture.tsx");
		assert.equal(countPluginHits(output), 2);
	});
});

describe("solid-router-no-routes-wrapper", () => {
	it("flags Routes import and <Routes> usage", async () => {
		const output = await lint("fixtures/no-routes-wrapper.fixture.tsx");
		assert.equal(countPluginHits(output), 2);
	});
});

describe("solid-router-no-element-prop", () => {
	it("flags `element` prop on <Route> components", async () => {
		const output = await lint("fixtures/no-element-prop.fixture.tsx");
		assert.equal(countPluginHits(output), 2);
	});
});
