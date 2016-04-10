(function() {
var svgWidth = 1280;
var svgHeight = 1000;
var svg = d3.select("#myGraph");
var legendWidth = 100,
    legendHeight = 15,
    legendMargin = { left: 90, top: 32 };

var makeChart = function(svg, dataset, order, key){
  var circleElements;

  var color = [
    "#FF3356", '#FF644F', '#FF804C', '#FFA147', "#EBA555",
    "#D2A069", "#D4A97C", "#C3AF99", "#C5B8AB", "#C4C1BD",
    "#CBCACA", "#BAC4C5", "#A3C4C4", "#89C4C5", "#6FC6C7",
    "#4FCCCF", "#2DC5E2", "#22BCE9", "#02A2FE", "#088DF9",
    "#007AFF"
  ];

  var margin = {top: 0, right: 0, bottom: 0, left: 210};

  // 범례
  var legend = svg.append("g").attr("class", "legend");

  // 범례 그라데이션
  var legendBar = legend
  .append("defs")
  .append("linearGradient")
  .attr("id", "gradient")
  .attr("x1", "0%")
  .attr("y1", "100%")
  .attr("x2", "100%")
  .attr("y2", "100%")
  .selectAll("stop")
  .data([
        { offset: "0%", color: "#FF3356"},
        { offset: "30%", color: "#FFA147"},
        { offset: "50%", color: "#CBCACA"},
        { offset: "70%", color: "#4FCCCF"},
        { offset: "100%", color: "#007AFF"}
    ])
  .enter()
  .append("stop")
  .attr("offset", function(d) { return d.offset; })
        .attr("stop-color", function(d) { return d.color; });

  legend.append("rect")
      .attr("width", legendWidth)
      .attr("height", legendHeight)
      .style("fill", "url(#gradient)")
      .attr("rx", legendHeight / 2)
      .attr("ry", legendHeight / 2)
      .attr("transform", "translate(" + (legendMargin.left - 6) + "," + legendMargin.top + ")")
  .attr("opacity", 0)
  .transition()
  .delay(2000)
  .duration(3000)
  .attr("opacity", 0.3);


  var x = d3.scale.linear().range([legendWidth, 0]).domain([35, 5]);
  var xAxis = d3.svg.axis().scale(x).orient("up");
      // .attr("x", margin.left + 50)
      // .attr("y", margin.top + 43)
  legend.append("g")
      .attr("transform", "translate(" + (legendMargin.left * 1.5) + "," + (margin.top + 68) + ")")
      // .call(xAxis)
    .append("text")
      .attr("y", margin.top)
      .style("text-anchor", "middle")
      .style("font-size", "7pt")
      .style("fill", "#CBCBCA")
      .style("font-weight", "lighter")
      .text("긍정 / 부정 지수")
        .attr("opacity", 0)
  .transition()
  .delay(2700)
  .duration(2000)
  .attr("opacity", 1);



  // 가운데 기준선
  svg.append("line")
    .attr("x1", svgWidth / 2 + 70)
    .attr("y1", 0)
    .attr("x2", svgWidth / 2 + 70)
    .attr("y2", 0)
    .attr("opacity", 0.3)
    .attr("stroke-width", "1px")
    .attr("stroke", "#5B4A4C")
    .transition()
    .duration(1500)
    .attr("y2", svgHeight)
    .attr("opacity", 0.05);

  // X축
   var xScale = svg.append("g").attr("class", "xScale")
   .selectAll("xScale")
   .data(dataset);
   xScale.enter()
   .append("text")
    .attr("class", "scaleNum")
    .attr("x", function(d, i) {
        return i * 45 + 50 + margin.left;
    })
    .attr("y", margin.top + 70)
    .attr("opacity", 0)
    .transition()
    .duration(2000)
    .attr("opacity", 1)
    .text(function(d, i) {
        var i = Math.floor(i * 5);
        return i;
    });


  var fiveScale = svg.append("g").attr("class", "fiveScale")
  .selectAll("fiveScale")
  .data(dataset);
  fiveScale.enter()
.append("rect")
      .attr("width", 180)
      .attr("height", legendHeight)
      .style("fill", "#EEEEEE")
      .attr("rx", legendHeight / 2)
      .attr("ry", legendHeight / 2)
      .attr("x", function(d, i) {
          if (i < 6) {
          return margin.left + 45 + (182 * i);
        } else { return null; }
      })
      .attr("y", margin.top + 31)
  .attr("opacity", 0)
  .transition()
  .delay(1600)
  .duration(2000)
  .attr("opacity", function(d, i) {
          if (i < 5) { return 0.3; } else { return 0; }
      });

    svg.append("text")
      .attr("class", "scaleNum")
      .attr("x", margin.left + 140)
      .attr("y", margin.top + 43)
      .text("부정")
      .attr("opacity", 0)
      .transition()
      .delay(1600)
      .duration(2000)
      .attr("opacity", 1);

    svg.append("text")
      .attr("class", "scaleNum")
      .attr("x", margin.left + 320)
      .attr("y", margin.top + 43)
      .text("반부정")
      .attr("opacity", 0)
      .transition()
      .delay(1600)
      .duration(2000)
      .attr("opacity", 1);


    svg.append("text")
      .attr("class", "scaleNum")
      .attr("x", margin.left + 500)
      .attr("y", margin.top + 43)
      .text("중립")
      .attr("opacity", 0)
      .transition()
      .delay(1600)
      .duration(2000)
      .attr("opacity", 1);


    svg.append("text")
      .attr("class", "scaleNum")
      .attr("x", margin.left + 680)
      .attr("y", margin.top + 43)
      .text("반긍정")
      .attr("opacity", 0)
      .transition()
      .delay(1600)
      .duration(2000)
      .attr("opacity", 1);


    svg.append("text")
      .attr("class", "scaleNum")
      .attr("x", margin.left + 860)
      .attr("y", margin.top + 43)
      .text("긍정")
      .attr("opacity", 0)
      .transition()
      .delay(1600)
      .duration(2000)
      .attr("opacity", 1);



  // xAxis grid
  var xAxis = svg
    .selectAll("xAxis")
    .data(dataset);
  xAxis.enter()
    .append("line")
    .attr("opacity", 0.04)
    .attr("x1", function(d, i) {
        if (i < 11) {
          return i * 90 + 50 + margin.left;
        } else { return -50;}
      })
    .attr("x2", function(d, i) {
        if (i < 11) {
          return i * 90 + 50 + margin.left;
        } else { return -50;}
      })
    .attr("y1", 80)
    .attr("y2", 80)
    .attr("stroke-width", "0.7px")
    .attr("stroke", "#5B4A4C")
    .attr("stroke-dasharray", "2 2")
    .transition()
    .delay(550)
    .duration(1300)
    .attr("y2", svgHeight);
  // 국가별 구분 점선
  svg.append("line")
    .attr("x1", 0)
    .attr("y1", order * 120 + 120)
    .attr("x2", 0)
    .transition()
    .duration(1800)
    .attr("x2", svgWidth)
    .attr("y2", order * 120 + 120)
    .attr("stroke-width", "1px")
    .attr("stroke", "#5B4A4C")
    .attr("opacity", 0.6)
    .attr("stroke-dasharray", "5 3");

  // 국가명 텍스트, 박스
  svg.append("rect")
    .transition()
    .delay(300)
    .attr("class", "location_box")
    .attr("width", 44.5)
    .attr("height", 16)
    .attr("x", margin.left - 130)
    .attr("y", order * 120 + 117);

  svg.append("text")
    .attr("class", "location")
    .attr("opacity", 0)
    .transition()
    .duration(1500)
    .attr("opacity", 1)
    .attr("x", margin.left - 108)
    .attr("y", order * 120 + 127)
    .text(key);

  // 원 그리기
  circleElements = svg
    .selectAll("circle." + 'my' + order)
    .data(dataset);
  circleElements.enter()
    .append("circle")
    .attr("class", "mark " + 'my' + order)
    .attr("cx", function(d, i) {
      return i * 45 + 50 + margin.left;
    })
    .attr("cy", function() {
      return order * 120 + 120
    })
    .attr("opacity", 0.7)
    .attr("r", 0)
    .style("fill", function(d, i) {
      var i = Math.floor(i * 5 / 4.8);
      return color[i];
    })
    .transition()
    .delay(1000)
    .duration(function(d) {
      return d * 6;
    })
    .ease("elastic")
    .attr("r", function(d, i) {
      return d / 2;
    });


  // 원 안에 단어 표시
  var circleName = d3.select(".greena")
    .append("div")
    .attr("class", "cName");

  circleElements
    .on("mouseover", function(d, i) {
      var x = parseInt(i * 5);
      circleName
      .transition()
      .duration(200)
      .style("left", x * 9 + 26 + margin.left + "px")
      .style("top", (order * 120 + 113) + "px")
      .style("opacity", 1)
      .text(d+"개");
    })
    .on("mouseout", function(){
      circleName
      .transition()
      .duration(1000)
      .style("opacity", 0);
    });


}

d3.json("get_data_pos_gbp", function(error, dataset) {
  var order = 0
  nation_order = dataset.order
  for (var i = 0; i < nation_order.length; i++) {
    makeChart(svg, dataset[nation_order[i]], order, nation_order[i])
    order++;
  }
});

})();
