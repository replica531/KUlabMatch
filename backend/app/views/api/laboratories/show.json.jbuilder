# frozen_string_literal: true

json.api_status 'ok'
json.laboratory @laboratory
json.max_request @laboratory.survey.max_request
json.teachers @laboratory.teachers
json.gpas do
  json.array! @laboratory.users do |user|
    json.rank user.laboratory_users.find_by(laboratory_id: @laboratory.id).rank
    json.gpa user.gpa
  end
end
