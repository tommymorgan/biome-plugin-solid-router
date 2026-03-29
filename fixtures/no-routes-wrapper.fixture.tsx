// Fixtures for solid-router-no-routes-wrapper rule
// Lines marked ❌ SHOULD trigger a diagnostic
// Lines marked ✅ should NOT trigger a diagnostic

// ❌ Importing Routes from @solidjs/router
import { Router, Routes, Route } from "@solidjs/router";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

// ❌ Using <Routes> wrapper in JSX
const BadApp = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" component={Home} />
				<Route path="/about" component={About} />
			</Routes>
		</Router>
	);
};

// ✅ Route directly inside Router — correct
const GoodApp = () => {
	return (
		<Router>
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
		</Router>
	);
};
