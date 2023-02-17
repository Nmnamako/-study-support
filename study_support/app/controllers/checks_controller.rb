class ChecksController < ApplicationController
  
  def create 
    @task = Task.find(params[:task_id])
    check = current_user.check.new(task_id: @task.id)
    check.save
    #redirect_to tasks_path(task)
  end
  
  def destroy
    @task = Task.find(params[:task_id])
    check = current_user.check.find_by(task_id: @task.id)
    check.destroy
    #redirect_to tasks_path(task)
  end
  
end