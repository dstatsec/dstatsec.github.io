$(function(e) {

	//______Data-Table
	$('#data-table').DataTable({
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
		}
	});
	
	//______Select2 
	$('.select2').select2({
		minimumResultsForSearch: Infinity
	});
	
 });

 function chartArea(){
	 
	/*-----echart1-----*/
	var options = {
		chart: {
			height: 320,
			type: "line",
			stacked: false,
			toolbar: {
				show: true,
				tools: {
					download: true,
					selection: false,
					zoom: false,
					zoomin: true,
					zoomout: true,
					pan: false,
					reset: true | '<img src="/static/icons/reset.png" width="20">'
				  },
			},
			dropShadow: {
				enabled: true,
				opacity: 0.1,
			},
		},
		colors: [myVarVal, "#f99433", 'rgba(119, 119, 142, 0.05)'],
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: "smooth",
			width: [3, 3, 0],
			dashArray: [0, 4],
			lineCap: "round"
		},
		grid: {
			padding: {
				left: 0,
				right: 0
			},
			strokeDashArray: 3
		},
		markers: {
			size: 0,
			hover: {
				size: 0
			}
		},
		series: [{
			name: "Total Orders",
			type: 'line',
			data: [0, 45, 30, 75, 15, 94, 40, 115, 30, 105, 65, 110]
			
		},{
			name: "Total Sales",
			type: 'line',
			data: [0, 60, 20, 130, 75, 130, 75, 140, 64, 130, 85, 120]
		}, {
			name: "",
			type: 'area',
			data: [0, 105, 70, 175, 85, 154, 90, 185, 120, 145, 185, 130]
		}],
		xaxis: {
			type: "month",
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			axisBorder: {
				show: false,
				color: 'rgba(119, 119, 142, 0.08)',
			},
			labels: {
				style: {
					color: '#8492a6',
					fontSize: '12px',
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					color: '#8492a6',
					fontSize: '12px',
				},
			},
			axisBorder: {
				show: false,
				color: 'rgba(119, 119, 142, 0.08)',
			},
		},
		fill: {
			gradient: {
			  inverseColors: false,
			  shade: 'light',
			  type: "vertical",
			  opacityFrom: 0.85,
			  opacityTo: 0.55,
			  stops: [0, 100, 100, 100]
			}
		  },
		tooltip: {
			show:false
		},
		legend: {
			position: "top",
			show:true
		}
	}
	document.querySelector("#chartArea").innerHTML = "";
	var chart = new ApexCharts(document.querySelector("#chartArea"), options);
	chart.render();
 }

 function recentOrders(){
	var options = {
		chart: {
		height: 305,
		type: 'radialBar',
		responsive:'true',
		offsetX: 0,
		offsetY: 10,
	},
	plotOptions: {
	    radialBar: {
		startAngle: -135,
		endAngle: 135,
		size: 120,
		imageWidth: 50,
        imageHeight: 50,
		track: {	
			strokeWidth: "80%",	
		},
		dropShadow: {
			enabled: false,
			top: 0,
			left: 0,
			bottom: 0,
			blur: 3,
			opacity: 0.5
		},
		dataLabels: {
		  name: {
			fontSize: '16px',
			color: undefined,
			offsetY: 30,
		  },
		  hollow: {	
			 size: "60%"	
			},
		  value: {
			offsetY: -10,
			fontSize: '22px',
			color: undefined,
			formatter: function (val) {
			  return val + "%";
			}
		  }
		}
	  }
	},
	colors: ['#ff5d9e'],
	fill: {
		type: "gradient",
		gradient: {
			shade: "gradient",
			type: "horizontal",
			shadeIntensity: .5,
			gradientToColors: [myVarVal],
			inverseColors: !0,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100]
		}
	},
	stroke: {
		dashArray: 4
	},
	series: [83],	
		labels: [""]
	};
	
	document.querySelector("#recentorders").innerHTML = "";
	var chart = new ApexCharts(document.querySelector("#recentorders"), options);
	chart.render();
 }
 
 