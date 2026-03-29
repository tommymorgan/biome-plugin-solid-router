// Fixtures for solid-router-no-initial-entries rule
// Lines marked ❌ SHOULD trigger a diagnostic
// Lines marked ✅ should NOT trigger a diagnostic

import { MemoryRouter, Route } from "@solidjs/router";

const Home = () => <div>Home</div>;

// ❌ Using initialEntries on MemoryRouter
const BadRouter = () => {
	return (
		<MemoryRouter initialEntries={["/home"]}>
			<Route path="/home" component={Home} />
		</MemoryRouter>
	);
};

// ❌ Self-closing with initialEntries
const BadSelfClosing = () => {
	return <MemoryRouter initialEntries={["/"]} />;
};

// ✅ MemoryRouter without initialEntries — correct
const GoodRouter = () => {
	return (
		<MemoryRouter>
			<Route path="/home" component={Home} />
		</MemoryRouter>
	);
};

// ✅ initialEntries on a different component is fine
const OtherComponent = () => {
	return <CustomRouter initialEntries={["/"]} />;
};
