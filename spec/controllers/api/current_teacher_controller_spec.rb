require 'rails_helper'

RSpec.describe Api::CurrentTeacherController, type: :controller, api: true do
  let(:body) { JSON.parse(response.body) }
  let(:params) { {} }

  before { request.headers.merge!(teacher.create_new_auth_token) }

  describe 'PUT update' do
    let!(:teacher) { create(:teacher) }
    let(:email) { 'robinho@email.com' }
    let(:name) { 'robinho' }
    let(:params) { { teacher: { name: name, email: email }, id: 1 } }

    before { put :update, params: params }

    it 'updates the created teacher' do
      expect(
        teacher.reload.attributes.slice(*params[:teacher].keys.map(&:to_s))
      ).to eq(params[:teacher].transform_keys(&:to_s))
    end

    it 'returns true' do
      expect(body['updated']).to eq(true)
    end
  end

  describe 'GET show' do
    let(:email) { 'robinho@email.com' }
    let(:teacher) { create(:teacher, email: email) }
    let(:params) { { id: 1 } }

    before { get :show, params: params }

    it 'returns the authenticated teacher' do
      expect(body['email']).to eq(email)
    end
  end
end
