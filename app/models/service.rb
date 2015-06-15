class Service < ActiveRecord::Base
  mount_uploader :picture, ServicePhotoUploader
end
