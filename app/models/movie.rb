class Movie < ActiveRecord::Base
  has_many :categorizations
  has_many :genres, through: :categorizations
  belongs_to :user
end
