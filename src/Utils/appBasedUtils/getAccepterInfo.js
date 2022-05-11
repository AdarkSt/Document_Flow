export const getAccepterInfo = (acceptersCount, document) => {
    const acceptersInfos = []
    for(let num = 1; num <= acceptersCount; ++num) {
        acceptersInfos.push({
            accepter_position: document[`accepter_${num}_position`],
            accepter_seen: document[`accepter_${num}_seen`],
            accepter_answer: document[`accepter_${num}_answer`],
        })
    }
    return acceptersInfos
}