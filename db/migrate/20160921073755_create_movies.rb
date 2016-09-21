class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.boolean :checked_out, default: false
      t.boolean :reserved, default: false
      t.string :description
      t.integer :times_rented
      
      t.timestamps null: false
    end
  end
end
