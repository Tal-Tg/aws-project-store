class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        login : "http://localhost:8080/user/login",
        logout: "http://localhost:8080/user/logout",
        addPost:"http://localhost:8080/user/post",
        getPosts:"http://localhost:8080/user/posts",
        getOnePost:"http://localhost:8080/user/post",
        likePost:"http://localhost:8080/user/like-post",
        unLikePost:"http://localhost:8080/user/un-like-post",
        commentOnPost:"http://localhost:8080/user/comment-on-post",
        deleteCommentOnPost:"http://localhost:8080/user/delete-comment-on-post",
        getUsersSearch : "http://localhost:8080/application/users-get-search",
        getMainPosts :"http://localhost:8080/user/home-posts",
        getOtherUser:"http://localhost:8080/user/get-other-user",
        getOtherUserPosts : "http://localhost:8080/user/get-other-user-posts",
        addFriendShip:"http://localhost:8080/user/add-friendship",
        removeFriendShip:"http://localhost:8080/user/remove-friendship",
        ifFriendShip:"http://localhost:8080/user/check-if-freindship",
        getNotification:"http://localhost:8080/user/get-notifications",
        markNotificationsAsRead:"http://localhost:8080/user/mark-notifications-as-read",
        acceptFriendShip:"http://localhost:8080/user/accept-frindship",
        declineFriendShip:"http://localhost:8080/user/decline-frindship",
        getFirstTimeMessages: "http://localhost:8080/user/messages",
        getUserFriendsMessages: "http://localhost:8080/user/chat-userFriends-online",
        getUserById:"http://localhost:8080/user/get-user",
        getFirstTimeMessageNotif:"http://localhost:8080/user/first-messages-notification",
        setMessagesNotifSeen:"http://localhost:8080/user/update-messages-notification-seen",
        getMutualFriends:"http://localhost:8080/user/mutualFriends",
        getUserFriends:"http://localhost:8080/user/get-user-friends",
        getUserFriendRelevant : "http://localhost:8080/user/shareList-userFriends" 
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        login : "http://localhost:8080/user/login",
        logout: "http://localhost:8080/user/logout",
        addPost:"http://localhost:8080/user/post",
        getPosts:"http://localhost:8080/user/posts",
        getOnePost:"http://localhost:8080/user/post",
        likePost:"http://localhost:8080/user/like-post",
        unLikePost:"http://localhost:8080/user/un-like-post",
        commentOnPost:"http://localhost:8080/user/comment-on-post",
        deleteCommentOnPost:"http://localhost:8080/user/delete-comment-on-post",
        getUsersSearch : "http://localhost:8080/application/users-get-search",
        getMainPosts :"http://localhost:8080/user/home-posts",
        getOtherUser:"http://localhost:8080/user/get-other-user",
        getOtherUserPosts : "http://localhost:8080/user/get-other-user-posts",
        addFriendShip:"http://localhost:8080/user/add-friendship",
        removeFriendShip:"http://localhost:8080/user/remove-friendship",
        ifFriendShip:"http://localhost:8080/user/check-if-freindship",
        getNotification:"http://localhost:8080/user/get-notifications",
        markNotificationsAsRead:"http://localhost:8080/user/mark-notifications-as-read",
        acceptFriendShip:"http://localhost:8080/user/accept-frindship",
        declineFriendShip:"http://localhost:8080/user/decline-frindship",
        getFirstTimeMessages: "http://localhost:8080/user/messages",
        getUserFriendsMessages: "http://localhost:8080/user/chat-userFriends-online",
        getUserById:"http://localhost:8080/user/get-user",
        getFirstTimeMessageNotif:"http://localhost:8080/user/first-messages-notification",
        setMessagesNotifSeen:"http://localhost:8080/user/update-messages-notification-seen",
        getMutualFriends:"http://localhost:8080/user/mutualFriends",
        getUserFriends:"http://localhost:8080/user/get-user-friends",
        getUserFriendRelevant : "http://localhost:8080/user/shareList-userFriends" 
        
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;