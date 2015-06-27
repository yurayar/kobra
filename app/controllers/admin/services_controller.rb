class Admin::ServicesController < Admin::BaseController
  before_action :all_services, only: [:index, :create, :update, :destroy]
  before_action :set_service, only: [:show, :edit, :update, :destroy]
  respond_to :html, :js

  # GET /services
  # GET /services.json

  # GET /services/1
  # GET /services/1.json
  def show
  end

  # GET /services/new
  def new
    @service = Service.new
  end

  # GET /services/1/edit
  def edit
  end

  # POST /services
  # POST /services.json
  def create
    @service = Service.create(service_params)
  end

  # PATCH/PUT /services/1
  # PATCH/PUT /services/1.json
  def update
    @service.update(service_params)
  end

  # DELETE /services/1
  # DELETE /services/1.json
  def destroy
    @service.destroy
  end

  private
    def all_services
      @services = Service.all
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_service
      @service = Service.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def service_params
      params.require(:service).permit(:name, :description,:price, :featured)
    end
end
