import "./Footer.css"
import { Clipboard } from "../Clipboard"

export const Footer = props => {

    const {contacts} = props

    return(
        <div className="footer">
            {contacts.mobile && <Clipboard
                                    text={contacts.mobile}
                                >
                                    <p className="info">Mobile: {contacts.mobile}</p>
                                </Clipboard>}
            {contacts.email && <Clipboard
                                    text={contacts.email}
                                >
                                    <p className="info">Email: {contacts.email}</p>
                                </Clipboard>}
            {contacts.address && <Clipboard
                                    text={contacts.address}
                                >
                                <p className="info">Address: {contacts.address}</p>
                                </Clipboard>}
           
        </div>
    )
}