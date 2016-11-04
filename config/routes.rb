Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks"}
  root to: 'application#index'

  namespace :api, defaults:{format: :json} do
    resources :movies, :genres, :categorizations
    resources :users, only: [:index, :show, :update]
  end
end
