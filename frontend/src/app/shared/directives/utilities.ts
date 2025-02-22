export function throttle<T extends any[]>(cb: (...args: T) => void, delay: number) {
  let timeout: any = undefined
  return (...args: T) => {
    if (timeout !== undefined) return
    timeout = setTimeout(() => (timeout = undefined), delay)
    cb(...args)
  }
}
