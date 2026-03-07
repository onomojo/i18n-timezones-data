# i18n-timezones-data

Localized timezone name translations in 36 locales, sourced from CLDR.

## Structure

```
data/{locale}.yml    # Flat key-value YAML (152 ActiveSupport timezone names)
scripts/
  flatten-yaml.js    # Import from Ruby gem's nested YAML
  validate.js        # Validate all locale files
```

## Data Format

Each locale file is flat YAML with quoted keys:

```yaml
"International Date Line West": "Internationale Datumsgrenze (Westen)"
"Tokyo": "Tokio"
```

## Scripts

```bash
# Flatten from Ruby gem source
node scripts/flatten-yaml.js ../i18n-timezones/rails/locale

# Validate all locale files
npm run validate
```

## License

MIT
