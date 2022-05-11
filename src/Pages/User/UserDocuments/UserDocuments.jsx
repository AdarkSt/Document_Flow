import { Documents } from "../Documents"

import "./UserDocuments.css"

import { CustomCard } from "../../../Components/CustomCard/CustomCard"

import { VacantionDialog } from "./VacantionDialog/VacantionDialog"
import { DismissalDialog } from "./DismissalDialog/DismissalDialog"
import { SaleryInfoDialog } from "./SaleryInfoDialog/SaleryInfoDialog"
import { WorkInfoDialog } from "./WorkInfoDialog/WorkInfoDialog"
import { BrokItemsDialog } from "./BrokItemsDialog/BrokItemsDialog"
import { NeededItemsDialog } from "./NeededItemsDialog/NeededItemsDialog"
import { DayOffDialog } from "./DayOffDialog/DayOffDialog"

export const UserDocuments = props => {

    return (
        <div className="userDocs">
            <h3 className="docsTitle">Հասանելի Փաստաթղթեր</h3>
            <Documents>
                <CustomCard DialogComponent={VacantionDialog} cardTitle="Արձակուրդի տրամադրման դիմում"/>
                <CustomCard DialogComponent={DismissalDialog} cardTitle="Աշխատանքից ազատման դիմում"/>
                <CustomCard DialogComponent={SaleryInfoDialog} cardTitle="Աշխատավարձի մասին տեղեկանքի դիմում"/>
                <CustomCard DialogComponent={WorkInfoDialog} cardTitle="Աշխատանքի մասին տեղեկանքի դիմում"/>
                <CustomCard DialogComponent={BrokItemsDialog} cardTitle="Անսարք տեխնիկայի վերանորոգման դիմում"/>
                <CustomCard DialogComponent={NeededItemsDialog} cardTitle="Անհրաժեշտ իրերի գնման դիմում"/>
                <CustomCard DialogComponent={DayOffDialog} cardTitle="Աշխատանքից բացակայելու դիմում"/>
            </Documents>
        </div>
        
    )
}