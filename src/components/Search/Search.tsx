import React, { FC, useEffect, useState, useRef } from 'react'
import SearchIcon from '../Icons/SearchIcon'
import LocationIcon from '../Icons/LocationIcon'
import { fetchCities } from '../../lib/fetchSuggestions'

type Props = {
    onChange: (search: string) => void
}

export const Search: FC<Props> = ({ onChange }) => {
    const [location, setLocation] = useState<string>('')
    const suggestionRef = useRef(null)
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const handleClick = (suggestionItem: string) => {
        let newSearchTerm = suggestionItem.split(',')[0]
        onChange(newSearchTerm)
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

    return (
        <div className="container flex mx-auto mb-12 mt-4 px-4">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    setShowSuggestions(false)
                    onChange(location)
                }}
            >
                <label>
                    <input
                        className="rounded px-2 border-gray-50 border border-solid "
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <LocationIcon />
                </label>
                {showSuggestions && (
                    <div ref={suggestionRef}>
                        <ul>
                            {suggestions
                                ?.slice(0, 5)
                                ?.map((suggestionItem, index) => (
                                    <li
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
                <button className="btn btn-primary">
                    <SearchIcon />
                </button>
            </form>
        </div>
    )
}

export default Search
