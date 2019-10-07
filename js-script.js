function download(type) {
    var file = new Blob([$("#count-words").val()], {type: type});
    filename = $("#filename").val() + ".txt";
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
};


function startTimer(count) {
    jQuery('#timer').html('<span>' + count + ' minutes left </span>');
    window.setInterval(function(){
          count = count - 1;
          if (count > 5) {
            jQuery('#timer').html('<span>' + count + ' minutes left </span>');
          }
          else if (count >= 0) {
            jQuery('#timer').html('<span style="color: #f64a46;">' + 
                count + ' minutes left </span>');
          }
          }, 60000);   //one per minute
}


function highlight(elem, clr) {
  if (elem.style.color == clr) {
    elem.style.color = 'black';
    elem.style.background = '#f5f5f5';
  } else {
    elem.style.color = clr;
    elem.style.background = clr;
  }
}