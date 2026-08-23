import { extractors } from './extractors'

/**
 * 引数に指定された列車名と列車番号から列車の号数を取得します。
 * @param trainName 列車名
 * @param trainNo 列車番号
 * @returns 列車の号数が取得できた場合はその号数,取得できない場合はnullを返します
 */
export const extractTrainNameNo = (
    trainName: string,
    trainNo: string
): string | null => {
    const extractor = extractors.find((e) => {
        if (typeof e.name === 'string') {
            return e.name === trainName
        } else {
            return e.name.test(trainName)
        }
    })

    return extractor?.extract(trainNo) ?? null
}
