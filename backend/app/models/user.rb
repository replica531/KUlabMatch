# frozen_string_literal: true

class User < ApplicationRecord
  has_many :laboratory_users, dependent: :destroy
  has_many :laboratories, through: :laboratory_users
end
