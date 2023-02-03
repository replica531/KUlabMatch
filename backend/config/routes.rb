Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[index edit update destroy]
    resources :laboratories, only: %i[index show create update destroy]
    resources :surveys, only: %i[index show create update destroy]
  end
end
