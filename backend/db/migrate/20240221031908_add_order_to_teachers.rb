# frozen_string_literal: true

class AddOrderToTeachers < ActiveRecord::Migration[7.0]
  def change
    add_column :teachers, :order, :integer, null: false, default: 1
  end
end
