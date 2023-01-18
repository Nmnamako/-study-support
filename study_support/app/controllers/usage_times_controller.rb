class UsageTimesController < ApplicationController
  
  def new
    @usage_time = UsageTime.all
  end
  
  def create
    @usage_time = UsageTime.new(usage_time_params)
    @usage_time.user_id = current_user.id
    @usage_time.save
    redirect_to tasks_path, notice: "時間を記録しました。"
  end
  
  private

  def usage_time_params
    params.require(:usage_time).permit(:task_id, :elapsed_time)
  end
  
end
