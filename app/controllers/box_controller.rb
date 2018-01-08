require 'nokogiri'
require 'base64'
require 'uri'

class BoxController < ApplicationController

  def index
    session.clear
  end

  def home
    if session[:counter] != nil
        session[:counter] += 1
      else
        session[:counter] = 0
      end

    respond_to do |format|
      format.html
      format.json {
        render json: {:counter => session[:counter]}
      }
    end
  end
end
