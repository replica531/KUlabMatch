class CreateLaboratoryUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :laboratory_users do |t|
      t.integer :rank, null: false
      t.references :user, null: false, foreign_key: true
      t.references :laboratory, null: false, foreign_key: true

      t.timestamps
    end
  end
end
