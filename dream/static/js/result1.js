var w = 500;
var h = 500;

var dataset = {
    nodes: [
            { name: "A" },			//0번
			{ name: "B" },			//1번
			{ name: "C" },			//2번
			{ name: "D" },		    //3번
			{ name: "E" },			//4번
			{ name: "F" },		    //5번
			{ name: "G" },			//6번
			{ name: "H" },			//7번
			{ name: "I" },			//8번
			{ name: "J" },			//9번
			{ name: "K" },			//10번
			{ name: "L" },			//11번
			{ name: "M" },			//12번
			{ name: "N" },			//13번
			{ name: "O" },			//14번
			{ name: "P" },			//15번
			{ name: "Q" },			//16번
			{ name: "R" },			//17번
			{ name: "S" },			//18번
			{ name: "T" },			//19번
			{ name: "U" },			//20번
			{ name: "V" },			//21번
			{ name: "W" },			//22번
			{ name: "X" }			//23번
	],
		
    edges: [						
			{ source: 1, target: 0 },
			{ source: 2, target: 0 },
			{ source: 3, target: 0 },
			{ source: 4, target: 0 },
			{ source: 5, target: 0 },
			{ source: 7, target: 6 },
			{ source: 8, target: 6 },
			{ source: 9, target: 6 },
			{ source: 10, target: 6 },
			{ source: 11, target: 6 },
			{ source: 13, target: 12 },
			{ source: 14, target: 12 },
			{ source: 15, target: 12 },
			{ source: 16, target: 12 },
			{ source: 17, target: 12 },
			{ source: 19, target: 18 },
			{ source: 20, target: 18 },
			{ source: 21, target: 18 },
			{ source: 22, target: 18 },
			{ source: 23, target: 18 }
	]
};

var force = d3.layout.force()
			.nodes(dataset.nodes)			//노드 설정
			.links(dataset.edges)			//링크 선을 지정
			.size([w, h])					//표시 영역의 크기를 지정
			.linkDistance([50])				//거리 지정
			.charge([-100])					//반발력 지정
			.friction(0.5)
			.start();						//force.start()를 호출해 계산을 수행

var colors = d3.scale.category10();

//SVG 요소를 생성
var svg = d3.select("body")				
	.append("svg")				//SVG 영역 생성(어떻게 생긴 도형을 사용할 것인가)
	.attr("width", w)
	.attr("height", h);
	
//line을 이용하여 에지를 생성
var edges = svg.selectAll("line")		//선 생성
	.data(dataset.edges)				//edges 배열을 데이터셋으로 지정
	.enter()
	.append("line")						//선 추가
	.style("stroke", "#ccc")			//선의 스타일 지정
	.style("stroke-width", 1);
	
//circle을 이용하여 노드를 생성
var nodes = svg.selectAll("circle")		//원 생성
	.data(dataset.nodes)				//nodes 배열을 데이터셋으로 지정
	.enter()
	.append("circle")					//원 추가
	.attr("r", 10)						//반지름 설정
	.style("fill", function(d, i) {		//원 색상 설정, // d : data, i : color10에서 하나씩 순차적으로 불러옴
		return colors(i);
	})
// 			.call(force.drag);					//노드를 드래그할 수 있도록 함
	
//다시 그릴 때(tick이벤트가 발생할 때)마다 함수를 호출하여 새로운 좌표값으로 노드와 에지를 그림. //tick은 위치값을 새로 계산함 (drag할때마다 변해서 새로운 노드가 생성됨  )	
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
