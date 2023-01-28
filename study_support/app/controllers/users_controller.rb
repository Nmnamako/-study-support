class UsersController < ApplicationController
  
  def my_page
    @user = current_user
    @times = @user.usage_times
    @task = @user.tasks
    
    # 作業終了後削除
    @usage_time = UsageTime.all
    
    
    
    # 指定した日付のUsageTimeを取得
    @today_times = @times.created_today
    @yesterday_times = @times.created_yesterday
    @two_days_ago_times = @times.created_two_days_ago
    @three_days_ago_times = @times.created_three_days_ago
    @four_days_ago_times = @times.created_four_days_ago
    @five_days_ago_times = @times.created_four_days_ago
    @six_days_ago_times = @times.created_six_days_ago
    
    # 配列に変換,elapsed_timeのみ取り出し
    @conversion1 = @today_times.pluck(:elapsed_time)
    @conversion2 = @yesterday_times.pluck(:elapsed_time)
    @conversion3 = @two_days_ago_times.pluck(:elapsed_time)
    @conversion4 = @three_days_ago_times.pluck(:elapsed_time)
    @conversion5 = @four_days_ago_times.pluck(:elapsed_time)
    @conversion6 = @five_days_ago_times.pluck(:elapsed_time)
    @conversion7 = @six_days_ago_times.pluck(:elapsed_time)
    
    # dayに値の合計を代入
    @day1 = @conversion1.inject(:+)
    @day2 = @conversion2.inject(:+)
    @day3 = @conversion3.inject(:+)
    @day4 = @conversion4.inject(:+)
    @day5 = @conversion5.inject(:+)
    @day6 = @conversion6.inject(:+)
    @day7 = @conversion7.inject(:+)
    
    # 分間を時間に変換
    if (@day1.nil?)
      @day1 = 0
    else
      @day1_total = @day1 * 0.01666667
      @day1_total_times = @day1_total.round(2)
    end
    
    if (@day2.nil?)
      @day2 = 0
    else
      @day2_total = @day2 * 0.01666667
      @day2_total_times = @day2_total.round(2)
    end
    
    if (@day3.nil?)
      @day3 = 0
    else
      @day3_total = @day3 * 0.01666667
      @day3_total_times = @day3_total.round(2)
    end
    
    if (@day4.nil?)
      @day4 = 0
    else
      @day4_total = @day4 * 0.01666667
      @day4_total_times = @day4_total.round(2)
    end
    
    if (@day5.nil?)
      @day5 = 0
    else
      @day5_total = @day5 * 0.01666667
      @day5_total_times = @day5_total.round(2)
    end
    
    if (@day6.nil?)
      @day6 = 0
    else
      @day6_total = @day6 * 0.01666667
      @day6_total_times = @day6_total.round(2)
    end
    
    if (@day7.nil?)
      @day7 = 0
    else
      @day7_total = @day7 * 0.01666667.round(2)
      @day7_total_times = @day7_total.round(2)
    end
    
    # コンソールチェック用
    # pp @day2
    
  end
end
