import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

interface Props {
    theme?: string
}

export const Button = ({ theme = 'default_brand'}: Props) => {

    return (
        <div>
            <button className={`${theme}-bg-color-primary `}>Styled with: {theme}</button>
        </div>
    )
}