class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :tasks, dependent: :destroy
  has_many :usage_times, dependent: :destroy
  has_many :check, dependent: :destroy
  
  # 所要時間まとめ
  def total_all(i)
    if i == 1
      a = usage_times.created_today.pluck(:elapsed_time).inject(:+)
    elsif i == 2
      a = usage_times.created_yesterday.pluck(:elapsed_time).inject(:+)
    elsif i == 3
      a = usage_times.created_two_days_ago.pluck(:elapsed_time).inject(:+)
    elsif i == 4
      a = usage_times.created_three_days_ago.pluck(:elapsed_time).inject(:+)
    elsif i == 5
      a = usage_times.created_four_days_ago.pluck(:elapsed_time).inject(:+)
    elsif i == 6
      a = usage_times.created_four_days_ago.pluck(:elapsed_time).inject(:+)
    elsif i == 7
      a = usage_times.created_six_days_ago.pluck(:elapsed_time).inject(:+)
    end
    
    if a.nil?
      0
    else
      (a * 0.01666667).round(2)
    end
  end
  
  
  # ゲストユーザー用
  def self.guest
    find_or_create_by!(name: 'guestuser' ,email: 'guest@example.com') do |user|
      user.password = SecureRandom.urlsafe_base64
      user.name = "guestuser"
    end
  end
  
end
