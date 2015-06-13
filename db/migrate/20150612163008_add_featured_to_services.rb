class AddFeaturedToServices < ActiveRecord::Migration
  def change
    add_column :services, :featured, :boolean
  end
end
