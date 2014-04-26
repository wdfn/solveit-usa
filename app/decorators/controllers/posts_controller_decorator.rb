Forem::PostsController.class_eval do
  def create
      @post = @topic.posts.build(post_params)
      @post.user = forem_user

      if @post.save
        create_successful
      else
        create_failed
      end
      @post.approve
    end
end