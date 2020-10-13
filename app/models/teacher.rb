# frozen_string_literal: true

class Teacher < ApplicationRecord
  devise :database_authenticatable, :registerable, :validatable
  include DeviseTokenAuth::Concerns::User
  extend Devise::Models
  has_many :lessons, dependent: :destroy
end
