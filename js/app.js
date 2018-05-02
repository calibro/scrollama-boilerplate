// initialize the scrollama
var scroller = scrollama();
var scroller2 = scrollama();

// generic window resize listener event
function handleResize() {
  scroller.resize();
  scroller2.resize();
}

// scrollama event handlers
function handleStepEnter(response, id) {
  // response = { element, direction, index }

  // update graphic based on step
  d3.selectAll(id + ' .scroll__graphic__tab').attr('class', function(d,i){
    if(d3.select(this).attr('data-step') == response.index+1){
      return 'scroll__graphic__tab d-block'
    }else{
      return 'scroll__graphic__tab d-none'
    }
  })
}

function handleContainerEnter(response) {
  // response = { direction }
}

function handleContainerExit(response) {
  // response = { direction }
}


function init() {
  //setupStickyfill();

  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller.setup({
    container: '#scroll',
    graphic: '#scroll .scroll__graphic',
    step: '#scroll .scroll__text .step',
    debug: false,
    offset: 0.50,
  })
  .onStepEnter(function(response){
      return handleStepEnter(response,'#scroll')
    }
  )
  .onContainerEnter(handleContainerEnter)
  .onContainerExit(handleContainerExit);

  scroller2.setup({
    container: '#scroll-2',
    graphic: '#scroll-2 .scroll__graphic',
    step: '#scroll-2 .scroll__text .step',
    debug: false,
    offset: 0.50,
  })
  .onStepEnter(function(response){
      return handleStepEnter(response,'#scroll-2')
    }
  )
    .onContainerEnter(handleContainerEnter)
    .onContainerExit(handleContainerExit);

  // setup resize event
  window.addEventListener('resize', handleResize);
}

// kick things off
init();
