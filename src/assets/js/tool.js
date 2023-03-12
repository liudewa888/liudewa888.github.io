export function storageHandler(key, val = undefined) {
  if (val !== undefined) {
    if (val && typeof val === 'object') {
      localStorage.setItem(key, JSON.stringify(val))
    } else {
      localStorage.setItem(key, val)
    }
    return
  } else {
    const data = localStorage.getItem(key)
    if (typeof data === 'string') {
      try {
        const res = JSON.parse(data)
        if (res && typeof res === 'object') {
          return res
        } else {
          return data
        }
      } catch (e) {
        return data
      }
    }

  }
}