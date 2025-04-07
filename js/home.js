const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
popoverTriggerList.forEach(el => {
  new bootstrap.Popover(el)
})

popoverTriggerList.forEach(el => {
  new bootstrap.Popover(el, {
    trigger: 'focus' 
  })
})