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

// ✅ Link icon from lucide-solid — not a router component
import { Link as LucideLink } from "lucide-solid";

const IconUsage = () => {
	return <LucideLink class="inline w-5 h-5 mr-2 text-purple-600" />;
};

// ✅ <Link> without router props (e.g., icon component) should not be flagged
const IconLink = () => {
	return <Link class="inline w-5 h-5" />;
};

// ✅ <Link> with non-router children and no router props
const AnotherIcon = () => {
	return <Link class="icon">chain</Link>;
};
