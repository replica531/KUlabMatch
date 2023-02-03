class Survey < ApplicationRecord
  has_many :laboratories, dependent: :destroy
end
