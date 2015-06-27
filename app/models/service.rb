class Service < ActiveRecord::Base
  validates :name, presence: true
  mount_uploader :picture, ServicePhotoUploader
end
