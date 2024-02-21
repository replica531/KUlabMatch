# frozen_string_literal: true

json.api_status 'ok'
json.user do
  json.partial! @user
end
json.votedLabIds do
  json.array! @user.laboratory_users do |laboratory_user|
    json.rank laboratory_user.rank
    json.labId laboratory_user.laboratory_id
  end
end
