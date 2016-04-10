var width = window.innerWidth,
    height = window.innerHeight,
    radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
  .range(["#C5D86D", "#FC3647", "#4D4482", "#1B998B", "#FF9914"]);


document.querySelector("#container svg").setAttribute("viewBox", "0 0 " + window.innerWidth + " " + window.innerHeight);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return " <span style='color:white> <pre style='white-space:pre-line'>" + d.name + "</span>" +
          " <span style='color:white> <pre style='white-space:pre-line'>" +  d.content + "</span>"
  });

var y = d3.scale.linear()
    .range([0, radius]);

var svg = d3.select("#container svg")
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height * .52 + ")");

svg.call(tip);

var partition = d3.layout.partition()
    .sort(null)
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });




// data
d3.json("get_data_weighted_relation_war", function(error, root) {

  var path = svg.datum(root).selectAll(".path")
    .data(partition.nodes)
    .enter()
    .append("g")
    .attr("class", "path");

  path.append("path")
      .attr("display", function(d) { return d.depth ? null : "none"; }) // hide inner ring
      .attr("d", arc)
      .style("stroke", "#fff")
      .style("fill", function(d) { return color((d.children ? d : d.parent).name); })
      .style("fill-rule", "evenodd")
      .style("color", 'black')
      .each(stash)
      .on("mouseover", function(d) {
        tip.show(d);

        var tooltip = document.querySelector("div.d3-tip");

        tooltip.style.top = "calc(51% - " + Number(window.getComputedStyle(tooltip).height.replace("px", "")) / 2 + "px)";
        tooltip.style.left = "calc(50% - " + Number(window.getComputedStyle(tooltip).width.replace("px", "")) / 2 + "px)";
//        document.querySelector("div.d3-tip").style.left = "calc(50%)";

        d3.selectAll("path")
          .attr('class', 'selected')
          var current = this;
          var others = svg.selectAll(".arc").filter(function(el) {
              return this != current
          });
          others.selectAll("path").style('opacity', 0.8);

      })
      .on("mouseout", function(d) {
        tip.hide;
        d3.selectAll("path")
        .attr('class', '')
        var current = this;
        var others = svg.selectAll(".arc").filter(function(el) {
            return this != current
        });
        others.selectAll("path").style('opacity', 1);
      });

    path.append("text")
        .attr("x", function(d) { return d.x; })
        .attr("dy", ".35em") // vertical-align
        .attr("transform", function(d) {
            if (d.depth > 0) {
                return "translate(" + arc.centroid(d) + ")";
            }  else {
                return null;
            }
        })
        .attr("text-anchor", "middle")
        .text(function(d) { return d.name; });

function getAngle(d) {
    // Offset the angle by 90 deg since the '0' degree axis for arc is Y axis, while
    // for text it is the X axis.
    var thetaDeg = (180 / Math.PI * (arc.startAngle()(d) + arc.endAngle()(d)) / 2 - 90);
    // If we are rotating the text by more than 90 deg, then "flip" it.
    // This is why "text-anchor", "middle" is important, otherwise, this "flip" would
    // a little harder.
    return (thetaDeg > 90) ? thetaDeg - 180 : thetaDeg;
}




  d3.selectAll("input").on("change", function change() {
    var value = this.value === "count"
        ? function() { return 1; }
        : function(d) { return d.size; };

    path
        .data(partition.value(value).nodes)
      .transition()
        .duration(1500)
        .attrTween("d", arcTween);
  });
});


// Stash the old values for transition.
function stash(d) {
  d.x0 = d.x;
  d.dx0 = d.dx;
}

// Interpolate the arcs in data space.
function arcTween(a) {
  var i = d3.interpolate({x: a.x0, dx: a.dx0}, a);
  return function(t) {
    var b = i(t);
    a.x0 = b.x;
    a.dx0 = b.dx;
    return arc(b);
  };
}

d3.select(self.frameElement).style("height", height + "px");




