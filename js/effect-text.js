$('.txt').html(function (i, html) {
  var chars = $.trim(html).split("");
  return '<span>' + chars.join('</span><span>') + '</span>';
});


// var old_html = document.getElementsByClassName("txt");
// var new_html = "<span>" + old_html + "</span>";
// console.log('old_html', old_html)
// console.log('new_html', new_html)
// document.getElementsByClassName("txt").innerHTML = new_html;
