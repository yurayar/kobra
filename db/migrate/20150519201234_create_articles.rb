class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.integer :category_id
      t.integer :author_id
      t.integer :comments_id
      t.string :thumbnail

      t.timestamps null: false
    end
  end
end
