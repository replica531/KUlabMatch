# frozen_string_literal: true

module Api
  class LaboratoriesController < ApplicationController
    before_action :set_laboratory, only: %i[show update destroy]
    before_action :authenticate_request!, only: %i[create update destroy]

    def index
      @laboratories = Laboratory.all
    end

    def show; end

    def create
      @laboratory = Laboratory.new(laboratory_params)

      if @laboratory.save
        render :show, status: :created, location: @laboratory
      else
        render json: @laboratory.errors, status: :unprocessable_entity
      end
    end

    def update
      if @laboratory.update(laboratory_params)
        render :show, status: :ok, location: @laboratory
      else
        render json: @laboratory.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @laboratory.destroy
    end

    private

    def set_laboratory
      @laboratory = Laboratory.find(params[:id])
    end

    def laboratory_params
      params.require(:laboratory).permit(:department, :field, :major)
    end
  end
end
