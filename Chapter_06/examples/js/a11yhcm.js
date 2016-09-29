+function ($) {
  'use strict';

  // A11YHCM CLASS DEFINITION
  // ======================

  var A11yHCM = function (element) {
    $(element).on('click', '[data-a11yhcm]', this.toggle)
  }

  A11yHCM.VERSION = '1.0.0'

  A11yHCM.DEFAULTS = {
    styleSheetID : 'bs-a11yhcm'
  }

  A11yHCM.prototype.toggle = function (e) {
    
    var $this   = $(this)
    var styleSheet = $this.attr('data-a11yhcm')
    
    if($this.attr('a11yhcm-id'))
      $this.styleSheetID = $this.attr('a11yhcm-id')
    else
      $this.styleSheetID = A11yHCM.DEFAULTS.styleSheetID
    
    if(document.getElementById($this.styleSheetID)) {
      $('#' + $this.styleSheetID).remove()
      $this.removeClass('enabled')
    }
    
    else {
      var styleSheetLink = '<link href="' + styleSheet + '" rel="stylesheet" id="' + $this.styleSheetID + '"/>'
      $('head').append(styleSheetLink)
      $this.addClass('enabled')
    }

  }

  // A11YHCM PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.a11yhcm')

      if (!data) $this.data('bs.a11yhcm', (data = new A11yHCM(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.a11yhcm

  $.fn.a11yhcm             = Plugin
  $.fn.a11yhcm.Constructor = A11yHCM


  // A11YHCM NO CONFLICT
  // =================

  $.fn.a11yhcm.noConflict = function () {
    $.fn.a11yhcm = old
    return this
  }


  // A11YHCM DATA-API
  // ==============

  $(document).on('click.bs.a11yhcm.data-api', '[data-a11yhcm]', A11yHCM.prototype.toggle)
  $(window).on('load', function () {
    $('[data-a11yhcm]').each(function () {
      var $a11yhcm = $(this)
      Plugin.call($a11yhcm, $a11yhcm.data())
    })
  })

}(jQuery);
