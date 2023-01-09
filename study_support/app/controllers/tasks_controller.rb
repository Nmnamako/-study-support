class TasksController < ApplicationController
  
  def new
    @task = Task.new
  end
  
  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    @task.save
  end
  
  private

  def task_params
    params.require(:task).permit(:title)
  end
  
end
