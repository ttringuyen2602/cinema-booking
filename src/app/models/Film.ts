import { FilmGenre } from '@src/app/models/FilmGenre'

export class Film {
  [key: string]: any
  filmId: number = 0
  filmName: string = ''
  description: string = ''
  durationMinutes: number = 0
  startDate: Date = new Date()
  endDate: Date = new Date()
  country: string = ''
  director: string = ''
  actor: string = ''
  portraitImage: string = ''
  landscapeImage: string = ''
  slug: string = ''
  trailer: string = ''
  rate: number = 0
  totalVotes: number = 0
  views: number = 0
  status: string = ''
  genreNameList: string[] = []
  count: number = 0
  isEditing: boolean = false
  isChecked: boolean = false
}
