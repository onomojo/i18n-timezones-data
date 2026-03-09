defmodule I18nTimezonesData.MixProject do
  use Mix.Project

  @version File.read!("VERSION") |> String.trim()

  def project do
    [
      app: :i18n_timezones_data,
      version: @version,
      elixir: "~> 1.14",
      start_permanent: Mix.env() == :prod,
      description: "CLDR-sourced timezone name translations for 152 timezones across 36 locales (data package)",
      package: package(),
      deps: [{:ex_doc, "~> 0.31", only: :dev, runtime: false}]
    ]
  end

  def application, do: []

  defp package do
    [
      licenses: ["MIT"],
      links: %{"GitHub" => "https://github.com/onomojo/i18n-timezones-data"},
      files: ["lib", "data", "mix.exs", "README.md", "LICENSE", "VERSION"]
    ]
  end
end
