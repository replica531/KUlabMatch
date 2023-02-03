class Api::UsersController < ApplicationController
  before_action :set_user, only: %i[update destroy]
  before_action :authenticate_request!, only: %i[index update destroy]

  def index
    @user = User.find_by(auth0_user_id: @auth0_user_id)
    if @user.nil? && @auth0_user_id.present?
      @user = User.create(auth0_user_id: @auth0_user_id)
    end
  end

  def update
    if @user.update(user_params)
      render :show, status: :ok, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:auth0_user_id, :affiliation, :grade, :gpa)
  end
end
