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
        session[:counter] = 1
    end

      @ball = {x: 50,
              y: 20,
              r: 20,
              vx: 10,
              vy: 9,
              color: "pink",
              value: 1,
              state: session[:counter]}


      if ((session[:counter] % 15) == 0)
        @ball[:color]="purple"
        @ball[:value]= 15
      elsif ((session[:counter] % 5) == 0)
        @ball[:color]="blue"
        @ball[:value]= 5
      elsif ((session[:counter]) % 3 == 0)
        @ball[:color]="green"
        @ball[:value]= 3
      else
        @ball[:color]="pink"
        @ball[:value]= 1
     end

     respond_to do |format|
          
           format.json {
             render json: @ball.to_json
           }
     end

  end
end
