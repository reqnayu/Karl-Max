import { Optional, NoMethods } from '../../../../types'

export class DiscographyItem {
  public readonly name: string
  public readonly tracks: { name: string; duration: string }[]
  public readonly img: string
  public readonly release_date: Date
  public readonly spotify_url: string

  constructor({
    name,
    tracks,
    img,
    release_date,
    spotify_url,
  }: NoMethods<Optional<DiscographyItem, 'img' | 'spotify_url'>>) {
    this.name = name
    this.tracks = tracks
    this.img = img ?? `img/discography/${this.name}.webp`
    this.release_date = new Date(release_date)
    this.spotify_url = spotify_url ?? ''
  }

  public getType(): 'Single' | 'EP' | 'Album' {
    const len = this.tracks.length
    return len <= 1 ? 'Single' : len <= 5 ? 'EP' : 'Album'
  }

  public getFormattedReleaseData(): string {
    return this.release_date.toLocaleDateString('de')
  }
}
