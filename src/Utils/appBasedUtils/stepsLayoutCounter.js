export const stepsLayoutCounter = (accepted, denied) => {
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

    if(accepted === false) {
        trueSteps = steps
    }
    if(accepted === true) {
        trueSteps = acceptedSteps
    }
    if(denied === true) {
        trueSteps = canceledSteps
    }
    return trueSteps
}