/*global d3*/
/*global $*/
//장소 선정>국가별 리뷰수>

/// 북촌 리뷰수 ///
d3.csv("data/count/bokchon_data_count.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data01').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});
     

//// 창덕궁 리뷰수 ////
d3.csv("data/count/changdeokgung_data_count.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data02').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});


/// 경복궁 리뷰수 ///
d3.csv("data/count/gbp_data_count.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data03').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);

    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});

/// 인사동 리뷰수 ///
d3.csv("data/count/insadong_data_count.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data04').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});

/// 명동 리뷰수 ///
d3.csv("data/count/myeongdong_data_count.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data05').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});

/// n서울타워 리뷰수 ///
d3.csv("data/count/n_seoul_tower_data_count.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data06').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});

/// 전쟁기념관 리뷰수 ///
d3.csv("data/count/the_war_memorial_of_korea_data_count.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data07').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});


//---------------------------------------------------------------------------//
// 평점 //
// 북촌 국가별 평점 //
d3.csv("data/rate/bokchon_data_rate.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data001').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});


// 창덕궁 국가별 평점 //
d3.csv("data/rate/changdeokgung_data_rate.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data002').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});


// 경복궁 국가별 평점 //
d3.csv("data/rate/gbp_data_rate.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data003').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);

    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});

// 인사동 국가별 평점 //
d3.csv("data/rate/insadong_data_rate.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data004').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});

// 명동 국가별 평점 //
d3.csv("data/rate/myeongdong_data_rate.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data005').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});

// n서울타워 국가별 평점 //
d3.csv("data/rate/n_seoul_tower_data_rate.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data006').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});


// 전쟁기념관 국가별 평점 //
d3.csv("data/rate/the_war_memorial_of_korea_data_rate.csv", function(error, data) {
    if (error) throw error;
       var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      padding = 8;

   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
   var parseDate = d3.time.format('%Y').parse;
   var x = d3.time.scale().range([0, xWith]);
    //total이 없을 때 Y스케일   
//    var y = d3.scale.linear().range([height, 0]);
    //total이 있을 때 Y스케일
    var y1 = d3.scale.linear().range([height, 0]);

   var color = d3.scale.category20();
   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
   var yAxis = d3.svg.axis().scale(y1).orient('left');
   var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y1(d.cabinetNames); });
   var svg = d3.select('#data007').append('svg')
               .attr('width', width + margin.left + margin.right)
               .attr('height', height + margin.top + margin.bottom)
               .append('g')
               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
   data.forEach(function(d) {
      d.date = parseDate(d.date);
   });
   var cabinet = color.domain().map(function(name) {
      return {
         name: name,
         values: data.map(function(d) {
               return {date: d.date, cabinetNames: +d[name]};
         })
      };
   });
   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
   //total이 없을 때의 Y도메인
//    y.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
    //total이 있을 때의 Y도메인
    y1.domain([
      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
   ]);
    
   svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-20)');
   svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');
      
   var cabinets = svg.selectAll('.cabinets')
                     .data(cabinet)
                     .enter().append('g')
                     .attr('class', 'cabinets');
   cabinets.append('path')
           .attr('class', 'line')
           .attr('d', function(d) { return line(d.values); })
           .style('stroke', function(d) { return color(d.name); });
   cabinets.append('rect')
           .attr('x', 15)
           .attr('y', function(d, i){ return i *  20;})
           .attr('width', 10)
           .attr('height', 10)
           .style('fill', function(d) { 
               return color(d.name);
            });
   cabinets.append('text')
           .attr('x', 30)
           .attr('y', function(d, i){ return (i *  20) + 9;})
           .text(function(d){ return d.name; });
});








//---------------------------------------------------------------------------//
// date, China, Japan, Malaysia, Singapore, USA, Total
//$(document).ready(function (){
//   var data = [ 
      //bokchon_count_with_total
//       {date : '2011', 'China' : 2, 'Japan' : 76, 'Malaysia' : 2, 'Singapore' : 4, 'USA': 4, 'Total' : 95 }, 
//       {date : '2012', 'China' : 19, 'Japan' : 130, 'Malaysia' : 14, 'Singapore' : 12, 'USA': 22, 'Total' : 278 }, 
//       {date : '2013', 'China' : 36, 'Japan' : 82, 'Malaysia' : 12, 'Singapore' : 21, 'USA': 26, 'Total' : 268 }, 
//       {date : '2014', 'China' : 81, 'Japan' : 125, 'Malaysia' : 19, 'Singapore' : 26, 'USA': 33, 'Total' : 434 }, 
//       {date : '2015', 'China' : 107, 'Japan' : 135, 'Malaysia' : 28, 'Singapore' : 49, 'USA': 71, 'Total' : 648 } 
       
      //bokchon_count_without total
//       {date : '2011', 'China' : 2, 'Japan' : 76, 'Malaysia' : 2, 'Singapore' : 4, 'USA': 4 }, 
//       {date : '2012', 'China' : 19, 'Japan' : 130, 'Malaysia' : 14, 'Singapore' : 12, 'USA': 22 }, 
//       {date : '2013', 'China' : 36, 'Japan' : 82, 'Malaysia' : 12, 'Singapore' : 21, 'USA': 26 }, 
//       {date : '2014', 'China' : 81, 'Japan' : 125, 'Malaysia' : 19, 'Singapore' : 26, 'USA': 33 }, 
//       {date : '2015', 'China' : 107, 'Japan' : 135, 'Malaysia' : 28, 'Singapore' : 49, 'USA': 71 } 
       
       //total toggle (button)       
//   ];
    
//   var margin = {top: 20, right: 80, bottom: 30, left: 50},
//      width = 960 - margin.left - margin.right,
//      height = 500 - margin.top - margin.bottom,
//      padding = 8;
//
//   var xWith = data.length <= 10 ? width : (data.length * (margin.right + padding));
//   var parseDate = d3.time.format('%Y').parse;
//   var x = d3.time.scale().range([0, xWith]);
//    //total이 없을 때 Y스케일   
////    var y = d3.scale.linear().range([height, 0]);
//    //total이 있을 때 Y스케일
//    var y1 = d3.scale.linear().range([height, 0]);
//
//   var color = d3.scale.category20();
//   var xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(d3.time.format('%Y'));
//   var yAxis = d3.svg.axis().scale(y1).orient('left');
//   var line = d3.svg.line()
//                .interpolate('basis')
//                .x(function(d) { return x(d.date); })
//                .y(function(d) { return y1(d.cabinetNames); });
//   var svg = d3.select('#timeSeriesChart').append('svg')
//               .attr('width', width + margin.left + margin.right)
//               .attr('height', height + margin.top + margin.bottom)
//               .append('g')
//               .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
//   color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'date'; }));
//   data.forEach(function(d) {
//      d.date = parseDate(d.date);
//   });
//   var cabinet = color.domain().map(function(name) {
//      return {
//         name: name,
//         values: data.map(function(d) {
//               return {date: d.date, cabinetNames: +d[name]};
//         })
//      };
//   });
//   x.domain(d3.extent(data, function(d) {return d.date; })); console.log(x.ticks());
//   //total이 없을 때의 Y도메인
////    y.domain([
////      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
////      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
////   ]);
//    //total이 있을 때의 Y도메인
//    y1.domain([
//      d3.min(cabinet, function(c) { return d3.min(c.values, function(v) { return v.cabinetNames; }); }),
//      d3.max(cabinet, function(c) { return d3.max(c.values, function(v) { return v.cabinetNames; }); })
//   ]);
//    
//   svg.append('g')
//      .attr('class', 'x axis')
//      .attr('transform', 'translate(0,' + height + ')')
//      .call(xAxis)
//      .selectAll('text')
//      .style('text-anchor', 'end')
//      .attr('transform', 'rotate(-20)');
//   svg.append('g')
//      .attr('class', 'y axis')
//      .call(yAxis)
//      .append('text')
//      .attr('transform', 'rotate(-90)')
//      .attr('y', 6)
//      .attr('dy', '.71em')
//      .style('text-anchor', 'end');
//      
//   var cabinets = svg.selectAll('.cabinets')
//                     .data(cabinet)
//                     .enter().append('g')
//                     .attr('class', 'cabinets');
//   cabinets.append('path')
//           .attr('class', 'line')
//           .attr('d', function(d) { return line(d.values); })
//           .style('stroke', function(d) { return color(d.name); });
//   cabinets.append('rect')
//           .attr('x', 15)
//           .attr('y', function(d, i){ return i *  20;})
//           .attr('width', 10)
//           .attr('height', 10)
//           .style('fill', function(d) { 
//               return color(d.name);
//            });
//   cabinets.append('text')
//           .attr('x', 30)
//           .attr('y', function(d, i){ return (i *  20) + 9;})
//           .text(function(d){ return d.name; });
//});





