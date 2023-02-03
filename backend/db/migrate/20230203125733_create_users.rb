class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :auth0_user_id, null: false
      t.integer :affiliation, null: false, default: 0
      t.integer :grade
      t.float :gpa
      t.boolean :admin, null: false, default: false

      t.timestamps
    end
  end
end
