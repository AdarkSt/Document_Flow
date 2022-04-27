export const stepsLayoutCounter = (accepted) => {

    let trueSteps = ""

    const steps = [
        'Ուղարկված է',
        'Ստուգված է',
        'Հաստատված է / Մերժված է',
    ]
    
    const acceptedSteps = [
        'Ուղարկված է',
        'Ստուգված է',
        'Հաստատված է',
    ]
    
    const canceledSteps = [
        'Ուղարկված է',
        'Ստուգված է',
        'Մերժված է ',
    ]

    if(accepted === undefined) {
        trueSteps = steps
    }
    if(accepted === true) {
        trueSteps = acceptedSteps
    }
    if(accepted === false) {
        trueSteps = canceledSteps
    }
    return trueSteps
}