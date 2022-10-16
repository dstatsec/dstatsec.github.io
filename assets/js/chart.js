$(function() {

	/*LIne-Chart */
	var ctx = document.getElementById("chartLine").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"],
			datasets: [{
				label: 'Profits',
				data: [100, 420, 210, 420, 210, 320, 350],
				borderWidth: 2,
				backgroundColor: 'transparent',
				borderColor: '#6259ca',
				borderWidth: 3,
				pointBackgroundColor: '#ffffff',
				pointRadius: 2,
				lineTension: 0.3
			}, {
				label: 'Expenses',
				data: [450, 200, 350, 250, 480, 200, 400],
				borderWidth: 2,
				backgroundColor: 'transparent',
				borderColor: '#eb6f33',
				borderWidth: 3,
				pointBackgroundColor: '#ffffff',
				pointRadius: 2,
				lineTension: 0.3
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,

			scales: {
				x: {
					ticks: {
						color: "#77778e",
					 },
					display: true,
					grid: {
						color: 'rgba(119, 119, 142, 0.2)'
					}
				},
				y: {
					ticks: {
						color: "#77778e",
					 },
					display: true,
					grid: {
						color: 'rgba(119, 119, 142, 0.2)'
					},
					scaleLabel: {
						display: false,
						labelString: 'Thousands',
						color: 'rgba(119, 119, 142, 0.2)'
					}
				}
			},
			plugins: {
				legend: {
					labels: {
						color: "#77778e"
					},
				},
			}
		}
	});

	/* Bar-Chart1 */
	var ctx = document.getElementById("chartBar1").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
			datasets: [{
				label: 'Sales',
				data: [200, 450, 290, 367, 256, 543, 345, 290, 367],
				borderWidth: 2,
				backgroundColor: '#6259ca',
				borderColor: '#6259ca',
				borderWidth: 2.0,
				pointBackgroundColor: '#ffffff',

			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: true
			},
			scales: {
				y: {
					ticks: {
						beginAtZero: true,
						stepSize: 150,
						color: "#77778e",
					},
					grid: {
						color: 'rgba(119, 119, 142, 0.2)'
					}
				},
				x: {
					ticks: {
						display: true,
						color: "#77778e",
					},
					grid: {
						display: false,
						color: 'rgba(119, 119, 142, 0.2)'
					}
				}
			},
			plugins: {
				legend: {
					labels: {
						color: "#77778e"
					},
				},
			}
		}
	});

	/* Bar-Chart2*/
	var ctx = document.getElementById("chartBar2");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			datasets: [{
				label: "Data1",
				data: [65, 59, 80, 81, 56, 55, 40],
				borderColor: "#6259ca",
				borderWidth: "0",
				backgroundColor: "#6259ca"
			}, {
				label: "Data2",
				data: [28, 48, 40, 19, 86, 27, 90],
				borderColor: "#eb6f33",
				borderWidth: "0",
				backgroundColor: "#eb6f33"
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				x: {
					ticks: {
						color: "#77778e",
					 },
					grid: {
						color: 'rgba(119, 119, 142, 0.2)'
					}
				},
				y: {
					ticks: {
						beginAtZero: true,
						color: "#77778e",
					},
					grid: {
						color: 'rgba(119, 119, 142, 0.2)'
					},
				}
			},
			plugins: {
				legend: {
					labels: {
						color: "#77778e"
					},
				},
			}
		}
	});

	/* Area Chart*/
	var ctx = document.getElementById("chartArea1");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			datasets: [{
				label: "Data2",
				borderColor: "rgba(235, 111, 51 ,0.9)",
				borderWidth: "3",
				backgroundColor: "rgba(	235, 111, 51, 0.7)",
				pointHighlightStroke: "rgba(235, 111, 51 ,1)",
				data: [16, 32, 18, 26, 42, 33, 44],
				lineTension: 0.3,
				fill: true
			}, {
				label: "Data1",
				borderColor: "#6259ca",
				borderWidth: "3",
				backgroundColor: "#5e2dd81a",
				fill: true,
				lineTension: 0.3,
				data: [22, 44, 67, 43, 76, 45, 12]
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				intersect: false
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				x: {
					ticks: {
						color: "#77778e",
					 },
					grid: {
						color: 'rgba(119, 119, 142, 0.2)'
					}
				},
				y: {
					ticks: {
						beginAtZero: true,
						color: "#77778e",
					},
					grid: {
						color: 'rgba(119, 119, 142, 0.2)'
					},
				}
			},
			plugins: {
				legend: {
					labels: {
						color: "#77778e"
					},
				},
			}
		}
	});

	/* Pie Chart*/
	var datapie = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
		datasets: [{
			data: [20, 20, 30, 5, 25],
			backgroundColor: ['#6259ca', '#eb6f33', '#ec546c', '#0774f8', '#9857CD']
		}]
	};
	var optionpie = {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: {
				display: false
			},
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	};

	/* Doughbut Chart*/
	var ctx6 = document.getElementById('chartPie');
	var myPieChart6 = new Chart(ctx6, {
		type: 'doughnut',
		data: datapie,
		options: optionpie
	});

	/* Pie Chart*/
	var ctx7 = document.getElementById('chartDonut');
	var myPieChart7 = new Chart(ctx7, {
		type: 'pie',
		data: datapie,
		options: optionpie
	});

	/* Radar chart*/
	var ctx = document.getElementById("chartRadar");
	var myChart = new Chart(ctx, {
		type: 'radar',
		data: {
			labels: [

				["Eating", "Dinner"],
				["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running",

			],
			datasets: [{

				label: "Data1",
				data: [65, 59, 66, 45, 56, 55, 40],
				borderColor: "rgba(113, 76, 190, 0.9)",
				borderWidth: "1",
				backgroundColor: "rgba(113, 76, 190, 0.5)"
			}, {
				label: "Data2",
				data: [28, 12, 40, 19, 63, 27, 87],
				borderColor: "rgba(235, 111, 51,0.8)",
				borderWidth: "1",
				backgroundColor: "rgba(235, 111, 51,0.4)"
			}]
		}, 
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
				r: {
					angleLines: { color: '#77778e' },
					grid: {
						color: 'rgba(119, 119, 142, 0.2)'
					},
					ticks: {
						beginAtZero: true,
					},
					pointLabels: {
						color:'#77778e',
					},
				}
			},

		}
	});

	/* polar chart */
	var ctx = document.getElementById("chartPolar");
	var myChart = new Chart(ctx, {
		type: 'polarArea',
		data: {
			datasets: [{
				data: [18, 15, 9, 6, 19],
				backgroundColor: ['#6259ca', '#9959CA', '#ec546c', '#0774f8', '#CA59C0'],
				hoverBackgroundColor: ['#6259ca', '#9959CA', '#09ad95', '#0774f8', '#CA59C0'],
				borderColor:'transparent',
			}],
			labels: ["Data1", "Data2", "Data3", "Data4"]
		},
		options: {
			scales: {
				r: {
					grid: {
							color: 'rgba(119, 119, 142, 0.2)'
					}
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					labels: {
						color: "#77778e"
					},
				},
			}
		}
	});

});