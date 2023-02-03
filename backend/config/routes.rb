Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create edit update destroy]
    resources :laboratories, only: %i[index show create update destroy]
  end
end
