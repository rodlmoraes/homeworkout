class AddPhoneToTeacher < ActiveRecord::Migration[6.0]
  def change
    change_table :teachers do |t|
      t.string :phone
    end
  end
end
