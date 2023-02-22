import { ChangeEvent } from 'react'
import { optionType } from '../types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex flex-col text-center items-center justify-center text-white">
        <h1 className="text-4xl font-thin mt-2 mb-4">
          Prévisions <span className="font-black">Méteo</span>
        </h1>
        <p className="text-sm my-4">
          Entrez ci-dessous le nom d'une ville ou d'un lieu pour connaître les
          prévisions méteo des prochains jours !
        </p>
        <div className="relative flex my-10 md:my-6">
          <input
            type="text"
            value={term}
            className="px-2 py-1 rounded-l-md border-2 border-white text-zinc-800"
            onChange={onInputChange}
          />
          <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
            {options.map((option: optionType, index: number) => (
              <li key={option.name + '-' + index}>
                <button
                  className="text-left text-sm w-full text-zinc-700 hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}, {option.state} ({option.country})
                </button>
              </li>
            ))}
          </ul>
          <button
            className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            <FontAwesomeIcon icon={solid('magnifying-glass')} />
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search
