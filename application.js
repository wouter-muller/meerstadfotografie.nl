$(function() {

  var showPrevNext = function() {

    // SHOW PREVIOUS BUTTON
    if ($id > 1) {
      $('.photo-fullscreen__previous').show();
    }

    // SHOW NEXT BUTTON
    if ($id < $number) {
      $('.photo-fullscreen__next').show();
    }
  };

  var closeButton = function() {
    $('.photo-fullscreen').hide();
    $('.photo-fullscreen__previous').hide();
    $('.photo-fullscreen__next').hide();
  }

  var previousButton = function() {
    $id = $id - 1;
    console.log($id);
    $('.photo-fullscreen__photo').html("<img src='" + $id + ".jpg'>");

    $('.photo-fullscreen__previous').hide();
    $('.photo-fullscreen__next').hide();

    showPrevNext();
  }

  var nextButton = function() {
    $id = $id + 1;
    console.log($id);
    $('.photo-fullscreen__photo').html("<img src='" + $id + ".jpg'>");

    $('.photo-fullscreen__previous').hide();
    $('.photo-fullscreen__next').hide();

    showPrevNext();
  }

  // CLICK ON THUMBNAIL
  $('.js-thumbnail').click( function( event ) {

    $id = $(this).data('id');

    showPrevNext();

    $('.photo-fullscreen').show();
    $('.photo-fullscreen__photo').html("<img src='" + $id + ".jpg'>");
    return false;
  })

  // CLOSE BUTTON
  $('.photo-fullscreen__close').click( function( event ) {
    closeButton();
  })

  // CLOSE BY ESCAPE BUTTON
  $(document).keydown(function (event) {
    if (event.keyCode === 27) {

      closeButton();
    }
  });

  // PREVIOUS
  $('.photo-fullscreen__previous').click( function( event) {
    previousButton();
  })

  // PREVIOUS BY ARROW LEFT BUTTON
  $(document).keydown(function (event) {
    if (event.keyCode === 37) {
      if ($id > 1) {
        previousButton();
      }
    }
  });

  // NEXT
  $('.photo-fullscreen__next').click( function( event) {
    nextButton();
  })

  // NEXT BY ARROW RIGHT BUTTON
  $(document).keydown(function (event) {
    if (event.keyCode === 39) {
      if ($id < $number) {
        nextButton();
      }
    }
  });
})


