class AddColumnToSurvey < ActiveRecord::Migration[7.0]
  def change
    add_column :surveys, :active, :boolean, default: true, null: false
    add_column :surveys, :year, :integer
  end
end
