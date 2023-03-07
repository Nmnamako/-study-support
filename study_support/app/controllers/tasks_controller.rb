class TasksController < ApplicationController
  before_action :is_matching_login_user, only: [:edit, :destroy]
  
  def index
    @user = current_user
    @task = Task.new
    
    #ログインユーザーのタスクを表示させる
    if user_signed_in?
      @tasks = @user.tasks.page(params[:page]).order('updated_at DESC')
    end
    @usage_time = UsageTime.new
  end
  
  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    @task.save
    redirect_to tasks_path, notice: "タスク作成が完了しました。"
  end
  
  def edit
    @user = current_user
    @task = Task.find(params[:id])
  end
  
  def update
    @task = Task.find(params[:id])
    @task.update(task_params)
    redirect_to tasks_path, notice: "タスク編集が完了しました。"
  end
  
  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to tasks_path, alert: "タスクの削除が完了しました。"
  end
  
  private

  def task_params
    params.require(:task).permit(:title, :body, :start_date, :end_date)
  end
  
  
  # ログインユーザー以外はじく
  def is_matching_login_user
    @task = Task.find(params[:id])
    unless @task.user == current_user
      redirect_to  tasks_path
    end
  end
  
end