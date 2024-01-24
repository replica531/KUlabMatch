class Api::SurveysController < ApplicationController
  before_action :set_survey, only: %i[show update destroy]
  before_action :authenticate_request!, only: %i[create update destroy]

  def index
    @surveys = Survey.all
    @survey = Survey.find_by(name: params[:name], year: params[:year])
  end

  def show
    @survey = Survey.find(name: params[:name])
  end

  def create
    @survey = Survey.new(survey_params)

    if @survey.save
      render :show, status: :created, location: @survey
    else
      render json: @survey.errors, status: :unprocessable_entity
    end
  end

  def update
    if @survey.update(survey_params)
      render :show, status: :ok, location: @survey
    else
      render json: @survey.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @survey.destroy
  end

  private

  def set_survey
    @survey = Survey.find(params[:id])
  end

  def survey_params
    params.require(:survey).permit(:name)
  end
end
