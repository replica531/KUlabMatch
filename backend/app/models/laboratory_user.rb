class LaboratoryUser < ApplicationRecord
  belongs_to :user
  belongs_to :laboratory
end
