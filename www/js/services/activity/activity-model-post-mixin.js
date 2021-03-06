function PostMixin(posts, groups){
  this.isAnswered = function(){
    return(this.get('answers') && this.get('answers').length > 0)
  }
  this.isUnanswered = function(){
    return !this.isAnswered()
  }

  this.canVote = function(){
    var notAnswered = this.isUnanswered()
    var notExpired = !this.isExpired()
    var notOwnedByMe = !this.isOwn()

    return notAnswered && notExpired && notOwnedByMe
  } 

  this.canUndoVote = function(){
    return this.isAnswered() && !this.isExpired()
  }

  this.upvote = function(){
    var postID = this.get('entity').id
    var that = this
    return posts.upvote(postID).then(function(){
      that.markAsVoted()
    })
  }

  this.downvote = function(){
    var postID = this.get('entity').id
    var that = this
    return posts.downvote(postID).then(function(){
      that.markAsVoted()
    })
  }

  this.markAsVoted = function(){
    this.set('answers', ['whatever'])
    this.refreshPriorityZone()
  }

  this.markAsNotVoted = function(){
    this.set('answers', [])
  }

  this.undoVote = function(){
    var postID = this.get('entity').id
    var that = this
    return posts.unvote(postID).then(function(answer){
      that.markAsNotVoted()
    })
  }

  this.userIsSubscribedToNotifications = function(){
    return this.get('post') && this.get('post').is_subscribed
  }

  this.subscribeToNotifications = function(){
    var postID = this.get('entity').id
    var that = this
    return posts.subscribeToNotifications(postID).then(function (response) {
      that.markAsSubscribed()
    })
  }

  this.unsubscribeFromNotifications = function(){
    var postID = this.get('entity').id
    var that = this
    return posts.unsubscribeFromNotifications(postID).then(function (response) {
      that.markAsUnsubscribed()
    })
  }

  this.markAsSubscribed = function(){
      this.set('post', {is_subscribed: true})
  }

  this.markAsUnsubscribed = function(){
      this.set('post', {is_subscribed: false})
  }

  this.creatorName = function(){
    var name = this.get('owner').first_name + ' ' + this.get('owner').last_name
    return name
  }

  this.groupName = function(){
    var userGroup = groups.get(this.get('entity').group_id);
    if(userGroup)
      return userGroup.official_name
  }

  this.getCreator = function(){
    return this.get('owner')
  }

  this.refreshPriorityZone = function(){
    if(this.isAnswered() || !this.isUnread())
      this.removeFromPriorityZone()
  }
}