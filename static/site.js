 window.lazyLoadOptions = {
     elements_selector: ".lazy",
 };
 window.addEventListener('LazyLoad::Initialized', function(event) {
     window.lazyLoadInstance = event.detail.instance;
 }, false);