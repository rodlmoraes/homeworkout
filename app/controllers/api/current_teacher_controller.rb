module Api
  class CurrentTeacherController < ApplicationController
    before_action :authenticate_teacher!

    def show
      render json: current_teacher
    end

    def update
      updated = Teachers::Update.call(update_params)

      render json: { updated: updated }, status: :ok
    end

    def lessons
      lessons = Teachers::Lessons.call(lessons_params)

      render json: lessons
    end

    private

    def update_params
      params[:teacher].permit(:name, :email, :image).merge(teacher: current_teacher)
    end

    def lessons_params
      { teacher: current_teacher }
    end
  end
end
