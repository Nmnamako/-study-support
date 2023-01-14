class UsageTimesController < ApplicationController
  
  def create
    @usage_time = Usage_time.new(usage_time_params)
    @usage_time.save
  end
  
  private

  def usage_time_params
    params.require(:usage_time).permit(:task_id, :elapsed_time)
  end
  
end
