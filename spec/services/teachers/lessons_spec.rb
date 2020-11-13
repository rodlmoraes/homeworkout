require 'rails_helper'

RSpec.describe Teachers::Lessons, type: :service do
  let(:response) { described_class.call(params) }

  let!(:teacher) { create(:teacher) }
  let!(:teacher_lesson_1) { create(:lesson, teacher: teacher) }
  let!(:teacher_lesson_2) { create(:lesson, teacher: teacher) }

  let!(:another_teacher) { create(:teacher, email: 'another@email.com') }
  let!(:lesson_with_another_teacher) { create(:lesson, teacher: another_teacher) }

  let(:expected_response) { Lesson.where(id: [teacher_lesson_1.id, teacher_lesson_2.id]) }

  let(:params) do
    {
      teacher: teacher
    }
  end

  it 'returns only the lessons associated with the teacher' do
    expect(response).to eq(expected_response)
    expect(response).not_to include(lesson_with_another_teacher.id)
  end

  context 'when there is no teacher' do
    let(:params) do
      {
        teacher: nil
      }
    end

    it 'raises no method error' do
      expect { response }.to raise_error(NoMethodError)
    end
  end
end
