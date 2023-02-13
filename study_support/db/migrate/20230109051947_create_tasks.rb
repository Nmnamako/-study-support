class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.integer "user_id", null: false
      t.string "title", null: false
      t.text "body"
      t.date "start_date"
      t.date "end_date"

      t.timestamps
    end
  end
end
