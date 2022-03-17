import { useEffect } from 'react'

export const useClickedOutsideElement = (element: any, callback: Function) => {
    useEffect(() => {
        const handleClickOutsideElement = (event: Event) => {
            if (
                element.current &&
                !element.current.contains(event.target as any)
            ) {
                callback()
            }
        }
        document.addEventListener('mousedown', handleClickOutsideElement)
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideElement)
        }
    })
}
