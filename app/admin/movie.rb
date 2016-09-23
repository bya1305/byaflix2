ActiveAdmin.register Movie do

  permit_params :title,:year,:checked_out,:reserved,:description,:img_url,:rated,:runtime,:actors,:imdb_rating, genre_ids: []

  form do |f|
    f.semantic_errors
      f.inputs "Movie" do
        f.input :title
        f.input :year
        f.input :genres, :as => :check_boxes
      end
      f.actions
    end



end
