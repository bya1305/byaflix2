class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :reserved, :description, :img_url, :rated, :runtime, :actors, :imdb_rating

end
