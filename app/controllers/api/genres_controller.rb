module Api
  class GenresController < ApplicationController
    respond_to :json

    def index
      respond_with(Genre.all)
    end

    def show
      respond_with(Genre.find(params[:id]))
    end

  end
end
