# frozen_string_literal: true

json.api_status 'ok'
json.user do
  json.partial! @user
end
