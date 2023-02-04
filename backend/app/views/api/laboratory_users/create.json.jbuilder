json.api_status 'ok'
json.votedLabIds do
  json.array! @voted_lab_ids do |voted_lab_id|
    json.rank voted_lab_id[0]
    json.labId voted_lab_id[1]
  end
end
