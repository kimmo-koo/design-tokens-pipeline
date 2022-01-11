import React from 'react'

export type ContextType = {
    theme: string
}

export const ThemeContext = React.createContext<ContextType>({
    theme: 'default'
})
