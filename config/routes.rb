Rails.application.routes.draw do

  get 'box/index'
  get 'box/home'
  root 'application#index'
end
