RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ADMIN_EMAILS= ['admin@gmail.com']

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app
  end

  config.current_user_method { current_user } # auto-generated
  config.authenticate_with {} # leave it to authorize
  config.authorize_with do
      if !user_signed_in?
        redirect_to main_app.new_user_session_url
      else
        is_admin= ADMIN_EMAILS.include?(current_user.email)
        redirect_to main_app.new_user_session_url unless is_admin 
      end
  end

  private

  def verify_is_admin
    (current_user.nil?) ? redirect_to(root_path) : (redirect_to(root_path) unless is_admin)
  end
end
