//VIVUS Initialization
new Vivus('Ni', 
            {duration: 120, type:'oneByOne'}
      );
//Enable popover component
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
//Dismiss popover on lost focus
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'
  })