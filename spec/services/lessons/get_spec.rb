require 'rails_helper'

RSpec.describe Lessons::Get, type: :service do
  let(:response) { described_class.call(params) }
  let(:teacher) { create(:teacher) }

  let!(:lesson) { create(:lesson, teacher: teacher) }
  let(:params) { { id: lesson.id } }

  it 'returns the lesson' do
    expect(response).to eq(lesson)
  end

  context 'when there is no id' do
    let(:params) { {} }

    it 'returns all lessons' do
      expect { response }.to raise_error(KeyError)
    end
  end
end
