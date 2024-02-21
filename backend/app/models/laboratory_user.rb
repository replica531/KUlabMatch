# frozen_string_literal: true

class LaboratoryUser < ApplicationRecord
  belongs_to :user
  belongs_to :laboratory
end
