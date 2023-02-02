class CreateLaboratories < ActiveRecord::Migration[7.0]
  def change
    create_table :laboratories do |t|
      t.string :name
      t.string :teacher

      t.timestamps
    end
  end
end
