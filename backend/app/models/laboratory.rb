class Laboratory < ApplicationRecord
  has_many :laboratory_users, dependent: :destroy
  has_many :users, through: :laboratory_users
end
