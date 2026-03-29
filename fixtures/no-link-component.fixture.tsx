// Fixtures for solid-router-no-link-component rule
// Lines marked ❌ SHOULD trigger a diagnostic
// Lines marked ✅ should NOT trigger a diagnostic

// ❌ Importing Link from @solidjs/router
import { Link } from "@solidjs/router";

// ❌ Using <Link> in JSX
const BadNav = () => {
	return <Link to="/about">About</Link>;
};

// ✅ Using <A> — correct
import { A } from "@solidjs/router";

const GoodNav = () => {
	return <A href="/about">About</A>;
};

// ✅ Link from a different package is fine
import { Link as ChakraLink } from "@chakra-ui/core";
