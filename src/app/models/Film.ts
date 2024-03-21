export class Film {
  filmId: number = 0
  filmName: string = ''
  description: string = ''
  durationMinutes: number = 0
  startDate: Date = new Date()
  endDate: Date = new Date()
  country: string = ''
  director: string = ''
  actor: string = ''
  imagePortrait: string = ''
  imageLandscape: string = ''
  slug: string = ''
  trailer: string = ''
  rate: number = 0
  totalVotes: number = 0
  views: number = 0
  status: boolean = false
  genreName: string = ''
  genreDescription: string = ''
}
