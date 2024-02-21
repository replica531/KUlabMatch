# frozen_string_literal: true

class CreateTeachers < ActiveRecord::Migration[7.0]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :position
      t.references :laboratory, foreign_key: true

      t.timestamps
    end
  end
end
