class UsageTimesController < ApplicationController
  
  def create
    @time = nil
    @usage_time = Usage_time.new(usage_time_params)
    @usage_time.task_id = @time
    
    @usage_time.save
  end
  
  private

  def usage_time_params
    params.require(:usage_time).permit(:elapsed_time)
  end
  
end
