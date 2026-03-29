// Fixtures for solid-router-no-to-prop rule
// Lines marked ❌ SHOULD trigger a diagnostic
// Lines marked ✅ should NOT trigger a diagnostic

import { A } from "@solidjs/router";

// ❌ Using `to` prop on <A>
const BadLink = () => {
	return <A to="/about">About</A>;
};

// ❌ Using `to` prop on self-closing <A>
const BadSelfClosing = () => {
	return <A to="/home" />;
};

// ✅ Using `href` — correct
const GoodLink = () => {
	return <A href="/about">About</A>;
};

// ✅ `to` prop on a different component is fine
const OtherComponent = () => {
	return <Navigate to="/redirect" />;
};
