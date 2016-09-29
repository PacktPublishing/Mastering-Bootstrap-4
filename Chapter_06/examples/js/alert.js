+function ($) {
  'use strict';

  var Alert = $.fn.alert.Constructor;

  Alert.prototype.minimize = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    $this.addClass('hidden-xs-up')
    $this.siblings('.expand').removeClass('hidden-xs-up')

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('minimize.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.addClass('alert-minimize')
  }

  Alert.prototype.expand = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    $this.addClass('hidden-xs-up')
    $this.siblings('.minimize').removeClass('hidden-xs-up')

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('expand.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('alert-minimize')
  }

  $(document).on('click.bs.alert.data-api', '[data-minimize="alert"]', Alert.prototype.minimize)
  $(document).on('click.bs.alert.data-api', '[data-expand="alert"]', Alert.prototype.expand)


}(jQuery);
