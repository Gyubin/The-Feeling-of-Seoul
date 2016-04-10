//넓이와 폭 설정
var w = 550;
var h = 500;

//원본 데이터셋 설정
d3.json("get_data_force_war_memorial", function(error, dataset) {

    //포스 레이아웃 설정. 데이터셋에 있는 노드와 에지를 사용하여 기본 포스 레이아웃을 초기화
    var force = d3.layout.force()
            .nodes(dataset.nodes)           //노드 설정
            .links(dataset.edges)           //링크 선을 지정
            .size([w, h])                   //표시 영역의 크기를 지정
            .linkDistance([120])             //거리 지정
            .charge([-130])                 //반발력 지정
            .start();                       //force.start()를 호출해 계산을 수행

    var colors = d3.scale.category20();

    //SVG 요소를 생성
    var svg = d3.select("svg")              //SVG 영역 생성
                .attr("width", w)
                .attr("height", h);

    //line을 이용하여 에지를 생성
    var edges = svg.selectAll("line")       //선 생성
        .data(dataset.edges)                //edges 배열을 데이터셋으로 지정
        .enter()
        .append("line")                     //선 추가
        .style("stroke", "#ccc")            //선의 스타일 지정
        .style("stroke-width", 1)
        .attr('opacity', 0.3);

    //circle을 이용하여 노드를 생성
    var nodes = svg.selectAll("circle")     //원 생성
        .data(dataset.nodes)                //nodes 배열을 데이터셋으로 지정
        .enter()
        .append("circle")                   //원 추가

    nodes.attr("r", 15)                      //반지름 설정
        .style("fill", function(d, i) {     //원 색상 설정
            return colors(i);
        })
        .attr('opacity', 0.3)
        .call(force.drag);                  //노드를 드래그할 수 있도록 함

    //다gbpck이벤트가 발생할 때)마다 함수를 호출하여 새로운 좌표값으로 노드와 에지를 그
    force.on("tick", function() {
        //에지의 소스와 타겟 요소의 좌표를 지정
        edges.attr("x1", function(d) { return d.source.x; })
             .attr("y1", function(d) { return d.source.y; })
             .attr("x2", function(d) { return d.target.x; })
             .attr("y2", function(d) { return d.target.y; });
        //노드의 좌표를 지정
        nodes.attr("cx", function(d) { return d.x; })
             .attr("cy", function(d) { return d.y; });

    });

    // source 찾아서 효과 주기
    function turnOn(sources) {
        svg.selectAll('circle')
        .filter(function(d) {
            for (var i = 0; i < sources.length; i++) {
                if(d.name === sources[i]) {
                    return true;
                }
            }
            return false;
        })
        .attr('opacity', 1)
    }
    // 유니크한 array 만들기
    Array.prototype.getUnique = function(){
       var u = {}, a = [];
       for(var i = 0, l = this.length; i < l; ++i){
          if(u.hasOwnProperty(this[i])) {
             continue;
          }
          a.push(this[i]);
          u[this[i]] = 1;
       }
       return a;
    }

    // 설명을 적을 div 만들기
    var div = d3.select('.gyubin')
    d3.select('.center-node').text('(노드에 마우스를 올려보세요)')
    d3.select('.around-node').text('(노드에 마우스를 올려보세요)')
    d3.select('.meaning').text('(노드에 마우스를 올려보세요)')

    // 마우스 오버 이벤트 만들기
    nodes.on('mouseover', function(d, i) {
        d3.select('.center-node').text(d.name)   // div에 노드 이름 쓰기
        d3.select(this).attr('opacity', 1)  // 불투명도 1
        .attr('r', 30);

        var sources = [];
        for (var j = 0; j < dataset.edges.length; j++) {
            if (dataset.edges[j].target.index === i) {
                source_index = dataset.edges[j].source.index
                sources.push(dataset.nodes[source_index].name);
            }
        }
        if (sources.length > 0) {
            d3.select('.around-node').text(sources.getUnique().join(' , '));
        } else {
            d3.select('.around-node').text('주변 노드가 없습니다.')
        }
        turnOn(sources);
        d3.select('.meaning').text(d.meaning);
    }).on('mouseout', function(d) {
        d3.select('.center-node').text('(노드에 마우스를 올려보세요)');
        d3.select('.around-node').text('(노드에 마우스를 올려보세요)');
        d3.select('.meaning').text('(노드에 마우스를 올려보세요)')
        nodes.attr('opacity', 0.3)   // 다시 투명하게
        .attr('r', 15);
        edges.attr('opacity', 0.3);     // 노드 투명도도 다시.
    });

});
