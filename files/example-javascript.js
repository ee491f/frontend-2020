window.addEventListener('load', function () {
  console.log( "javascript is ready!" );
  let first_button_index = 0;

  let hide_button = document.querySelectorAll('[function="hide"]')[first_button_index];
  hide_button.onclick = function() {
    let anchors = document.querySelectorAll('a');
    for (const anchor of anchors){
      anchor.style.display = "none";
    }
  };

  let show_button = document.querySelectorAll('[function="show"]')[first_button_index];
  show_button.onclick = function() {
    let anchors = document.querySelectorAll('a');
    for (const anchor of anchors){
      anchor.style.display = "inline";
    }
  };
})