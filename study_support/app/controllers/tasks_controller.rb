class TasksController < ApplicationController
  
  def index
    @user = current_user
    @task = Task.new
    #ログインユーザーのタスクを表示させる
    if user_signed_in?
      @tasks = @user.tasks.page(params[:page])
    end
    @usage_time = UsageTime.new
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
  
  def update
    @task = Task.find(params[:id])
    @task.update(task_params)
    redirect_to tasks_path
  end
  
  # 部分テンプレートにてshow作成したが不要かもしれない
  # グラフ関係で使う
  
  
  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to tasks_path
  end
  
  private

  def task_params
    params.require(:task).permit(:title, :body)
  end
  
end