json.api_status 'ok'
json.survey do
  json.partial! @survey
end
json.laboratories do
  json.array! @survey.laboratories do |laboratory|
    json.partial! laboratory
  end
end
