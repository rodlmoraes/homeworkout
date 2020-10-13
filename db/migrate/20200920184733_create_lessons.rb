class CreateLessons < ActiveRecord::Migration[6.0]
  def change
    create_table :lessons do |t|
      t.string :name
      t.text :description
      t.string :link

      t.timestamps
    end
  end
end
