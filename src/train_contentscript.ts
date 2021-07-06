import {
    findPagerTrainInformationFromDep,
    getPagerTrainInformations,
} from './models/pager_train_informations'
import { extractTrainNameNo } from './models/trainnameno_extractor'

// ページ切り替え用の列車情報取得
const pagerTrainInfos = getPagerTrainInformations(document.body)

/**
 * 発車時刻から列車情報を取得して更新があった場合に列車番号を更新します。
 */
const updateTrainNoIfPageChanged = (): void => {
    if (pagerTrainInfos === null) {
        return
    }
    const depTimes =
        document
            .querySelector('div.search-filter > p.text')
            ?.textContent?.match(/(\d{1,2}):(\d{1,2})発/) ?? null
    if (depTimes === null) {
        return
    }
    const depTime = depTimes[1] + depTimes[2]
    const info = findPagerTrainInformationFromDep(pagerTrainInfos, depTime)
    if (info === null) {
        return
    }
    const [tx] = info
    console.log(tx)
}

// 列車情報の変更を監視して1本前/先ボタン押下時に列車番号の表示を変更する
const oneTrainElement = document.querySelector('.ek-result_onetrain')
if (oneTrainElement !== null && pagerTrainInfos !== null) {
    const observer = new MutationObserver(updateTrainNoIfPageChanged)
    observer.observe(oneTrainElement, {
        characterData: true,
        childList: true,
    })
}

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
