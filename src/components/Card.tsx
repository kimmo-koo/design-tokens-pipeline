interface Props {
    imageUrl: string
    heading: string
    description: string
}
export const Card = ({imageUrl, heading, description}: Props) => {

    return (

        <div className="flex flex-col rounded gap-md rounded-xl border border-slate-200 shadow-2xl">

            <img src={imageUrl} className="rounded-t-xl" />
            
            <div className="flex flex-col gap-md px-md pt-md pb-lg">
                <h1 className="font-bold">{heading}</h1>
                <p className="text-slate-500">{description}</p>
            </div>
        
        </div>
    )
}
