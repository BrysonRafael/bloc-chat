(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    // rooms.$add({ rooms: "room" }).then(function(ref) {
    //   var id = ref.key;
    //   console.log("added record with id " + id);
    //   list.$indexFor(id); // returns location in the array
    // });

    var add = function add(roomName) {
      rooms.$add(roomName);// TODO: Fill in teh codez
    }; //- add()

    return {
      all: rooms,
      add: add
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
