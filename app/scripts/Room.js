(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    rooms.$add({ rooms: "room" }).then(function(ref) {
      var id = ref.key;
      console.log("added record with id " + id);
      list.$indexFor(id); // returns location in the array
    });

    return {
      all: rooms
    };

    rooms.submit = function () {
      if (rooms.text) {
          rooms.list.push(this.text);
          rooms.text = '';
      }
    }
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
