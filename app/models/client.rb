class Client < ActiveRecord::Base
  mount_uploader :photo, ClientPhotoUploader
end
