# d3by5-axis
The d3by5-axis is part of the d3by5 graph tools, this specific package will configure [d3 svg axis components] (https://github.com/d3/d3/wiki/svg-axes) to the visualisations created by a d3by5 graph

## NOTE
This is as for now a company internal project, see [C3](https://github.com/c3js/c3) or [NVD3](https://github.com/novus/nvd3) for D3 fully functional chart libraries.


## DEPENDENCIES
* d3

## API
* All methods are getters/setters. Called without arguments they return the current option value. Called with arguments sets option value and returns axis.

x.axis = d3by5Axis().show(opt.xAxis).pos(opt.xPos).scale(x.scale).align(opt.xAlign).ticks(opt.xTicks);


  ​

| Method / option | Argument(s)          | Default Value  | Description                              |
| --------------- | -------------------- | -------------- | ---------------------------------------- |
|                 |                      |                |                                          |
| .show()         | bool                 | true           | If the aisi should show or not |
| .pos()          | string               |                | Not implemented |
| .scale()        | d3 scale             |                | See d3 [reference](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#scale) |
| .align()        | string               |                | top, bottom, left or right. Se d3 [ref](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#orient). |
| .ticks()        | array                |                | Count and format of ticks |
|                 |                      |                |                                          |


## EXAMPLE


### chart.apply()
```javascript

x.axis = d3by5Axis().show(true).pos(bottom).scale(x.scale).align(bottom).ticks([10]);


```


## LICENCE
[MIT](https://opensource.org/licenses/MIT)
