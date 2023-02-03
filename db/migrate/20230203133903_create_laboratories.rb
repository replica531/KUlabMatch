class CreateLaboratories < ActiveRecord::Migration[7.0]
  def change
    create_table :laboratories do |t|
      t.string :university
      t.string :department
      t.string :field
      t.string :major
      t.references :survey, foreign_key: true

      t.timestamps
    end
  end
end
