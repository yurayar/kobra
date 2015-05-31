class PartnersController < ApplicationController
  before_action :set_partner, only: [:show]

  # GET /partners
  def index
    @partners = Partner.all
  end

  # GET /partners/1
  def show
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_partner
      @partner = Partner.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def partner_params
      params.require(:partner).permit(:name, :photo)
    end
end
