class UsersController < ApplicationController
  
  def my_page
    @user = current_user
    @times = @user.usage_times
    @task = @user.tasks
    
    
    @usage_time = UsageTime.all
    
    @today_time = @times.created_today
    @yesterday_times = @times.created_yesterday.pluck(:elapsed_time)

    
    
    
    pp @today_time
  end
  
end
