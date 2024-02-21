# frozen_string_literal: true

class Laboratory < ApplicationRecord
  has_many :laboratory_users, dependent: :destroy
  has_many :users, through: :laboratory_users
  has_many :teachers, dependent: :destroy
  belongs_to :survey
end
