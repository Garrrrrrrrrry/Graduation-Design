window.onload = function () {
	// 获取左边大图的元素
	let b = document.querySelector(".b")
	// 获取右边小图的所有元素
	let d = document.getElementsByClassName("d")
	
	let time
	let index = 0
	
	// 设置一个重置函数
	let a = function() {
		for (let i = 0; i < d.length; i++) {
			d[i].className = "d"
		}
	}
	// 设置一个选中函数
	let aa = function() {
		// 先代入重置函数
		a()
		d[index].className = "d dd"
	}
	// 设置启动轮播图的时间函数
	function ts() {
		time = setInterval(function() {
			aa()
			index++
			b.style.backgroundImage = "url('./images/banner" + [index] + ".jpg')"
			if (index == 5) {
				index = 0
			}
		}, 1500);
	}
	for (let i = 0; i < d.length; i++) {
		// 鼠标移动到当前小图片上时触发
		d[i].onmousemove = function() {
			// 鼠标移动到当前小图片时右边大图片变成当前的小图片
			b.style.backgroundImage = "url('./images/banner" + [index] + ".jpg')"
			// 鼠标移动到小图片上面时关闭定时器并重置定时，
			// 鼠标移开后再继续执行
			a()
			clearInterval(time)
			index = i + 1
			ts()
		}
	}
	// 执行轮播图
	ts()


		// 条状图
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echarts'));
		
		// 指定图表的配置项和数据
		var option = {
			title: {
				text: '养宠人群的受教育程度（百分制）',
				left: 'center'
			},
			tooltip: {},
			legend: {
				data: ['学历'],
				left: 'left'
			},
			xAxis: {
				data: ['研究生及以上', '大学本科', '大专', '大专以下']
			},
			yAxis: [
			                    {  
			                        type: 'value',  
			                        axisLabel: {  
			                        formatter: '{value} %'  
			                            },  
			                    }  
			                ],
			series: [{
				name: '受教育程度',
				type: 'bar',
				data: ['8','39','32','21'],
			}]
		};
		
		// 使用刚指定的配置项和数据显示图表。??
		myChart.setOption(option);
		
		// 饼图
		// import * as echarts from 'echarts';
		
		var chartDom = document.getElementById('echarts1');
		var myChart = echarts.init(chartDom);
		var option;
		
		option = {
		  title: {
		    text: '当前中国宠物主市场调研数据分析',
		    subtext: '2015年 Data',
		    left: 'center'
		  },
		  tooltip: {
		    trigger: 'item'
		  },
		  legend: {
		    orient: 'vertical',
		    left: 'left'
		  },
		  series: [
		    {
		      name: '宠物类型',
		      type: 'pie',
		      radius: '50%',
		      data: [
		        { value: 6174, name: '狗' },
		        { value: 1913, name: '猫' },
		        { value: 609, name: '龟' },
		        { value: 348, name: '水族类' },
		        { value: 347, name: '兔子' },
		        { value: 261, name: '鸟类' },
		        { value: 174, name: '鼠类' },
		        { value: 174, name: '其他' }
		      ],
		      emphasis: {
		        itemStyle: {
		          shadowBlur: 10,
		          shadowOffsetX: 0,
		          shadowColor: 'rgba(0, 0, 0, 0.5)'
		        }
		      }
		    }
		  ]
		};
		
		option && myChart.setOption(option);

		// 折线图
		var chartDom = document.getElementById('echarts2');
		var myChart = echarts.init(chartDom);
		var option;
		
		option = {
			title: {
			  text: '当前中国宠物主市场调研数据分析',
			  left: 'center'
			},
		  xAxis: {
		    type: 'category',
		    data: ['25岁以下', '25-30岁', '31-35岁', '36-45岁', '45岁以上']
		  },
		  yAxis: [
		    {
		      type: 'value',
		      axisLabel: {
		        formatter: '{value} %'
		      }
		    }
		  ],
		  series: [
		    {
		      data: [
		        { value: 13,},
		        { value: 37,},
		        { value: 24,},
		        { value: 18,},
		        { value: 8,}
		      ],
		      type: 'line'
		    }
		  ]
		};
		
		option && myChart.setOption(option);
		
		//横条状图
		var chartDom = document.getElementById('echarts3');
		var myChart = echarts.init(chartDom);
		var option;
		
		option = {
		  title: {
			  text: '中国养宠家庭年度消费金额',
			  left: 'center'
			},
		  yAxis: {
		    type: 'category',
		    data: [
		      '1000元以下',
		      '1000-3000元',
		      '3000-5000元',
		      '5000-10000元',
		      '10000元以上'
		    ]
		  },
		  xAxis: [
		    {
		      type: 'value',
		      axisLabel: {
		        formatter: '{value} %'
		      }
		    }
		  ],
		  series: [
		    {
		      name: '受教育程度',
		      type: 'bar',
		      data: ['9', '32', '19', '29', '11']
		    }
		  ]
		};
		
		option && myChart.setOption(option);
}
