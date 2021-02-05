var db; var result=[]; var record=0;
var dbor = window.indexedDB.open("tgs");
dbor.onsuccess = function(event) { 
  db = dbor.result;
  db.transaction(["gsSavedSessions"], "readonly")
    .objectStore("gsSavedSessions")
    .openCursor()
    .onsuccess= function(event) {
      var c=event.target.result;
      if (c){
        result.push(c.value);
        console.log(record++);
        c.continue();
      } else {
        console.save(result);
      }
    };
};
