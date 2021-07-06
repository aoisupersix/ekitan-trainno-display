/**
 * 引数に指定されたHTML要素から1本前,1本後の列車の取得に使用する列車情報を取得して返します。
 * @param targetElement 子に列車情報のJSONが含まれるHTML要素
 * @returns 列車情報のJSONが正常に取得できた場合はそのデータを,取得できなかった場合はnullを返します
 */
export const getPagerTrainInformations = (
    targetElement: HTMLElement
): PagerTrainInformations | null => {
    const pagerJsonString = Array.from(
        targetElement.getElementsByTagName('script')
    )
        .map((s) =>
            s.textContent
                ?.match(/var\s+data_pager\s+=\s+JSON\.parse\('(.+)'\)\.data/)
                ?.find((_, i) => i === 1)
        )
        .find((r) => r !== undefined)

    if (pagerJsonString === undefined) {
        return null
    }

    const pagerJson: PagerTrainInformations = JSON.parse(pagerJsonString)
    return pagerJson
}

/**
 * 全列車情報から指定された発車時刻の列車情報を取得します。
 * @param infos 取得元の列車情報
 * @param dep 基準駅の発車時刻を示す文字列(ex. 0820)
 * @returns 指定された発車時刻の列車情報が取得できた場合は、txと列車情報のTupleを,取得できなかった場合はnullを返します
 */
export const findPagerTrainInformationFromDep = (
    infos: PagerTrainInformations,
    dep: string
): [string, PagerTrainInformation] | null => {
    const trainInfo = Object.entries(infos.data).find(
        ([, value]) => value.dep === dep
    )

    if (trainInfo !== undefined) {
        return trainInfo
    }

    return null
}

/**
 * 1本前,1本後の列車の取得に使用する全列車情報
 * timetabe/railway/trainのページ内に直接JSONが埋め込まれているので、そこから抜き出して取得する
 */
export interface PagerTrainInformations {
    data: {
        [key: string]: PagerTrainInformation
    }
}

/**
 * 1本前,1本後の列車の取得に使用する1列車の列車情報
 */
export interface PagerTrainInformation {
    dep: string
    next: string
    prev: string
}
