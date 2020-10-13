# table lessons
#
# name: string
# description: text
# link: string
# created_at
# updated_at

class Lesson < ApplicationRecord
  belongs_to :teacher
end
