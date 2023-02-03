class CreateSurveys < ActiveRecord::Migration[7.0]
  def change
    create_table :surveys do |t|
      t.string :name
      t.integer :max_request, default: 7, null: false

      t.timestamps
    end
  end
end
