require 'rails_helper'

RSpec.describe Api::CurrentTeacherController, type: :controller, api: true do
  let(:body) { JSON.parse(response.body) }
  let(:params) { {} }

  before { request.headers.merge!(teacher.create_new_auth_token) }

  describe 'PUT update' do
    let!(:teacher) { create(:teacher) }
    let(:email) { 'robinho@email.com' }
    let(:name) { 'robinho' }
    let(:image) { 'image' }
    let(:params) { { teacher: { name: name, email: email, image: image }, id: 1 } }

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

  describe 'GET lessons' do
    let!(:teacher) { create(:teacher) }
    let!(:lessons) do
      create_list(:lesson, 5, teacher: teacher).map do |lesson|
        lesson.attributes.except('created_at', 'updated_at')
      end
    end

    let!(:another_teacher) { create(:teacher, email: 'another@email.com') }
    let!(:lesson_with_another_teacher) { create(:lesson, teacher: another_teacher) }

    let(:expected_response) { Lesson.where(id: [teacher_lesson_1.id, teacher_lesson_2.id]) }

    before { get :lessons }

    it 'returns only the lessons associated with the teacher' do
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
end
