class Api::UsersController < ApplicationController
  before_action :set_user, only: %i[update destroy]
  before_action :authenticate_request!, only: %i[new update destroy]

  def new
    @user = User.find_by(auth0_user_id: @auth0_user_id)
    return unless @user.nil? && @auth0_user_id.present?

    @user = User.create(auth0_user_id: @auth0_user_id, affiliation: 0, grade: 0, admin: false)
  end

  def update
    @user.update(user_params)
  end

  def destroy
    @user.destroy
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:affiliation, :grade, :gpa)
  end
end
