class LaboratoriesController < ApplicationController
  before_action :set_laboratory, only: %i[show update destroy]

  # GET /laboratories
  # GET /laboratories.json
  def index
    @laboratories = Laboratory.all
  end

  # GET /laboratories/1
  # GET /laboratories/1.json
  def show; end

  # POST /laboratories
  # POST /laboratories.json
  def create
    @laboratory = Laboratory.new(laboratory_params)

    if @laboratory.save
      render :show, status: :created, location: @laboratory
    else
      render json: @laboratory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /laboratories/1
  # PATCH/PUT /laboratories/1.json
  def update
    if @laboratory.update(laboratory_params)
      render :show, status: :ok, location: @laboratory
    else
      render json: @laboratory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /laboratories/1
  # DELETE /laboratories/1.json
  def destroy
    @laboratory.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_laboratory
    @laboratory = Laboratory.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def laboratory_params
    params.require(:laboratory).permit(:name, :teacher)
  end
end
