// Fixtures for solid-router-no-element-prop rule
// Lines marked ❌ SHOULD trigger a diagnostic
// Lines marked ✅ should NOT trigger a diagnostic

import { Router, Route } from "@solidjs/router";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

// ❌ Using `element` prop on Route
const BadApp = () => {
	return (
		<Router>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Router>
	);
};

// ✅ Using `component` prop — correct
const GoodApp = () => {
	return (
		<Router>
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
		</Router>
	);
};

// ✅ `element` prop on a different component is fine
const OtherComponent = () => {
	return <CustomRoute element={<Home />} />;
};
