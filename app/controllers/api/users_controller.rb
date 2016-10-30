module Api
  class UsersController < ApplicationController

    respond_to :json

    def index
      respond_with(User.all)
    end

    def show
      render :json => {:info => "Current User", :user => current_user}, :status => 200
    end

    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        respond_to do |format|
          format.json { render :json => @user }
        end
      end
    end


    private
      def user_params
        params.require(:user).permit(:username, :email)
      end


  end
end
