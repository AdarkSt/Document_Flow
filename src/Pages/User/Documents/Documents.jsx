import "./Documents.css"

export const Documents = props => {

    const {children} = props

    return (
        <div className="documents">
               {children}
        </div>
    )
}