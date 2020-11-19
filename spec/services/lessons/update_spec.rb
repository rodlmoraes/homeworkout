require 'rails_helper'

RSpec.describe Lessons::Update, type: :service do
  let(:response) { described_class.call(lesson_params) }

  let(:teacher) { create(:teacher) }
  let!(:lesson) { create(:lesson, teacher: teacher) }
  let(:id) { lesson.id }
  let(:name) { 'Muay Thai' }
  let(:description) { 'this is a very long description' }
  let(:link) { 'www.google.com' }
  let(:image) { 'image' }

  let(:lesson_params) do
    {
      id: id,
      name: name,
      description: description,
      link: link,
      image: image
    }
  end

  [:name, :description, :link, :image].each do |param|
    it "updates lesson #{param}" do
      response
      expect(lesson.reload.send(param)).to eq(lesson_params[param])
    end
  end

  it 'returns true' do
    expect(response).to eq(true)
  end
end
