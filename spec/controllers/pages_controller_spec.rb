require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  it 'should get index' do
    route_to('pages#index')
    assert_response :success
  end

  it 'should get fallback' do
    route_to('pages#fallback', route: 'unknown')
    assert_response :success
  end
end
