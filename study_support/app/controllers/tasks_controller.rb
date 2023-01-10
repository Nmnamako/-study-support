class TasksController < ApplicationController
  
  def index
    @user = current_user
    @task = Task.new
    
    #ログインユーザーのみ表示させる
    if user_signed_in?
      @tasks = @user.tasks.page(params[:page])
    end
  end
  
  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    @task.save
    redirect_to tasks_path
  end
  
  def edit
    @task = Task.find(params[:id])
  end
  
  def show
    @task = Task.find(params[:id])
  end
  
  private

  def task_params
    params.require(:task).permit(:title)
  end
  
end
