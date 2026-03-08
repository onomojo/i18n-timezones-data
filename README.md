# i18n-timezones-data

> Localized timezone name translations in 36 locales — CLDR-sourced, framework-agnostic JSON.

This repository contains the canonical translation data for timezone display names, covering **152 ActiveSupport timezones** across **36 locales**. The data is sourced from the [Unicode CLDR](https://cldr.unicode.org/) and stored as flat, human-readable JSON — easy to consume from any language or framework.

## Who is this for?

- **Library authors** building timezone tools in any language (Python, PHP, Go, Rust, etc.)
- **Ruby developers** using the [i18n-timezones](https://github.com/onomojo/i18n-timezones) gem
- **JavaScript developers** — see the ready-to-use NPM package: [i18n-timezones](https://github.com/onomojo/i18n-timezones-js)
- **Go developers** — import as a Go module with embedded data via [i18n-timezones-go](https://github.com/onomojo/i18n-timezones-go)
- **Rust developers** — available as a crate: [i18n-timezones](https://crates.io/crates/i18n-timezones) ([repo](https://github.com/onomojo/i18n-timezones-rs))
- **Anyone** who needs accurate, human-readable timezone names beyond what `Intl` or ICU provides out of the box

## Data Format

Each locale is a single JSON file with flat key-value pairs — no nesting, no complex structure. Keys are ActiveSupport timezone names:

```json
// data/de.json
{
  "International Date Line West": "Internationale Datumsgrenze (Westen)",
  "American Samoa": "Amerikanisch-Samoa",
  "Tokyo": "Tokio",
  "Eastern Time (US & Canada)": "Eastern Time (USA & Kanada)"
}
```

## Coverage

- **152 timezones** per locale (the full ActiveSupport timezone set)
- **36 locales**: ar, bn, ca, cs, da, de, el, en, es, eu, fi, fr, he, hi, hr, hu, id, it, ja, ko, ms, nl, no, pl, pt, pt-BR, ro, ru, sq, sv, th, tr, uk, vi, zh-CN, zh-TW

## Repository Structure

```
data/
  en.json             # English (reference locale)
  de.json             # German
  ja.json             # Japanese
  ...                 # 36 locale files total
scripts/
  validate.js         # Validate consistency across all locale files
data.go               # Go embed directive
go.mod                # Go module definition
```

## Validation

Every locale file is validated to ensure:
- All 152 timezone keys are present (matching `en.json`)
- No extra or missing keys
- No empty values

```bash
npm run validate
# ✓ All 36 locale files validated successfully (152 keys each)
```

## Usage

### Go

```go
import data "github.com/onomojo/i18n-timezones-data"

// data.FS is an embed.FS containing data/*.json
```

### Ruby

Available as a gem: `gem install i18n-timezones-data`

### Rust

Available as a crate on [crates.io](https://crates.io/crates/i18n-timezones):

```toml
# Cargo.toml
[dependencies]
i18n-timezones = "*"
```

### Node.js

Available as an npm package or via the higher-level [i18n-timezones](https://github.com/onomojo/i18n-timezones-js) package.

## Data Source

All translations come from the [Unicode CLDR](https://cldr.unicode.org/) (Common Locale Data Repository) — the industry-standard source used by every major platform including iOS, Android, Chrome, and Java.

## Related

- **[i18n-timezones (NPM)](https://github.com/onomojo/i18n-timezones-js)** — Ready-to-use JavaScript/TypeScript package built from this data
- **[i18n-timezones (Ruby)](https://github.com/onomojo/i18n-timezones)** — Rails gem for timezone translations
- **[i18n-timezones (Go)](https://github.com/onomojo/i18n-timezones-go)** — Go module for timezone translations
- **[i18n-timezones (Rust)](https://github.com/onomojo/i18n-timezones-rs)** — Rust crate for timezone translations ([crates.io](https://crates.io/crates/i18n-timezones))
- **[i18n-country-translations-data](https://github.com/onomojo/i18n-country-translations-data)** — Country name translations (168 locales)

## License

MIT
