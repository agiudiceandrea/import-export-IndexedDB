function importIDB(dname, sname, arr) {
  return new Promise(function(resolve) {
    var r = window.indexedDB.open(dname)
    r.onupgradeneeded = function() {
      var idb = r.result
      var store = idb.createObjectStore(sname, {keyPath: "id"})
    }
    r.onsuccess = function() {
      var idb = r.result
        let tactn = idb.transaction(sname, "readwrite")
    	  var store = tactn.objectStore(sname)
        for(var obj of arr) {
          store.put(obj)
        }
        resolve(idb)
    }
    r.onerror = function (e) {
     alert("Enable to access IndexedDB, " + e.target.errorCode)
    }    
  })
}

async function loadJSON(fname) {
  var response = await fetch(fname)
  var str = await response.text()
  var data = JSON.parse(str)
  var idb = await importIDB("tgs", "gsSavedSessions", data)
}
