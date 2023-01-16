class UsersController < ApplicationController
  
  def my_page
    @user = current_user
    @times = @user.usage_times
    @task = @user.tasks
    
    # 作業終了後削除
    @usage_time = UsageTime.all
    
    
    @today_time = @times.created_today
    @yesterday_times = @times.created_yesterday
    @two_days_ago_times = @times.created_two_days_ago
    @three_days_ago_times = @times.created_three_days_ago
    @four_days_ago_times = @times.created_four_days_ago
    @five_days_ago_times = @times.created_four_days_ago
    @six_days_ago_times = @times.created_six_days_ago
  end
end
