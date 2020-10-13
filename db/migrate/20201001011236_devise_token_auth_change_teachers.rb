class DeviseTokenAuthChangeTeachers < ActiveRecord::Migration[6.0]
  def change
    change_table :teachers do |t|
      t.string :provider, null: false, default: "email"
      t.string :uid, null: false, default: ""

      t.string :encrypted_password, null: false, default: ""

      t.string :email

      t.json :tokens
    end

    add_index :teachers, :email,                unique: true
    add_index :teachers, [:uid, :provider],     unique: true
  end
end
