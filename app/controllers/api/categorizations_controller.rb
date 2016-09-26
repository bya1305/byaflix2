module Api
  class CategorizationsController < ApplicationController
    respond_to :json

    def index
      respond_with(Categorization.all)
    end


  end
end
