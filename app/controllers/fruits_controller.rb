class FruitsController < ApplicationController
  def show
    @fruit = Fruit.find(params[:id])
  end
end
