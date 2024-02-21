# frozen_string_literal: true

class CsrfsController < ApplicationController
  def show
    render json: {
      token: form_authenticity_token,
      status: :ok
    }
  end

  private

  def form_authenticity_token; end
end
