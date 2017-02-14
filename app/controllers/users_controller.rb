# coding: utf-8
class UsersController < ApplicationController
  after_filter :verify_authorized, except: %i[reactivate create_personal]
  after_filter :redirect_user_back_after_login, only: %i[show]
  inherit_resources
  defaults finder: :find_active!
  actions :show, :update, :unsubscribe_notifications, :destroy, :edit
  respond_to :json, only: [:contributions, :projects]

  def destroy
    authorize resource
    resource.deactivate
    sign_out(current_user) if current_user == resource
    flash[:notice] = t('users.current_user_fields.deactivate_notice', name: resource.name)
    redirect_to root_path
  end

  def unsubscribe_notifications
    authorize resource
    redirect_to edit_user_path(current_user, anchor: 'notifications')
  end

  # TODO: Go back here and rethink this...
  def settings
    authorize resource
    redirect_to edit_user_path(current_user, anchor: 'settings')
  end

  def billing
    authorize resource
    redirect_to edit_user_path(current_user, anchor: 'billing')
  end

  def show
    authorize resource
    show!{
      fb_admins_add(@user.facebook_id) if @user.facebook_id
      @title = "#{@user.display_name}"
      @unsubscribes = @user.project_unsubscribes
      @credit_cards = @user.credit_cards
      build_bank_account
    }
  end

  def reactivate
    user = params[:token].present? && User.find_by(reactivate_token: params[:token])
    if user
      user.reactivate
      sign_in user
      flash[:notice] = t('users.reactivated')
    else
      flash[:error] = t('users.failed_reactivation')
    end
    redirect_to root_path
  end

  def edit
    authorize resource
    @unsubscribes = @user.project_unsubscribes
    resource.links.build
    build_bank_account
  end

  def update
    saddddddddddddddddddddddasdawqeqwe
    authorize resource

    if update_user
      flash[:notice] = t('users.current_user_fields.updated')
      redirect_to edit_user_path(@user, anchor: params[:anchor])
    else
      render :edit
    end
  end

  def personal
    authorize resource
    @personal_information = @user.user_information
    #@personal_information?
    if @personal_information.nil?
      #creamos la relacion por unica vez

      resource.build_user_information
      @url = create_personal_user_path
      @method = 'post'
    else
      #actualizamos
      @url = update_personal_user_path
      @method = 'put'
    end

  end

  def create_personal
    @user_information = UserInformation.new(user_information_params)
    #authorize @user_information
    @user_information.user_id = resource.id
    respond_to do |format|
      if @user_information.save
        format.html { redirect_to edit_user_path(@user), notice: 'Loan seller was successfully updated.' }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end


  def update_personal

    authorize resource

    respond_to do |format|
      if resource.user_information.update(user_information_params)
        format.html { redirect_to edit_user_path(@user), notice: 'Loan seller was successfully updated.' }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def update_user
    drop_and_create_subscriptions
    update_reminders
    update_category_followers

    if password_params_given?
      if @user.update_with_password permitted_params
        sign_in(@user, bypass: true)
      end
    else
      @user.update_without_password permitted_params
    end
  end

  def category_followers_params_given?
    permitted_params[:category_followers_attributes].present?
  end

  def user_information_params_given?
    asdasdasdasdasd
    permitted_params[:document_number].present?

  end

  def password_params_given?
    permitted_params[:current_password].present? || permitted_params[:password].present?
  end

  def update_category_followers
    resource.category_followers.clear if category_followers_params_given?
  end

  def update_reminders
    if params[:user][:reminders]
      params[:user][:reminders].keys.each do |project_id|
        if params[:user][:reminders][:"#{project_id}"] == "false"
          Project.find(project_id).delete_from_reminder_queue(@user.id)
        end
      end
    end
  end

  def drop_and_create_subscriptions
    if params[:unsubscribes]
      params[:unsubscribes].each do |subscription|
        project_id = subscription[0].to_i
        #change from unsubscribed to subscribed
        if subscription[1].present?
          @user.unsubscribes.drop_all_for_project(project_id)
        #change from subscribed to unsubscribed
        else
          @user.unsubscribes.create!(project_id: project_id)
        end
      end
    end
  end

  def resource
    @user ||= params[:id].present? ? User.find_active!(params[:id]) : User.with_permalink.find_by_permalink(request.subdomain)
  end

  def build_bank_account
    @user.build_bank_account unless @user.bank_account
  end

  def permitted_params
    params.require(:user).permit(policy(resource).permitted_attributes)
  end

  def user_information_params
    params.require(:user_information).permit(policy(resource).permitted_attributes_for_personal)
  end
end
