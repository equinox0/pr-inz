angular.module('app')
  .directive('stopEvent', stopEvent);

function stopEvent() {
  function link(scope, element, attr) {
    if(attr && attr.stopEvent)
      element.bind(attr.stopEvent, function (e) {
        e.stopPropagation();
        e.preventDefault();
      });
  }

  return {
    restrict: 'A',
    link: link
  };
}
