require 'rails_helper'

RSpec.describe Teachers::Update, type: :service do
  let(:response) { described_class.call(teacher_params) }

  let!(:teacher) { create(:teacher) }
  let(:name) { 'Rodrigo' }
  let(:email) { 'rodrigo@email.com' }
  let(:image) { 'image' }

  let(:teacher_params) do
    {
      name: name,
      email: email,
      teacher: teacher,
      image: image
    }
  end

  [:name, :email].each do |param|
    it "changes teacher #{param}" do
      expect { response }.to change(teacher, param)
    end
  end

  it 'returns true' do
    expect(response).to be(true)
  end

  context 'when name is nil and email is present' do
    let(:name) { nil }

    it 'changes teacher email' do
      expect { response }.to change(teacher, :email)
    end

    it 'does not change teacher name' do
      expect { response }.not_to change(teacher, :name)
    end

    it 'returns true' do
      expect(response).to be(true)
    end
  end

  context 'when there is no teacher' do
    let(:teacher) { nil }

    it 'raises no method error' do
      expect { response }.to raise_error(NoMethodError)
    end
  end
end
