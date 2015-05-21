class HomesController < ApplicationController
  def index
    @articles = Article.all
    @services = Service.all
    @clients = Client.all
  end
end
