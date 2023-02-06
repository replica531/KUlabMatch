json.api_status 'ok'
json.votedLabIds do
  json.array! @voted_lab_ids do |voted_lab_id|
    json.rank voted_lab_id[0]
    json.labId voted_lab_id[1]
  end
end
json.laboratories do
  json.array! @survey.laboratories do |laboratory|
    json.partial! laboratory
    json.teachers laboratory.teachers
    json.users do
      json.array! laboratory.laboratory_users do |laboratory_user|
        json.rank laboratory_user.rank
        json.gpa laboratory_user.user.gpa
      end
    end
  end
end
