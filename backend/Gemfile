source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem 'bootsnap',        '1.12.0', require: false
gem 'importmap-rails', '1.1.0'
gem 'jbuilder',        '2.11.5'
gem 'pg',              '1.4.2'
gem 'puma',            '5.6.4'
gem 'racc',            '1.6.0'
gem 'rails',           '7.0.4'
gem 'sprockets',       '3.7.2'
gem 'sprockets-rails', '3.4.2'
gem 'sqlite3',         '1.6.0'
gem 'stimulus-rails',  '1.0.4'
gem 'turbo-rails',     '1.1.1'

group :development, :test do
  gem 'debug', '1.6.1', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'rubocop', require: false
  gem 'rubocop-rails', require: false
  gem 'web-console', '4.2.0'
end

group :test do
  gem 'capybara',           '3.37.1'
  gem 'selenium-webdriver', '4.2.0'
  gem 'webdrivers',         '5.0.0'
end

# 環境変数
gem 'dotenv-rails', '2.7.6', groups: %i[development test]

# Auth0
gem 'jwt', '2.3.0'

# API用
gem 'rack-cors', '1.1.1'
