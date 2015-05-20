json.array!(@articles) do |article|
  json.extract! article, :id, :title, :content, :category_id, :author_id, :comments_id, :thumbnail
  json.url article_url(article, format: :json)
end
