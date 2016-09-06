(function () {
  var ctrlClassName = '.control-segmented';
  var activeClassName = 'active';
  var ctrl = document.querySelectorAll(ctrlClassName);
  var labels = document.querySelectorAll(ctrlClassName + ' label'); 
  var els = document.querySelectorAll(ctrlClassName + ' input');  
  
  function getCheckedEls(el, index) {
    return el ? el.getAttribute('checked') !== null : false;
  }
  
  function addActiveClassToLabel(el) {
      var label = el.parentNode;
    
      if (label.classList)
        label.classList.add(activeClassName);
      else
        label.className += ' ' + activeClassName;
  }
  
  function removeActiveClassFromLabel(el) {
      var label = el.parentNode;
    
      if (label.classList)
        label.classList.remove(activeClassName);
      else
        label.activeClassName = label.activeClassName.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  
  function addActiveClassToLabels(els) {  
    var checkedEls = Array.prototype.filter.call(els, getCheckedEls);
    
    checkedEls.forEach(function(item, i){
      addActiveClassToLabel(item);
    });    
  }
  
  function removeActiveClassFromLabels(context) {
      var ctrl = context.parentNode.parentNode;    
      
      Array.prototype.forEach.call(ctrl.querySelectorAll('label'), function(label, i){
        if (label.classList)
          label.classList.remove(activeClassName);
        else
          label.activeClassName = label.activeClassName.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      });  
  }
  
  function radioEventHandler() {
    Array.prototype.forEach.call(document.querySelectorAll(ctrlClassName + ' input[type="radio"]'), function(item, i){
      item.addEventListener('change', function() {
        removeActiveClassFromLabels(item);
        addActiveClassToLabel(item);
      });
    });    
    
  }
  
  function checkboxEventHandler() {
    Array.prototype.forEach.call(document.querySelectorAll(ctrlClassName + ' input[type="checkbox"]'), function(item, i){
      item.addEventListener('click', function() {
        if(item.checked)
          addActiveClassToLabel(item);
        else
          removeActiveClassFromLabel(item);
      });
    });    
    
  }
  
  function bindEvents() {
    radioEventHandler();
    checkboxEventHandler();
  }
  
  addActiveClassToLabels(els);
  bindEvents();
})();
