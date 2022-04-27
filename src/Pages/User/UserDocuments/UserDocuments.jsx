import { Documents } from "../Documents"

import "./UserDocuments.css"

import { CustomCard } from "../../../Components/CustomCard/CustomCard"

import neededItems from "../../../Assets/documents/Անհրաժեշտ_պարագաների_գնման_դիմում.docx"
import vacantion from "../../../Assets/documents/Արձակուրդի դիմում.docx"
import workOut from "../../../Assets/documents/Աշխատանքից ազատման դիմում.docx"
import saleryInfo from "../../../Assets/documents/Աշխատավարձի_մասին_տեղեկանքի_դիմում.docx"
import workInfo from "../../../Assets/documents/Աշխատանքի_մասին_տեղեկանքի_դիմում.docx"
import brokItems from "../../../Assets/documents/Անսարք_տեխնիկայի_վերանորոգման_դիմում.docx"
import dayOff from "../../../Assets/documents/Բացակայության դիմում.docx"

export const UserDocuments = props => {

    return (
        <div className="userDocs">
            <h3 className="docsTitle">Հասանելի Փաստաթղթեր</h3>
            <Documents>
                <CustomCard file={vacantion} cardTitle="Արձակուրդի տրամադրման դիմում"/>
                <CustomCard file={workOut} cardTitle="Աշխատանքից ազատման դիմում"/>
                <CustomCard file={saleryInfo} cardTitle="Աշխատավարձի մասին տեղեկանքի դիմում"/>
                <CustomCard file={workInfo} cardTitle="Աշխատանքի մասին տեղեկանքի դիմում"/>
                <CustomCard file={brokItems} cardTitle="Անսարք տեխնիկայի վերանորոգման դիմում"/>
                <CustomCard file={neededItems} cardTitle="Անհրաժեշտ իրերի գնման դիմում"/>
                <CustomCard file={dayOff} cardTitle="Աշխատանքից բացակայելու դիմում"/>
            </Documents>
        </div>
        
    )
}