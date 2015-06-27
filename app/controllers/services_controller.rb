class ServicesController < ApplicationController
  before_action :set_service, only: [:show, :edit, :update, :destroy]

  # GET /services
  # GET /services.json
  def index
    @services = Service.all
    @featfirst = Service.where(featured: true).limit(3)
  end

  # GET /services/1
  # GET /services/1.json
  def show
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service
      @service = Service.find(params[:id])
    end
end
