require 'rails_helper'

RSpec.describe Api::LessonsController, type: :controller, api: true do
  let(:query) { '' }
  let(:body) { JSON.parse(response.body) }
  let(:params) { { query: query } }
  let(:teacher) { create(:teacher) }

  describe 'GET index' do
    let!(:lessons) do
      create_list(:lesson, 5, teacher: teacher).map do |lesson|
        lesson.attributes.except('created_at', 'updated_at')
      end
    end

    before { get :index, params: params }

    it 'returns all lessons' do
      expect(
        body.map { |lesson| lesson.except('teacher') }
      ).to eq(lessons.map { |lesson| lesson.except('teacher_id') })
    end

    it "returns the correct lesson's teacher" do
      expect(
        body.map { |lesson| lesson['teacher']['id'] }
      ).to eq(lessons.pluck('teacher_id'))
    end
  end

  describe 'Post create' do
    let(:params) { { lesson: { name: 'joana', description: 'jasdhkerubfelj', link: 'http.com.br', image: 'image' } } }

    before do
      request.headers.merge!(teacher.create_new_auth_token)
      post :create, params: params
    end

    it 'returns the created lesson' do
      expect(body.slice(*params[:lesson].keys.map(&:to_s))).to eq(params[:lesson].transform_keys(&:to_s))
    end

    it 'associates the created lesson to the teacher' do
      expect(body['teacher']['id']).to eq(teacher.id)
    end
  end
end
