require 'rails_helper'

RSpec.describe Lessons::List, type: :service do
  let(:query) { '' }
  let(:response) { described_class.call({ query: query }) }

  let(:created_lessons_size) { 5 }
  let(:teacher) { create(:teacher) }
  let!(:lessons) { create_list(:lesson, created_lessons_size, teacher: teacher) }

  it 'returns lessons' do
    expect(response.first).to be_a(Lesson)
  end

  it 'returns all lessons' do
    expect(response).to contain_exactly(*lessons)
  end

  it 'has correct created_lessons_size' do
    expect(response.size).to eq(created_lessons_size)
  end
end
