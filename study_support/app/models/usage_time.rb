class UsageTime < ApplicationRecord
  belongs_to :task
  belongs_to :user
  
  
  scope :created_today, -> { where(created_at: Time.zone.now.all_day) } # 今日
  scope :created_yesterday, -> { where(created_at: 1.day.ago.all_day) } # 前日
  scope :created_two_days_ago, -> { where(created_at: 2.day.ago.all_day) } #2日前
  scope :created_three_days_ago, -> { where(created_at: 3.day.ago.all_day) } #3日前
  scope :created_four_days_ago, -> { where(created_at: 4.day.ago.all_day) } #4日前
  scope :created_five_days_ago, -> { where(created_at: 5.day.ago.all_day) } #5日前
  scope :created_six_days_ago, -> { where(created_at: 6.day.ago.all_day) } #6日前
  
  
  
end
