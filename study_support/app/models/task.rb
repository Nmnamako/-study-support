class Task < ApplicationRecord
  has_many :usage_times, dependent: :destroy
  has_many :check, dependent: :destroy
  belongs_to :user
  
  
  def check_by?(user)
    check.exists?(user_id: user.id)
  end
  
end
