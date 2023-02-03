json.api_status 'ok'
json.surveys do
  json.array! @surveys do |survey|
    json.partial! survey
  end
end
json.survey do
  json.partial! @survey
end
json.laboratories do
  json.array! @survey.laboratories do |laboratory|
    json.partial! laboratory
    json.teachers laboratory.teachers
  end
end
