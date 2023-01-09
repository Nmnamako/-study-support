Rails.application.routes.draw do
  devise_for :users
  
  root to: "homes#top"
  
  get "homes/top" => "homes#top"
  get "homes/my_page" => "homes#my_page"
  
  resources :tasks, only: [:new, :index, :edit, :update, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
