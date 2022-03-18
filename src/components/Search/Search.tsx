import React, { FC, useEffect, useState, useRef } from 'react'
import SearchIcon from '../Icons/SearchIcon'
import LocationIcon from '../Icons/LocationIcon'
import { fetchCities } from '../../lib/fetchSuggestions'

import { useClickedOutsideElement } from './../../hooks/useClickedOutsideElement'

type Props = {
    onSearchChange: (search: string) => void
    onRequestLocation: () => void
}

export const Search: FC<Props> = ({ onSearchChange, onRequestLocation }) => {
    const [location, setLocation] = useState<string>('')
    const suggestionRef = useRef(null)
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const handleClick = (suggestionItem: string) => {
        let newSearchTerm = suggestionItem.split(',')[0]
        onSearchChange(newSearchTerm)
        setTimeout(() => {
            setShowSuggestions(false)
        }, 300)
    }

    useEffect(() => {
        if (location) {
            fetchCities(location).then((res) => {
                setSuggestions(res)
                setShowSuggestions(true)
            })
        }
    }, [location])

    useClickedOutsideElement(suggestionRef, () => setShowSuggestions(false))

    return (
        <div className="flex relative flex-col items-center w-full lg:w-1/2 mb-1">
            <button
                className="btn btn-primary absolute left-2 top-1/2 -translate-y-2/4"
                onClick={onRequestLocation}
            >
                <LocationIcon />
            </button>
            <form
                className="w-full"
                onSubmit={(e) => {
                    e.preventDefault()
                    setShowSuggestions(false)
                    onSearchChange(location)
                }}
            >
                <div className="w-full ">
                    <input
                        className="w-full outline-none rounded-full py-2 px-10 focus:border border-none focus:border-gray-100 shadow-lg"
                        type="text"
                        value={location}
                        placeholder="Pleaser enter a Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary absolute right-2 top-1/2 -translate-y-2/4"
                    >
                        <SearchIcon />
                    </button>
                </div>
                {showSuggestions && (
                    <div
                        className="absolute w-full z-10 top-12 bg-white flex flex-col shadow-lg rounded-lg overflow-hidden"
                        ref={suggestionRef}
                    >
                        <ul>
                            {suggestions
                                ?.slice(0, 5)
                                ?.map((suggestionItem, index) => (
                                    <li
                                        className="hover:bg-whitegrey px-2 py-1 cursor-pointer"
                                        key={index}
                                        onClick={() =>
                                            handleClick(suggestionItem)
                                        }
                                    >
                                        {suggestionItem}
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Search
