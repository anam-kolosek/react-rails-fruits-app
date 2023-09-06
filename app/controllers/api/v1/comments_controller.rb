class Api::V1::CommentsController < ApplicationController
  def create
    comment = Comment.create(comment_params)
    render json: comment
  end

  def update
    comment = Comment.find(params[:id])
    comment.update_attributes(comment_params)
    render json: comment
  end

  def destroy
    Comment.destroy(params[:id])
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :fruit_id)
  end
end