class AddImageToTeacher < ActiveRecord::Migration[6.0]
  def change
    change_table :teachers do |t|
      t.text :image
    end
  end
end
