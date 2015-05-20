class Admin::HomesController < Admin::BaseController
  def index
    @articles = Article.all
  end
end
