json.api_status 'ok'
json.laboratories do
  json.array! @laboratories do |laboratory|
    json.partial! laboratory
  end
end
