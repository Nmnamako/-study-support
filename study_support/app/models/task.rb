class Task < ApplicationRecord
  has_many :usage_times, dependent: :destroy
  belongs_to :user
  
end
