 window.lazyLoadOptions = {
     elements_selector: ".lazy",
 };
 window.addEventListener('LazyLoad::Initialized', function(event) {
     window.lazyLoadInstance = event.detail.instance;
 }, false);
 appear({
     init: function init() {
         // console.log('dom is ready');
     },
     elements: function elements() {
         
         return document.getElementsByClassName('animateonce');
     },
     appear: function appear(el) {
         el.className += " show";
     },
     disappear: function disappear(el) {
         // console.log('no longer visible', el);
     },
     bounds: 10,
     reappear: false
 });