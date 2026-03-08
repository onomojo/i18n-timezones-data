package data

import "embed"

//go:embed data/*.json
var FS embed.FS
