class CreateChecks < ActiveRecord::Migration[6.1]
  def change
    create_table :checks do |t|
      t.integer "user_id"
      t.integer "task_id", null: false

      t.timestamps
    end
  end
end
