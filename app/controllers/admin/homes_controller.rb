class Admin::HomesController < Admin::BaseController
  def index
    @articles = Article.all
    @services = Service.all
  end
end
