ENV['RAILS_ENV'] ||= 'test'

require 'byebug'
require 'combustion'
require 'capybara/rspec'

Combustion.initialize! :active_record, :action_controller,
                       :action_view, :sprockets

require 'rspec/rails'
require 'capybara/rails'

require 'best_in_place/test_helpers'
require_relative 'support/retry_on_timeout'


RSpec.configure do |config|
  config.include BestInPlace::TestHelpers
  config.use_transactional_fixtures = false
end
