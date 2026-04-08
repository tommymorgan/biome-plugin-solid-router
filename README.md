# biome-plugin-solid-router

Biome [GritQL](https://biomejs.dev/linter/plugins/) lint rules for [@solidjs/router](https://github.com/solidjs/solid-router). Catches common API mistakes from React Router muscle memory at lint time.

## Rules

| Rule | Description |
|------|-------------|
| `solid-router-no-link-component` | Flags `Link` import from `@solidjs/router` and `<Link>` usage with router props (`to`, `href`). Use `<A>` instead. |
| `solid-router-no-to-prop` | Flags `to=` prop on `<A>` components. Use `href=` instead. |
| `solid-router-no-initial-entries` | Flags `initialEntries` prop on `<MemoryRouter>`. Use `createMemoryHistory()` instead. |
| `solid-router-no-routes-wrapper` | Flags `Routes` import or usage from `@solidjs/router`. Place `<Route>` directly inside `<Router>`. |
| `solid-router-no-element-prop` | Flags `element=` prop on `<Route>`. Use `component=` instead. |

## Install

```bash
npm install -D biome-plugin-solid-router
```

## Setup

Add the plugin to your `biome.json` or `biome.jsonc`:

```jsonc
{
  "plugins": ["./node_modules/biome-plugin-solid-router"]
}
```

Or pick individual rules:

```jsonc
{
  "plugins": [
    "./node_modules/biome-plugin-solid-router/rules/solid-router-no-link-component.grit",
    "./node_modules/biome-plugin-solid-router/rules/solid-router-no-to-prop.grit",
    "./node_modules/biome-plugin-solid-router/rules/solid-router-no-initial-entries.grit",
    "./node_modules/biome-plugin-solid-router/rules/solid-router-no-routes-wrapper.grit",
    "./node_modules/biome-plugin-solid-router/rules/solid-router-no-element-prop.grit"
  ]
}
```

## Requirements

- [Biome](https://biomejs.dev/) >= 2.0.0 (GritQL plugin support)

## How it works

Each rule is a `.grit` file using Biome's GritQL engine (`engine biome(1.0)`) to match AST patterns. The rules catch common mistakes developers make when migrating from React Router to @solidjs/router:

- **Import detection**: Flags imports of non-existent components (`Link`, `Routes`) from `@solidjs/router`.
- **Prop detection**: Flags wrong prop names (`to` instead of `href`, `element` instead of `component`, `initialEntries` which doesn't exist).
- **Scoped matching**: Import rules only match `@solidjs/router` imports — `Link` from other packages is fine. JSX `<Link>` is only flagged when router-specific props (`to`, `href`) are present, avoiding false positives from icon libraries like `lucide-solid`.

## What these rules don't cover

Some @solidjs/router mistakes require type information that GritQL doesn't have access to:

- Passing JSX instead of a component reference to `component=` (needs to know the value type)
- Route params type mismatches (needs type inference)
- Missing required route config options (needs full API schema)

For full type-aware linting, use these rules alongside [eslint-plugin-solid](https://github.com/solidjs-community/eslint-plugin-solid).

## License

MIT
