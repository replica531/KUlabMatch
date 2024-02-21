# frozen_string_literal: true

class ChangeColumnNotNullAddUsers < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :grade, :integer, null: false, default: 0
  end
end
