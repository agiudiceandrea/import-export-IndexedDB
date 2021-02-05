# import-export-IndexDB
_Javascript code to export from an IndexedDB and import into another IndexedDB in order to export all the "The Great Suspender" saved sessions and import them into another extension's IndexedDB, if compatible, or in a previous version of "The Great Suspender"_

[The Great Suspender](https://github.com/greatsuspender/thegreatsuspender) Chrome extension has been removed from the Chrome Web Store for security reasons: see [greatsuspender/thegreatsuspender#1263][tgs1263], [greatsuspender/thegreatsuspender#1304][tgs1304].


In order to export all the saved sessions from the malicious extension and import them in a safe previous release ([7.1.6](https://github.com/greatsuspender/thegreatsuspender/releases/tag/v7.1.6)) of the extension, I followed these steps:

- close Chrome - disable Internet connection - open Chrome - reenable the malicious extension
- go to the extension options page
- open the Chrome DevTools window (CTR+SHIT+I)
- in the DevTools console
- - execute the Javascript code in [consoleSave.js](consoleSave.js)
- - execute the Javascript code in [exportSavedSessions.js](exportSavedSessions.js) -> save the file console.json
- close the Chrome DevTools window - close the malicious extension options page and disable it
- install the previous release ([7.1.6](https://github.com/greatsuspender/thegreatsuspender/releases/tag/v7.1.6)) of the extension
- copy the file console.json to the installation folder
- use a text editor to replace all the occurence of the string "klbibkeccnjlkjkiokjodocebajanakg" (the id of the malicious extension) with the string of the id of the installed estension
- go to this extension options page
- open the Chrome DevTools window
- in the DevTools console
- - execute the Javascript code in [loadJSONFunctions.js](loadJSONFunctions.js)
- - execute the command `loadJSON('console.json')`
- check that all the saved session have been imported in this extension
- remove the malicious extension


The code was taken and modified to the needs from:
- https://devio.wordpress.com/2016/01/10/retrieving-chrome-tabs-suspended-by-the-great-suspender/
- https://coderwall.com/p/prhwzg/add-console-save-to-chrome - https://bgrins.github.io/devtools-snippets/#console-save
- https://www.scriptol.com/javascript/indexedDB-JSON.php



[tgs1263]: https://github.com/greatsuspender/thegreatsuspender/issues/1263
[tgs1304]: https://github.com/greatsuspender/thegreatsuspender/issues/1304
