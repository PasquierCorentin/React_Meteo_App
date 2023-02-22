export const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return 'Nord-Est'

  if (deg > 76 && deg <= 105) return 'Est'
  if (deg > 105 && deg <= 165) return 'Sud-Est'

  if (deg > 166 && deg <= 195) return 'Sud'
  if (deg > 195 && deg <= 255) return 'Sud-Ouest'

  if (deg > 255 && deg <= 285) return 'Ouest'
  if (deg > 285 && deg <= 345) return 'Nord-Ouest'

  return 'Nord'
}

export const getHumidityValue = (level: number): string => {
  if (level <= 55) return 'Sec et confortable'
  if (level > 55 && level <= 65) return 'Légèrement inconfortable'

  return 'Haute humidité, air inconfortable'
}

export const getVisibilityValue = (number: number): string => {
  if (number <= 50) return 'Brouillard Dangereux'
  if (number > 50 && number <= 500) return 'Brouillard Épais'
  if (number > 500 && number <= 2000) return 'Possible Brouillard'
  if (number > 2000 && number <= 9000) return 'Légère Brume'

  return 'Ciel dégagé'
}

export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length <= 1) hours = `0${hours}`
  if (minutes.length <= 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}

export const getPop = (value: number): string => {
  if (value <= 0.33) return 'Faible probabilité'
  if (value > 0.33 && value <= 0.66) return 'Probabilité moyenne'

  return 'Haute probabilité'
}

export const getWeatherMainTrad = (text: string): string => {
  if (text === 'Thunderstorm') return 'Orage'
  if (text === 'Drizzle') return 'Bruine'
  if (text === 'Rain') return 'Pluie'
  if (text === 'Snow') return 'Neige'
  if (text === 'Clear') return 'Dégagé'
  if (text === 'Clouds') return 'Nuages'

  if (text === 'Mist') return 'Brume'
  if (text === 'Smoke') return 'Fumée'
  if (text === 'Haze') return 'Brume'
  if (text === 'Dust') return 'Poussière'
  if (text === 'Fog') return 'Brouillard'
  if (text === 'Sand') return 'Sable'
  if (text === 'Ash') return 'Cendres'
  if (text === 'Squall') return 'Bourrasques'
  if (text === 'Tornado') return 'Tornade'

  return 'Inconnu'
}
