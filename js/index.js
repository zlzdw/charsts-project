$(function () {
    (function () {
        $('.tabs').on('click', 'a', function () {
            // console.log($(this).index());
            $(this).addClass('active').siblings('a').removeClass('active');
            $('.content').eq($(this).index()).show().siblings('.content').hide()
        });
    })();
    // 点位分布统计可视化
    (function () {
        var mychart = echarts.init(document.querySelector('.pie'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '点位统计',
                    type: 'pie',
                    radius: ['10%', 60], // 修改内外圈大小 百分比要加引号
                    center: ['50%', '50%'], // 居中显示
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 5
                    },
                    data: [
                        { value: 20, name: '云南' },
                        { value: 28, name: '北京' },
                        { value: 24, name: '山东' },
                        { value: 25, name: '河北' },
                        { value: 20, name: '江苏' },
                        { value: 25, name: '浙江' },
                        { value: 30, name: '四川' },
                        { value: 43, name: '湖北' }
                    ],
                    // label 系列修改字号大小和连接线长度 注意是对象
                    label: {
                        fontSize: 10
                    },
                    labelLine: {
                        length: 4,
                        length2: 4
                    }
                }
            ],
            // color 修改图表各数据展示的颜色 注意是数组
            color: ['#006cff', "#60cda0", '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        };
        mychart.setOption(option)
    })();
    // 屏幕宽度发生变化，刷新页面
    window.addEventListener('resize', function () {
        this.location.reload();
        // mychart.resize()
    });


    // 用户数量统计可视化
    (() => {
        let myChart = echarts.init(document.querySelector('.bar'));
        // 柱状图特殊柱体
        let item = {
            name: '',
            value: 1200,
            // 修改当前柱子样式
            itemStyle: {
                color: "#254065"
            },
            // 去除鼠标经过柱子的高亮效果
            emphasis: {
                itemStyle: {
                    color: "#254065"
                }
            },
            // 鼠标经过不显示提示框组件
            tooltip: {
                extraCssText: 'opacity:0'
            }
        };
        var option = {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 1, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 0, color: '#83bff6' }
            ]),
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '0%',
                right: '3%',
                bottom: '3%',
                top: '3%',
                containLabel: true,
                show: true,
                borderColor: 'rgb(0,240,255,.3)' // 设置直角坐标系边框颜色
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                    // 刻度设置
                    axisTick: {
                        alignWithLabel: false,
                        show: false // 不显示 x 轴的刻度
                    },
                    // x坐标轴文字标签样式设置
                    axisLabel: {
                        color: '#3c9bfd'
                    },
                    // x 坐标轴这条线颜色设置
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0,240,255,.3)'
                            // width:2  x轴的粗细
                            // opcity:0 不显示x轴线
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        alignWithLabel: false,
                        show: false // 不显示 y 轴的刻度
                    },
                    // y坐标轴文字标签样式设置
                    axisLabel: {
                        color: '#3c9bfd'
                    },
                    // y 坐标轴这条线颜色设置
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0,240,255,.3)'
                            // width:2  y轴的粗细
                            // opcity:0 不显示y轴线
                        }
                    },
                    // y轴分割线（横线颜色样式
                    splitLine: {
                        lineStyle: {
                            color: "'rgba(0,240,255,.3)"
                        }
                    }
                }
            ],
            series: [
                {
                    name: '该地用户',
                    label: {
                        fontSize: 10
                    },
                    type: 'bar',
                    barWidth: '60%',

                    data: [2100,
                        1900,
                        1700,
                        1560,
                        1400,
                        // data 不仅可以传数值，还可以传对象
                        item,
                        item,
                        item,
                        900,
                        750,
                        600,
                        408,
                        240]
                }
            ]
        };
        myChart.setOption(option);
    })();


    // 销售模块 tab 切换
    var index;
    $('.filter').on('mouseenter', 'a', function () {
        $(this).addClass('active').siblings().removeClass('active');
        index = $(this).index();
        $('.inner').children('.data').eq(index).css('display', 'flex').siblings('.data').css('display', 'none')
    });
    // 销售模块可视化
    (function () {
        let myChart = echarts.init(document.querySelector('.line'));
        // 1).准备数据
        var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 26, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        var option = {
            // 设置线的颜色
            color: ['#00f2f1', '#ed3f25'],
            tooltip: {
                // 通过坐标轴来触发提示组件
                trigger: 'axis'
            },
            legend: {
                // series 里面设置了 name,此时图里组件的data可以省略
                // data: ['Email', 'Union Ads'],

                // 图例距离容器右侧 10% 
                right: '10%',
                // 修饰图例文字颜色
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            // 修改折线图大小
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                // 去除刻度
                axisTick: {
                    show: false
                },
                // 修饰刻度标签的文字颜色
                axisLabel: {
                    color: '#4c9bfd'
                },
                // 去除x坐标轴的颜色
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                // 去除刻度
                axisTick: {
                    show: false
                },
                // 修饰刻度标签的文字颜色
                axisLabel: {
                    color: '#4c9bfd'
                },
                // 修饰y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: '#012f4a'
                    }
                }
            },
            series: [
                {
                    name: '预期销售额',
                    type: 'line',
                    stack: 'Total',
                    // 是否让线条圆滑显示
                    smooth: true,
                    data: data.year[0]
                },
                {
                    name: '实际销售额',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    data: data.year[1]
                }
            ]
        };
        myChart.setOption(option);

        // 2) 点击切换效果
        $('.sales .caption').on('click', 'a', function () {
            // 把当前 a 的索引号与自动切换的索引号相对应
            index = $(this).index() - 2;

            $(this).addClass('a_active').siblings('a').removeClass('a_active');
            // 拿到当前 a 的自定义属性
            // console.log(this.dataset.type);
            // 根据拿到的属性 去找数据
            // console.log(data.year);
            // 由于拿到的属性是字符型，所以用下面的方式查找数据
            // console.log(data['year']);
            // console.log(data[this.dataset.type]);

            var arr = data[this.dataset.type];
            // 把拿到的数据重新渲染 series里面的 data 值
            option.series[0].data = arr[0];
            option.series[1].data = arr[1]
            // 记住一定要重新把配置好的数据给实例对象
            myChart.setOption(option)
        });
        // 3) tab 自动切换效果
        var as = $('.sales .caption a');
        var index = 0;
        var timer = setInterval(function () {
            index++;
            if (index >= 4) index = 0;
            as.eq(index).click()
        }, 3000);
        // 鼠标经过sales 停止自动切换 离开恢复自动切换
        $('.sales').hover(function () {
            clearInterval(timer)
        }, function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                if (index >= 4) index = 0;
                as.eq(index).click()
            }, 3000);
        })
    })();
    // 销售渠道 雷达图
    (function () {
        let myChart = echarts.init(document.querySelector('.rader'));
        // Schema:
        // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
        const dataBJ = [
            [90, 19, 56, 11, 34],
        ];
        const lineStyle = {
            width: 1,
            opacity: 0.5
        };
        var option = {
            tooltip: {
                // 显示提示框组件
                show: true,
                // 修改提示框组建的位置
                position: ['60%', '10%']
            },
            backgroundColor: '#161627',
            radar: {
                indicator: [
                    { name: '机场', max: 100 },
                    { name: '商场', max: 100 },
                    { name: '火车站', max: 100 },
                    { name: '汽车站', max: 100 },
                    { name: '地铁', max: 100 }
                ],
                // 修改雷达图大小
                radius: '65%',
                shape: 'circle',
                // 分割的圆圈个数
                splitNumber: 4,
                // 修饰雷达图文字颜色
                axisName: {
                    color: '#4c9dfd',
                    fontSize: 10
                },
                // 分割圆圈样式
                splitLine: {
                    lineStyle: {
                        // 这里颜色为渐变色，可改为单一颜色
                        color: [
                            'rgba(238, 197, 102, 0.1)',
                            'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)',
                            'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)',
                            'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                // 坐标轴的线修改为白色半透明
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: 'Beijing',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataBJ,
                    // 设置图形标记(拐点)
                    symbol: 'circle',
                    // 设置小圆点大小
                    symbolSize: 5,
                    // 设置小圆点颜色
                    itemStyle: {
                        color: '#fff'
                    },
                    // 让小圆点显示数据
                    label: {
                        show: true,
                        fontSize: 10,
                        color: '#fff'
                    },
                    // 修改区域填充的背景颜色
                    areaStyle: {
                        // opacity: 0.1
                        color: "rgb(238,197,102,.6)"
                    },
                    // 填充区域的线条颜色
                    lineStyle: {
                        normal: {
                            color: "#fff",
                            width: 1,
                            opacity: .5
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    })();
    // 销售模块 饼形图
    (function () {
        var myChart = echarts.init(document.querySelector('.gauge'));
        var option = {
            series: [
                {
                    name: '销售进度',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    labelLine: {
                        show: false
                    },
                    // 修改饼形图起始角度，默认90度
                    startAngle: 180,
                    // 放大图形
                    radius: ['130%', '150%'],
                    // 改变位置
                    center: ['48%', '80%'],
                    // 鼠标经过不需要放大图形
                    hoverOffset: 0,

                    data: [
                        {
                            value: 100, itemStyle: {
                                // 修改为渐变色
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{ offset: 0, color: '#00c9e0' }, { offset: 1, color: '#005fc1' }]
                                )
                            }
                        },
                        {
                            value: 100, itemStyle: {
                                color: '#12274d'
                            }
                        },
                        {
                            value: 200,
                            // 修改一半为透明色
                            itemStyle: {
                                color: 'transparent'
                            }
                        }
                    ]
                }
            ]
        };
        myChart.setOption(option)
    })();


    // 全国热榜模块
    // 1. 准备后台数据
    (() => {
        let hotData = [
            {
                city: '北京', // 城市
                sales: '25,179', // 销售额
                flag: true, // 上升还是下降
                brands: [
                    // 品牌种类数据
                    { name: '康帅博方便面', num: '9,088', flag: true },
                    { name: '维他奶', num: '8,341', flag: true },
                    { name: '双汇', num: '7,407', flag: false },
                    { name: '三养火鸡面', num: '6,080', flag: false },
                    { name: '好丽友', num: '6,724', flag: false },
                    { name: '熊氏老方', num: '2,170', flag: true },
                ]
            },
            {
                city: '河北', // 城市
                sales: '23,252', // 销售额
                flag: false, // 上升还是下降
                brands: [
                    // 品牌种类数据
                    { name: '康帅博方便面', num: '8,457', flag: false },
                    { name: '维他奶', num: '2,124', flag: true },
                    { name: '双汇', num: '8,907', flag: false },
                    { name: '三养火鸡面', num: '6,080', flag: true },
                    { name: '好丽友', num: '1,724', flag: false },
                    { name: '熊氏老方', num: '1,170', flag: false },
                ]
            },
            {
                city: '上海', // 城市
                sales: '28,760', // 销售额
                flag: true, // 上升还是下降
                brands: [
                    // 品牌种类数据
                    { name: '康帅博方便面', num: '8,345', flag: true },
                    { name: '维他奶', num: '7,109', flag: true },
                    { name: '双汇', num: '3,710', flag: false },
                    { name: '三养火鸡面', num: '6,080', flag: false },
                    { name: '好丽友', num: '2,724', flag: false },
                    { name: '熊氏老方', num: '2,998', flag: true },
                ]
            },
            {
                city: '江苏', // 城市
                sales: '23,252', // 销售额
                flag: true, // 上升还是下降
                brands: [
                    // 品牌种类数据
                    { name: '康帅博方便面', num: '2,156', flag: false },
                    { name: '维他奶', num: '2,456', flag: true },
                    { name: '双汇', num: '9,737', flag: true },
                    { name: '三养火鸡面', num: '2,080', flag: true },
                    { name: '好丽友', num: '8,724', flag: true },
                    { name: '熊氏老方', num: '1,170', flag: false },
                ]
            },
            {
                city: '山东', // 城市
                sales: '20,760', // 销售额
                flag: true, // 上升还是下降
                brands: [
                    // 品牌种类数据
                    { name: '康帅博方便面', num: '9,567', flag: true },
                    { name: '维他奶', num: '2,345', flag: true },
                    { name: '双汇', num: '9,037', flag: false },
                    { name: '三养火鸡面', num: '1,080', flag: false },
                    { name: '好丽友', num: '4,724', flag: false },
                    { name: '熊氏老方', num: '9,999', flag: true },
                ]
            },
        ];
        // 2. 根据数据渲染各省热销 sup 模块内容
        // (1) 遍历 hotData 
        var supHTML = '';
        $.each(hotData, function (index, item) {
            // console.log(item);
            supHTML += `<li>${item.city}<span>${item.sales}<i class="iconfont ${item.flag ? "icon-xiangshang1" : 'icon-xiangxia1'}" style="color: ${item.flag ? "#4fbc9d" : '#d04239'}"></i></span></li>`;
        });
        // 给第一个添加默认的鼠标经过事件
        $('.sup').html(supHTML).children('li').eq(0).addClass('li_active');

        // 3. 鼠标经过当前 li 高亮显示
        $('.sup').on('mouseenter', 'li', function () {
            index = $(this).index(); // 把当前鼠标经过的 li 索引号给定时器的index
            render($(this))
        });
        // 封装一个函数用于渲染sup 当前 li 高亮还有对应的品牌对象
        function render(currentEle) {
            currentEle.addClass('li_active').siblings().removeClass('li_active');

            // 根据当前经过的 li 索引号, 可以找到 hotData 里面对应的城市数据
            // console.log(hotData[$(this).index()].brands);

            // 遍历对应城市的品牌数组
            var subHTML = '';
            $.each(hotData[currentEle.index()].brands, function (index, item) {
                // console.log(item);
                subHTML += `<li>${item.name}<span>${item.num}<i class="iconfont ${item.flag ? 'icon-xiangshang1' : 'icon-xiangxia1'}" style="color: ${item.flag ? "#4fbc9d" : '#d04239'};"></i></span></li>`;
            });
            // 把数据渲染到页面
            $('.sub').html(subHTML)
        }
        // 4. 默认第一个 li 处于鼠标经过状态
        $('.province .sup li:first').mouseenter();
        // 5. 开启定时器
        var index = 0;
        var timer = setInterval(function () {
            index++;
            if (index == 5) index = 0;
            render($('.province .sup li').eq(index))
        }, 2000);

        $('.province .sup').hover(function () {
            clearInterval(timer)
        }, function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                if (index == 5) index = 0;
                render($('.province .sup li').eq(index))
            }, 2000);
        })
    })();
})