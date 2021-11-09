
function modP(){

    $( "p.test" ).on({
        click: function() {
          $( this ).hide();
        }, mouseenter: function() {
          $( this ).addClass( "inside" );
        }, mouseleave: function() {
          $( this ).removeClass( "inside" );
        }
      });
}

modP()