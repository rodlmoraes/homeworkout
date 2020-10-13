require 'rails_helper'

RSpec.describe Lessons::Create, type: :service do
  let(:response) { described_class.call(lesson_params) }

  let(:teacher) { create(:teacher) }
  let(:name) { 'Muay Thai' }
  let(:description) { 'this is a very long description' }
  let(:link) { 'www.google.com' }

  let(:lesson_params) do
    {
      teacher: teacher,
      name: name,
      description: description,
      link: link
    }
  end

  it 'creates a lesson' do
    expect { response }.to change { Lesson.count }.by(1)
  end

  it 'returns a lesson' do
    expect(response).to be_a(Lesson)
  end

  it 'associates the created lesson to the teacher' do
    expect(response.teacher).to eq(teacher)
  end
end
