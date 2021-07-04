import { extractTrainNameNo } from './model/trainnameno_extractor'

const txQuery = location.search
    .substring(1)
    .split('&')
    .map((val) => ({ name: val.split('=')[0], value: val.split('=')[1] }))
    .find((val) => val.name === 'tx')

if (txQuery !== undefined) {
    const trainNo = txQuery.value.split('-')[2]
    const title = document.querySelector('.inner,.ek-onetrain-title-inner')
    const [route, trainInfo] = title?.innerHTML?.split('<br>') ?? [null, null]
    const [trainName, destination] = trainInfo?.split('　') ?? [null, null]
    const trainNameNo = extractTrainNameNo(trainName ?? '', trainNo)
    const trainNameNoString = trainNameNo !== null ? `${trainNameNo}号` : ''

    if (
        title !== null &&
        route !== null &&
        trainName !== null &&
        destination !== null
    ) {
        // eslint-disable-next-line no-irregular-whitespace
        title.innerHTML = `${route}<br>${trainNo} ${trainName}${trainNameNoString}　${destination}`
    }
}
