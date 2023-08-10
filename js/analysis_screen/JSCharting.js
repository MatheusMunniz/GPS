  
var chart = JSC.chart('chartDiv', { 
    debug: false, 
    type: 'gauge ', 
    animation_duration: 0, 
    legend_visible: false, 
    xAxis: { 
      scale: { 
        // Helps position the marker on top of the y Axis. 
        range: [0, 1] 
      } 
    }, 
    palette: { 
      pointValue: '%yValue', 
      ranges: [ 
        { value: [0, 20], color: '#77E6B4' }, 
        { value: [21, 79], color: '#FFD221' }, 
        { value: [80, 100], color: '#FF5353' } 
      ] 
    }, 
    yAxis: { 
      defaultTick: { 
        // Distance between tick labels and colorized axis line 
        padding: 10, 
        label: { style_fontSize: '16px' } 
      }, 
      line: { 
        width: 15, 
        // Gaps occur at tick intervals defined below. 
        breaks: { 
          gap: 0.03, 
          custom: [
            0.2,
            0.5, 
            0.8 
          ] 
        }, 
        color: 'smartPalette'
      }, 
      scale: { range: [0, 100], interval: 20 } 
    }, 
    
    defaultSeries: { 
      opacity: 1, 
      mouseTracking_enabled: false, 
      shape: { 
        label: { 
          text: labelText, 
          style: { fontSize: '68px' }, 
          align: 'center', 
          verticalAlign: 'middle'
        } 
      } 
    }, 
    series: [ 
      { 
        type: 'marker', 
        mouseTracking_enabled: false, 
        defaultPoint: { 
          marker: { 
            outline: { 
              width: 8, 
              color: 'currentColor'
            }, 
            fill: 'white', 
            type: 'circle', 
            size: 35 
          } 
        }, 
        points: [{ y: 15 }] 
      } 
    ], 
    toolbar: { 
      defaultItem: { 
        position: 'top left', 
        boxVisible: false, 
        margin: 6 
      } 
    } 
  }); 
    
  function moveSlider(val) { 
    // Update chart title and points. The then: cb update option will execute the callback once the animation is finished. 
    chart 
      .series(0) 
      .points(0) 
      .options({ y: Math.round(val * 10) / 10 }); 
  } 
    
  function labelText(series) { 
    var value = series.points(0).options('y'), 
      fgg = 
        value >= 80 
          ? 'Higher Risk'
          : value >= 21
          ? 'Typical Risk'
          : 'Lower Risk'; 
    return ( 
      '%sum%<br/><span style="fontSize: 32px">' + 
      fgg + 
      '</span>'
    ); 
  }


  // labelsWrapper

  function getColorPalette(value) {
    if (value >= 0 && value <= 20) {
      return ['#21D683', '#a7d8c1']; // Vermelho
    } else if (value >= 21 && value <= 80) {
      return ['#FFD221', '#ecdc9d']; // Amarelo
    } else if (value > 80) {
      return ['#FF5353', '#d69a9a']; // Verde
    }
  }
  
  var value = 12;
  var palette = getColorPalette(value);
  var icons = [
    '<icon name=material/social/person margin=2 size=30 color=' + palette[0] + '>',
    '<icon name=material/social/person margin=2 size=30 color=' + palette[1] + '>'
  ];
  
  var rest = 100 - value;
  
  renderPictograph([value, 100 - value]);
  
  renderLabel(
    value,
    'Your risk is greater than <span  style="font-weight: bold; color:' +
    palette[0] +
    '">' + value + '%</span> of the population and lower than <span  style="font-weight: bold; color:' +
    palette[1] +
    '">' + rest + '%</span> of the population'
  );
  
  function renderPictograph(values) {
    return JSC.label(iconsDiv, makePictograph(values, icons, 10, 1));
  
    function makePictograph(values, icons, width, height) {
      var iconsArr = [],
        valueIconCount = Math.round((values[0] / 100) * 10);
      for (var i = 0; i < 10; i++) {
        iconsArr.push(i < valueIconCount ? icons[0] : icons[1]);
      }
      return iconsArr.join('');
    }
  }
  
  function renderLabel(value, text) {
    return JSC.label(
      labelDiv,
      '<span style="font-size:25px">' +
      text +
      '</span>'
    );
  }

  // StudyPop chart 

  var options = {
    debug: false,
    type: 'horizontal column',
    title_label_text: 'Genetic risk score distribution in the study population', // Título do gráfico
    yAxis_scale_range: [0, 100], // Definindo o intervalo do eixo Y de 0 a 100
    xAxis_scale_range: [-4, 5], // Definindo o intervalo do eixo X de -4 a 4
    defaultTooltip_label_text: 'X: %xValue, Y: %yValue', // Texto do tooltip
    legend_template: '%icon %name', // Exibir apenas cor e nome na legenda
    series: [
      {
        name: 'Population',
        points: [
          { x: -3, y: 20 },
          { x: -2, y: 50 },
          { x: -1, y: 70 },
          { x: 0, y: 85 },
          { x: 1, y: 90 },
          { x: 2, y: 80 },
          { x: 3, y: 60 },
          { x: 4, y: 30 },
        ],
      },
      // Novo ponto para a barra vermelha
      {
        name: 'Patient', // Nome da barra vermelha
        points: [{ x: -3, y: 35 }],
        defaultPoint: {
          color: 'red',
        },
      },
    ],
  };
  var chart = JSC.chart('study_pop_chart', options);