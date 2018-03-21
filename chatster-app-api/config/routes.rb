Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users
      resources :friendships
      resources :chats

      post '/login', to: 'auth#login'
      get '/current_user', to: 'auth#currentUser'
      post '/signup', to: 'auth#signup'

      post '/chats/:id/messages', to: 'chats#send_message'
      mount ActionCable.server => '/cable'
    end
  end

end
