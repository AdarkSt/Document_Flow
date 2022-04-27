import { Footer } from "../../../../Components/Footer"
import { Menu } from "../../Menu"
import { UserInfo } from "../../UserInfo"
import "./UserPageLayout.css"
import { Header } from "../../../../Components/Header/Header"

export const UserPageLayout = props => {

    const {children, user} = props

    return (
        <div className="pageLayout">
            <header className="header">
                <Header/>
            </header>
            <div className="layout">
                <aside className="side">
                    <UserInfo user={user}/>
                    <Menu/>
                </aside>
                <main className="main">
                    {children}
                </main>
            </div>
            <footer className="layoutFooter">
                    <Footer contacts={{mobile:"+37477969425", 
                    address:"Armenia, Charencavan", 
                    email:"ritaaslanyan@mail.ru"}}/>
            </footer>   
        </div>
    )
}
