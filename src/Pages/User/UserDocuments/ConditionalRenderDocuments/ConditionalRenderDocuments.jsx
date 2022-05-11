import { DayOffDialog } from "../DayOffDialog/DayOffDialog"
import { VacantionDialog } from "../VacantionDialog/VacantionDialog"

export const ConditionalRenderDocuments = props => {
    const {document} = props
    let Component = <></>
    switch (document.type) {
        case "dayOffDocument": {
            const {date, reason} = document
            Component = <DayOffDialog 
                            isDialog={false} 
                            initial_date={date} 
                            initial_reason={reason} 
                            initial_file={true} 
                            openButtonName="Դիտել Փաստաթուղթը"
                        />
            break
        }
        case "VacantionDocument": {
            const {start_date, end_date, reason} = document
            Component = <VacantionDialog 
                            isDialog={false} 
                            initial_start_date={start_date}
                            initial_end_date={end_date}
                            initial_reason={reason}
                            initial_file={true}
                            openButtonName="Դիտել Փաստաթուղթը"
                        />
            break
        }
        default : {
            break
        } 
    }
    return Component
}