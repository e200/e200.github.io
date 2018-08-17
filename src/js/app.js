function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}

window.addEventListener('DOMContentLoaded', () => {
  const goToWhatICanDo = document.getElementById('goToWhatICanDo'),
        wcid           = document.getElementById('what-i-can-do')

        setTimeout(() => {
          goToWhatICanDo.classList.add('animate')
        }, 8000)

    goToWhatICanDo
      .addEventListener('click', (e) => {
        e.preventDefault()

        scrollTo(document.documentElement, wcid.offsetTop, 600)
      })
})