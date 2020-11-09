class AddImageToLesson < ActiveRecord::Migration[6.0]
  def change
    change_table :lessons do |t|
      t.text :image
    end
  end
end
