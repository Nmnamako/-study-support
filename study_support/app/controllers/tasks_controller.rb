class TasksController < ApplicationController
  
  def index
    @user = current_user
    @task = Task.new
    @taskShow = nil
    #ログインユーザーのみ表示させる
    if user_signed_in?
      @tasks = @user.tasks
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
  
  
  # 部分テンプレートにてshow作成したが不要かもしれない
  def show
    @taskShow = nil
    # @task = Task.find(params[:id])
  end
  
  private

  def task_params
    params.require(:task).permit(:title)
  end
  
end
