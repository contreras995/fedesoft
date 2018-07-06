module Api
    module V1
        class PostsController < ApplicationController
            include ActionController::HttpAuthentication::Token::ControllerMethods

            before_action :authenticate, only: [:create, :destroy]

            def create
                @post = @usuario.posts.new(post_params)
                if @post.save
                    render json: @post, status: :created
                else
                    render json: @post.errors, status: :unprocessable_entity
                end
            end

            private
            def post_params 
                params.require(:post).permit(:titulo, :cuerpo)
            end

            def index
                @post = Post.order('created_at DESC')
            end    

            def authenticate
                authenticate_or_request_with_http_token do |token, options|
                    @usuario = Usuario.find_by(token: token)
                end    
            end
        end
    end
end