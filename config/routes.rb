Rails.application.routes.draw do

  root to: 'home#index'
  namespace :api do 
    namespace :v1 do 
     resources :fruits, only: [:index, :create, :destroy, :update]
     resources :comments, only: [:create]
    end 
  end

  resources :fruits, only: [:show]
end
