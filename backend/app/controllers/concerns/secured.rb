# frozen_string_literal: true

module Secured
  extend ActiveSupport::Concern

  def authenticate_request!
    @auth0_user_id = auth_token[0]['sub']
  rescue JWT::VerificationError, JWT::DecodeError
    render json: { errors: ['Not Authenticated'] }, status: :unauthorized
  end

  private

  def http_token
    return unless request.headers['Authorization'].present?

    request.headers['Authorization'].split(' ').last
  end

  def auth_token
    JsonWebToken.verify(http_token)
  end
end
