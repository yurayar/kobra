class HomesController < ApplicationController
  def index
    @articles = Article.all
    @services = Service.all
    @featfirst = Service.where(featured: true).limit(3)
    @clients = Client.all
  end
end
