export const getDocumentNameFromType = (type) => {
    switch (type) {
        case "dayOffDocument" :
            return "Աշխատանքից բացակայության դիմում"
        case "BrokItemsDocument" : 
            return "Անսարք տեխնիկայի վերանորոգման դիմում"
        case "DismissalDocument" : 
            return "Աշխատանքից ազատման դիմում"
        case "NeededItemsDocument" :
            return "Անհրաժեշտ տեխնիկայի և պարագաների գնման դիմում"
        case "SaleryInfoDocument" :
            return "Աշխատավարձի մասին տեղեկանքի դիմում"
        case "VacantionDocument" :
            return "Արձակուրդի տրամադրման դիմում"
        case "WorkInfoDocument" : 
            return "Աշխատանքի մասին տեղեկանքի դիմում"
        default :
            return "Անհայտ դիմում"
    }
}