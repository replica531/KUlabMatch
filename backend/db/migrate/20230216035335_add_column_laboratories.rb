# frozen_string_literal: true

class AddColumnLaboratories < ActiveRecord::Migration[7.0]
  def change
    add_column :laboratories, :course, :string
    add_column :laboratories, :order, :integer
  end
end
