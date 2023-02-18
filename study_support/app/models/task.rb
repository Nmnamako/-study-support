class Task < ApplicationRecord
  has_many :usage_times
  has_many :check, dependent: :destroy
  belongs_to :user
  
  def times_total
    total_times = 0
    usage_times.each do |f|
      total_times += f.elapsed_time
    end
    return total_times
  end
  
  
  
  def check_by?(user)
    check.exists?(user_id: user.id)
  end
  
end
