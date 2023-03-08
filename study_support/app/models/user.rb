class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :tasks, dependent: :destroy
  has_many :usage_times, dependent: :destroy
  has_many :check, dependent: :destroy
  
  # def total(i)
  #   if i.nil?
  #     0
  #   else
  #     (i * 0.01666667).round(2)
  #   end
  # end
  
  def total_all(i)
    if i == 1
      a = usage_times.created_today.pluck(:elapsed_time).inject(:+)
    end
    
    if a.nil?
      0
    else
      (a * 0.01666667).round(2)
    end
  end
  
  # def self.total
  #   (self * 0.01666667).round(2)
  # end
  
  # ゲストユーザー用
  def self.guest
    find_or_create_by!(name: 'guestuser' ,email: 'guest@example.com') do |user|
      user.password = SecureRandom.urlsafe_base64
      user.name = "guestuser"
    end
  end
  
end
