import Time from 'common/js/time'

export default {
  bind (el, binding) {
    el.innerHTML = Time.getFormatTime(binding.value)
    el.__timeout__ = setInterval(() => {
      el.innerHTML = Time.getFormatTime(binding.value)
    }, 60000)
  },
  unbind (el) {
    clearInterval(el.__timeout__)
    delete el.__timeout__
  }
}
