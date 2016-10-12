(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['d3'] , factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('d3'));
    } else {
        root.d3by5Axis = factory(root.d3);
    }
}(this, function (d3) {

'use:strict';

  function axis() {

    var show
      , pos
      , scale
      , ticks
      , align
    ;

    function _axis(){
      if(show) {
        return d3.svg.axis()
                .scale(scale)
                .orient(align)
                .ticks(ticks.count)
                .tickFormat(ticks.format);
      }
      return false;
    }

  /**
   * getter/setters
   */
    _axis.show = function (value) {
      return arguments.length ? (show = value, _axis) : show;
    };
    _axis.pos = function (value) {
      return arguments.length ? (pos = value, _axis) : pos;
    };
    _axis.scale = function (value) {
      return arguments.length ? (scale = value, _axis) : scale;
    };
    _axis.ticks = function (value) {
      return arguments.length ? (ticks = _parseTicks(value), _axis) : ticks;
    };
    _axis.align = function (value) {
      return arguments.length ? (align = value, _axis) : align;
    };

    return _axis;
  }


  /**
   * Parse tick options befoire use
   * @param  {object} ticks {count, format}
   * @return {object}       {count, format}
   */
 function _parseTicks(ticks) {

    var count = ticks[0]
      , format = ticks[1];

    switch(count) {
      case 'auto':
        count = null;
        break;
      case 'none':
        count = 0;
        break;
      default:
        count = +count;
        break;
    }

    // TODO: Handle more formats that just date/time
    switch(format) {
      case undefined:
      case 'auto':
        format = null;
        break;
      default:
        format = d3.time.format(format);
        break;
    }

    return {count:count, format:format};
  }

  return axis;

}));