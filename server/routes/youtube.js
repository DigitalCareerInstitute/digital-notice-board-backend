const getYoutubeID = (url) => {
   var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
   var match = url.match(regExp);
     if (match && match[2].length == 11) {
       return match[2];
     } else {
       //error
       console.log('error with url: Youtube code has wrong format')
     }
 }

module.exports = getYoutubeID;
