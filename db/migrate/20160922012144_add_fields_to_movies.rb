class AddFieldsToMovies < ActiveRecord::Migration
  def change
    add_column :movies, :img_url, :string
    add_column :movies, :rated, :string
    add_column :movies, :runtime, :string
    add_column :movies, :actors, :string
    add_column :movies, :imdb_rating, :string
  end
end
