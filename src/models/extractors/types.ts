/**
 * とある列車名の列車番号から号数を取得する処理を示すインタフェース
 */
export interface TrainNameNoExtractor {
    /**
     * このオブジェクトで号数が取得可能な列車名
     */
    name: string | RegExp

    /**
     * 引数に指定された列車番号から号数を取得します。
     * @param trainNo 列車番号
     * @returns 号数が取得できた場合はその号数,取得できない場合はnullを返します
     */
    extract: (trainNo: string) => string | null
}
