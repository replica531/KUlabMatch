# frozen_string_literal: true

class Survey < ApplicationRecord
  has_many :laboratories, dependent: :destroy
end
