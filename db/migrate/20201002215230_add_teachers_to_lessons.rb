class AddTeachersToLessons < ActiveRecord::Migration[6.0]
  def change
    add_reference :lessons, :teacher, foreign_key: true, index: true
  end
end
