def create
      authorize! :create_topic, @forum
      @topic = @forum.topics.build(topic_params)
      @topic.user = forem_user

      if @topic.save
        create_successful
      else
        create_unsuccessful
      end
      @topic.approve
    end