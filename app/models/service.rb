class Service < ActiveRecord::Base
  mount_uploader :photo, ServicePhotoUploader
end
