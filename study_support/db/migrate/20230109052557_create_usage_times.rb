class CreateUsageTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :usage_times do |t|
      t.integer "user_id", null: false
      t.integer "task_id", null: false
      t.integer "elapsed_time", null: false

      t.timestamps
    end
  end
end
