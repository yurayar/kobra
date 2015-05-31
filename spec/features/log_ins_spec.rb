require 'rails_helper'

RSpec.describe "the signin process", :type => :feature do
  before :each do
    Admin.create(:email => 'admin@example.com', :password => 'password')
  end

  it "signs me in" do
    visit '/admin/'

    fill_in 'admin[email]', with: 'admin@example.com'
    fill_in 'admin[password]', with: 'password'
    click_button 'Log in'
  end
end
