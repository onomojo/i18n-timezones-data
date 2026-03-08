defmodule I18nTimezonesData do
  @moduledoc """
  Data package providing timezone translation JSON files.
  """

  @doc """
  Returns the absolute path to the data directory containing locale JSON files.
  """
  def data_dir do
    Path.expand("../data", __DIR__)
  end
end
