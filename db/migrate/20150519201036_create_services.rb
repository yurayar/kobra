class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.string :name
      t.text :description
      t.string :picture
      t.string :price

      t.timestamps null: false
    end
  end
end
