# frozen_string_literal: true

DeviseTokenAuth.setup do |config|
  config.change_headers_on_each_request = false
  config.token_cost = Rails.env.test? ? 4 : 10
end
