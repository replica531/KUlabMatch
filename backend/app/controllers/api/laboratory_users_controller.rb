class Api::LaboratoryUsersController < ApplicationController
  before_action :set_laboratory_user, only: %i[destroy]
  before_action :set_current_user, only: %i[create destroy]
  before_action :set_survey, only: %i[create]
  before_action :authenticate_request!, only: %i[create destroy]

  def create
    destroy_laboratory_user_params.each do |lab_user|
      LaboratoryUser.find_by(user_id: @user.id, laboratory_id: lab_user['laboratory_id']).destroy
    end
    create_laboratory_user_params.each do |lab_user|
      LaboratoryUser.create(user_id: @user.id, laboratory_id: lab_user['laboratory_id'], rank: lab_user['rank'])
    end
    @voted_lab_ids = @user.laboratory_users.pluck(:rank, :laboratory_id)
  end

  def destroy
    @laboratory_user.destroy
  end

  private

  def set_laboratory_user
    @laboratory_user = LaboratoryUser.find(params[:id])
  end

  def set_current_user
    user_id = params.require(:userId)
    @user = User.find_by(id: user_id)
  end

  def set_survey
    survey_id = params.require(:surveyId)
    @survey = Survey.find(survey_id)
  end

  def destroy_laboratory_user_params
    return [] if params[:destroyLabIds].nil?

    params.require(:destroyLabIds)
  end

  def create_laboratory_user_params
    return [] if params[:createLabIds].nil?

    params.require(:createLabIds)
  end
end
