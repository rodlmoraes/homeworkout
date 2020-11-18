Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  mount_devise_token_auth_for 'Teacher', at: 'api/teacher_auth'

  namespace 'api' do
    resources :lessons, only: [:index, :create, :show, :destroy]
    resources :current_teacher, only: [:show, :update] do
      get 'lessons', on: :collection, to: 'current_teacher#lessons'
    end
  end

  get '/:route', to: 'pages#fallback'
  get '*path', to: 'pages#fallback'
end
