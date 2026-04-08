# Changelog

## 0.1.1 — 2026-03-29

### Fixed

- `solid-router-no-link-component` no longer flags `<Link>` from non-router packages (e.g., `lucide-solid`). Only flags when router-specific props (`to`, `href`) are present or when imported from `@solidjs/router`.

## 0.1.0 — 2026-03-29

### Added

- Initial release with five GritQL lint rules for @solidjs/router:
  - `solid-router-no-link-component` — use `<A>` instead of `<Link>`
  - `solid-router-no-to-prop` — use `href=` instead of `to=` on `<A>`
  - `solid-router-no-initial-entries` — use `createMemoryHistory()` instead of `initialEntries` prop
  - `solid-router-no-routes-wrapper` — place `<Route>` directly inside `<Router>`, no `<Routes>` wrapper
  - `solid-router-no-element-prop` — use `component=` instead of `element=` on `<Route>`
