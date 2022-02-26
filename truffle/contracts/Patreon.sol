// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Patreon {

  struct Post {
    uint id;
    bool isPublic;
    address creatorAddress;
    string postName;
    string postDescription;
    string[] images;
  }

  struct Subscription {
    uint expiryTimestamp;
    uint amount;
    address userAddress;
    address creatorAddress;
  }

  struct User {
    uint id;
    uint amount;
    address userAddress;
    string username;
    string description;
    address[] subscribers;
  }


  Post[] posts;
  User[] public users;
  Subscription[] public subscriptions;

  function postsCount() public view returns(uint) {
    return posts.length;
  }

  function getSubscriptions() external view returns(Subscription[] memory) {
    uint j = 0;
    for (uint i = 0; i < subscriptions.length; i++) {
      if ( subscriptions[i].userAddress == msg.sender ) {
        j++;
      }
    }
    Subscription[] memory _subscriptions = new Subscription[](j);
    j = 0;
    for (uint i = 0; i < subscriptions.length; i++) {
      if ( subscriptions[i].userAddress == msg.sender ) {
        _subscriptions[j] = subscriptions[i];
        j++;
      }
    }
    return _subscriptions;
  }

  function getPosts() external view returns(Post[] memory) {
    uint j = 0;
    for (uint i = 0; i < posts.length; i++) {
      bool flag = false;
      for (uint k = 0; k < subscriptions.length; k++) {
        if (subscriptions[k].userAddress == msg.sender && posts[i].creatorAddress == subscriptions[k].creatorAddress) {
          flag = true;
        }
      }
      if (flag || posts[i].isPublic ) {
        j++;
      }
    }
    Post[] memory _posts = new Post[](j);
    j = 0;
    for (uint i = 0; i < posts.length; i++) {
      bool flag = false;
      for (uint k = 0; k < subscriptions.length; k++) {
        if ( subscriptions[k].userAddress == msg.sender && posts[i].creatorAddress == subscriptions[k].creatorAddress ) {
          flag = true;
        }
      }
      if (flag || posts[i].isPublic) {
        _posts[j] = posts[i];
        j++;
      }
    }
    return _posts;
  }

  function getCreatorData(address _creatorAddress) external view returns(Post[] memory, User memory ) {
    uint j = 0;
    for (uint i = 0; i < posts.length; i++) {
      if (posts[i].creatorAddress == _creatorAddress) {
        bool flag = false;
        for (uint k = 0; k < subscriptions.length; k++) {
          if (subscriptions[k].userAddress == msg.sender && posts[i].creatorAddress == subscriptions[k].creatorAddress) {
            flag = true;
          }
        }
        if (flag || posts[i].isPublic ) {
          j++;
        }
      }
    }
    Post[] memory _posts = new Post[](j);
    j = 0;
    for (uint i = 0; i < posts.length; i++) {
      if(posts[i].creatorAddress == _creatorAddress) {
        bool flag = false;
        for (uint k = 0; k < subscriptions.length; k++) {
          if ( subscriptions[k].userAddress == msg.sender && posts[i].creatorAddress == subscriptions[k].creatorAddress ) {
            flag = true;
          }
        }
        if (flag || posts[i].isPublic) {
          _posts[j] = posts[i];
          j++;
        }
      }
    }
    User memory user;
    for (uint i = 0; i < users.length; i++) {
      if (users[i].userAddress == _creatorAddress) {
        user = users[i];
      }
    }
    return (_posts, user);
  }

  function createUser(string memory _username, string memory _description) external {
    User memory user;
    user.id = users.length;
    user.amount = 1 ether;
    user.userAddress = msg.sender;
    user.username = _username;
    user.description = _description;
    users.push(user);
  }

  function createPost( string memory _postName, string memory _postDescription, string[] memory _images) external {
    posts.push(Post(posts.length, false, msg.sender, _postName, _postDescription, _images));
  }

  function updatePost(uint _id,  string memory _postName, string memory _postDescription) external {
    require(msg.sender == posts[_id].creatorAddress);
    posts[_id].postName = _postName;
    posts[_id].postDescription = _postDescription;
  }

 function subscribeToCreator(uint _id, uint _expiryTimestamp)external payable{
   for(uint i = 0 ; i<users.length; i++){
     if(users[i].id == _id){
       
        uint c = users[i].subscribers.length;
        users[i].subscribers[c] = msg.sender;
        require(msg.value >= users[i].amount);
   payable(users[i].userAddress).transfer(msg.value);
   subscriptions.push(Subscription(_expiryTimestamp, users[i].amount, msg.sender, users[i].userAddress));
   break;
   }
   }

 }

 function renewSubscription(uint _id, uint _expiryTimestamp)external payable{
   for(uint i = 0; i<users.length; i++){
     if(users[i].id==_id){
       for(uint j = 0; j<subscriptions.length; j++){
         if(subscriptions[j].userAddress == msg.sender && subscriptions[j].creatorAddress == users[i].userAddress){
           subscriptions[j].expiryTimestamp = _expiryTimestamp;
           require(msg.value >= users[i].amount);
          payable(users[i].userAddress).transfer(msg.value);
          break;
         }
       }
       break;
     }
   }

 }

  // function buyPost(uint _id) external payable {
  //   require(msg.value >= posts[_id].amount);
    
  // }


}

