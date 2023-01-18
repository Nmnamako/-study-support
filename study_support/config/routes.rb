Rails.application.routes.draw do
  devise_for :users
  
  root to: "homes#top"
  
  get "homes/top" => "homes#top"
  get "homes/my_page" => "homes#my_page"
  get "users/my_page" => "users#my_page"
  
  # ゲストユーザー用
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#guest_sign_in'
    get 'users/sign_out' => 'devise/sessions#destroy'
  end
  
  
  resources :tasks, only: [:new, :index, :edit, :update, :create, :destroy]
  resources :usage_times, only: [:new, :create]
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end