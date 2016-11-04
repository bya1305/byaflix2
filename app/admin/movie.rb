ActiveAdmin.register Movie do

  permit_params :title,:year,:checked_out,:reserved,:description,:img_url,:rated,:runtime,:actors,:user_id,:imdb_rating, genre_ids: []

  form do |f|
    f.semantic_errors
      f.inputs "Movie" do
        f.input :title
        f.input :year
        f.input :checked_out
        f.input :reserved
        f.input :description
        f.input :img_url
        f.input :rated
        f.input :runtime
        f.input :actors
        f.input :imdb_rating
        f.input :genres, :as => :check_boxes
        f.input :user_id
      end
      f.actions
    end



end
