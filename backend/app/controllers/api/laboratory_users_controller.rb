class Api::LaboratoryUsersController < ApplicationController
  before_action :set_laboratory_user, only: %i[destroy]
  before_action :authenticate_request!, only: %i[create destroy]

  def create
    @test = laboratory_user_params
    # @laboratory_user = LaboratoryUser.new(laboratory_user_params)

    # if @laboratory_user.save
    #   render :show, status: :created, location: @laboratory_user
    # else
    #   render json: @laboratory_user.errors, status: :unprocessable_entity
    # end
  end

  def destroy
    @laboratory_user.destroy
  end

  private

  def set_laboratory_user
    @laboratory_user = LaboratoryUser.find(params[:id])
  end

  def laboratory_user_params
    params.require(:selectedLabIds)
  end
end
