import { useState } from "react"

interface Props {
    label?: string
    enabled?: boolean
    themed?: boolean
}

export const Toggle = ({ label, enabled, themed = false }:Props) => {

    const [isEnabled, setIsEnabled] = useState(false)        

        // TO DO - If using a theme, read it from the context
        // and place into token names: omasanoma-color-primary-500


        return (
            <div 
                className={`
                    flex flex-row gap-2 
                    items-center 
                    cursor-pointer
                `}
                onClick={ () => setIsEnabled(!isEnabled) }
            >  
            
                <div className={`
                    w-20 h-8 p-0.5 
                    rounded-full relative
                    transition-all duration-300
                    ${isEnabled ? 'bg-slate-700 ' : 'bg-slate-300'} 
                `}>
                 
                    <span className={`absolute bg-white ${isEnabled ? 'right-0.5 ' : 'left-0.5'} w-7 h-7 rounded-full`}></span>
           
                </div>

                { label ??
                    <p>{label}</p>
                }
                
            </div>
        )
}