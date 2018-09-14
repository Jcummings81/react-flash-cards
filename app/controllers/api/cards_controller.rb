class Api::CardsController < ApplicationController
    def index
        render json: Card.all
      end
    
      def create
        card = Card.new(item_params)
        if card.save
          render json: card
        else
          render json: { errors: card.errors }, status: :unprocessable_entity 
        end
      end
    
      def update
        card = Card.find(params[:id])
        card.update()
        render json: card
      end
    
      def destroy
        Card.find(params[:id]).destroy
        render json: { message: 'Card deleted' }
      end
    
      private
    
      def item_params
        params.require(:card).permit(:front, :back)
      end
end
