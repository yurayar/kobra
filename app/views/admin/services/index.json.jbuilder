json.array!(@services) do |service|
  json.extract! service, :id, :name, :description, :picture, :price
  json.url service_url(service, format: :json)
end
