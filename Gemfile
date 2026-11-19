source "https://rubygems.org"

# Local preview toolchain only. github.io deploys via classic GitHub Pages
# (server-side build), which ignores this Gemfile — so a modern Jekyll here
# is deploy-safe and runs natively on current Ruby.
gem "jekyll", "~> 4.3"
gem "webrick"

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-redirect-from"
end

# _config.yml uses kramdown GFM input
gem "kramdown-parser-gfm"

# stdlib gems no longer bundled by default on newer Ruby
gem "csv"
gem "base64"
gem "logger"
gem "bigdecimal"

# Windows-only: Ruby has no native filesystem-change events on Windows, so
# Jekyll falls back to polling every directory on a timer (wasted CPU, and a
# 1-2s delay before a save triggers a rebuild). `wdm` hooks ReadDirectoryChangesW
# so watches are event-driven. Matched at runtime rather than by platform symbol
# so it works on the x64-mingw-ucrt ABI too. No effect on the GitHub Pages build,
# which ignores this Gemfile entirely.
install_if -> { Gem.win_platform? } do
  gem "wdm", ">= 0.1.0"
end
