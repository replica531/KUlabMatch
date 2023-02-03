Rails.application.routes.draw do
  defaults format: :json do
    resources :laboratories
  end
end
