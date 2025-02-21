export type Icon = 'instagram' | 'youtube' | 'duration' | 'spotify'

export type Route = '/start' | '/die-band' | '/kontakt' | '/archiv'

export type Directory = {
  displayName: string
  path: Route
}

// UTILITY

export type Optional<T extends object, K extends keyof T> = { [Key in K]?: T[Key] } & Omit<T, K>

export type NoMethods<T extends Object> = Pick<T, { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]>

type t = {
  name: string
  age: number
  func: () => void
}
