import { forecastType } from '../types'

import Tile from './Tile'

import Sunrise from './Icons/Sunrise'
import Sunset from './Icons/Sunset'

import {
  getHumidityValue,
  getSunTime,
  getWindDirection,
  getPop,
  getVisibilityValue,
  getWeatherMainTrad,
} from '../helpers'

type Props = {
  data: forecastType
}

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
)

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0]

  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-black bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-white">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name} <span className="font-thin">{data.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p className="text-sm">
            {getWeatherMainTrad(today.weather[0].main)} (
            {today.weather[0].description})
          </p>
          <p className="text-sm">
            Min : <Degree temp={Math.floor(today.main.temp_min)} /> Max :{' '}
            <Degree temp={Math.ceil(today.main.temp_max)} />
          </p>
        </section>

        <section className="flex overflow-x-scroll mt-4 pb-5 mb-5 scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-400">
          {data.list.map((item, i) => (
            <div
              className="inline-block text-center w-[50px] flex-shrink-0 mx-2"
              key={i}
            >
              <p className="text-sm">
                {i === 0 ? 'Auj.' : getSunTime(item.dt)}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-sm font-bold">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>

        <section className="flex flex-wrap justify-between text-white">
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-black/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunrise /> <span className="mt-2">{getSunTime(data.sunrise)}</span>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-black/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunset /> <span className="mt-2">{getSunTime(data.sunset)}</span>
          </div>

          <Tile
            icon="wind"
            title="Vent"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${getWindDirection(Math.round(today.wind.deg))}
             - Max : ${today.wind.gust.toFixed(1)} km/h`}
          />

          <Tile
            icon="feels"
            title="Ressenti"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
            description={`Ressenti ${
              Math.round(today.main.feels_like) <= Math.round(today.main.temp)
                ? 'plus froid'
                : 'plus chaud'
            }`}
          />

          <Tile
            icon="humidity"
            title="Humidité"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          <Tile
            icon="pop"
            title="Précipitations"
            info={`${Math.round(today.pop * 1000)} %`}
            description={`${getPop(today.pop)}, ${
              today.clouds.all
            } % de nuages`}
          />
          <Tile
            icon="pressure"
            title="Pression"
            info={`${today.main.pressure}`}
            description={`${
              Math.round(today.main.pressure) < 1013
                ? 'Plus basse'
                : 'Plus élevée'
            } que la norme`}
          />
          <Tile
            icon="visibility"
            title="Visibilité"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={getVisibilityValue(today.visibility)}
          />
          {/* <Tile icon="" title="" info={} description={} /> */}
          {/* <Tile icon="" title="" info={} description={} /> */}
        </section>
      </div>
    </div>
  )
}

export default Forecast
