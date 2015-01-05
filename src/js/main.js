/* ==========================================================================

    Project: Ats
    Author: Michal Karlowski (m.karlowski@yahoo.pl)
    Last updated: @@timestamp

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.menuToggle();
      App.infoToggle();
      App.expandElement();
      App.scrollToElement();
      App.mapToggle();
    },

    /**
     * Menu toggle
     */

    menuToggle: function() {
      $('.menu-toggle').click(function() {
        $('.header').toggleClass('menu-opened');
        $(this).find('.animated-hamburger').toggleClass('open');
      });
    },

    /**
     * Info toggle
     */
    infoToggle: function() {
      var $body = $('body');
      var $trigger = $('.more-info');
      var $overlayClose = $('.faq .close');


      $trigger.click(function() {
        $body.addClass('info-opened');
      });

      $overlayClose.click(function() {
        $body.removeClass('info-opened');
      });
    },

    /**
     * Expand element
     */
    expandElement: function() {
      $.fn.expandElement = function(expandable) {

        this.find('li').on('click', function() {
          if (!$(this).find(expandable).is(':visible')) {
            $(this).parent().find(expandable).slideUp();
            $(this).find(expandable).slideToggle();
          }
        });
      };

      $(".faqs-list").expandElement('.expand');
    },

    /**
     * Map Toggle
     */
    mapToggle: function() {
      $('.map').on('click', function(){
        $(this).addClass('active');
      });
    },

    scrollToElement: function() {
      var $trigger = $('.scroll-to').attr('id');
      $('a[href^="#"]').click(function(e) {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 200);

        e.preventDefault();
        console.log($trigger);
        return false;
      });
    }
  };

  $(function() {
    App.init();
  });

})(jQuery);
