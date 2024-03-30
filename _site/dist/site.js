// 

let $ = jQuery.noConflict();

$(document).ready(function () {

  $('.contact_block').on('click', function () {

    // get the data attribute of this element
    let data = $(this).data('name');

    if (data == 'question') {
      // if its already down slide up
      if ($('.question_form').is(':visible')) {
        $('.question_form').slideUp(500);
      } else {
        $('.question_form').slideDown(500);
      }
    }

    // find element with class arrow-up and change name to arrow-down
    let arrow = $(this).find('.arrow-up');

    if (!arrow.length) {
      arrow = $(this).find('.arrow-down');
    }

    if (arrow.hasClass('arrow-up')) {
      arrow.removeClass('arrow-up').addClass('arrow-down');
      arrow.attr('name', 'arrow-down');
    } else {
      arrow.removeClass('arrow-down').addClass('arrow-up');
      arrow.attr('name', 'arrow-up');
    }
  });


});

