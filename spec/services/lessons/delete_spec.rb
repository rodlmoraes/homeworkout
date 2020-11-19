require 'rails_helper'

RSpec.describe Lessons::Delete, type: :service do
  let(:response) { described_class.call(params) }
  let(:teacher) { create(:teacher) }

  let!(:lesson) { create(:lesson, teacher: teacher) }
  let(:params) { { id: lesson.id } }

  it 'deletes the lesson' do
    expect(response).to eq(lesson)
    expect(Lesson.where(id: response.id)).to eq([])
  end

  context 'when param id does not exists' do
    let(:params) { { id: lesson.id + 1 } }

    it 'raises record not found error' do
      expect { response }.to raise_error(ActiveRecord::RecordNotFound)
      expect(Lesson.find(lesson.id)).to eq(lesson)
    end
  end
end
