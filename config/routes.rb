Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :members
  post 'members_mass_upload', to: 'members#mass_upload', as: :members_mass_upload
end
