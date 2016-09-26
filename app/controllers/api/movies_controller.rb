module Api
  class MoviesController < ApplicationController
    respond_to :json

    def index
      respond_with(Movie.all)
    end

    def show
      respond_with(Movie.find(params[:id]))
    end

    def update
      @movie = Movie.find(params[:id])
      if @movie.update(movie_params)
        respond_to do |format|
          format.json { render :json => @movie }
        end
      end
    end


    private
      def movie_params
        params.require(:movie).permit(:reserved)
      end

  end
end
