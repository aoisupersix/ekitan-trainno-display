import '../../utilities/trainno_util'

/**
 * 列車番号から末尾のアルファベットを除いた数値部分を取得します。
 * @param trainNo 列車番号
 * @returns 列車番号の数値部分
 */
export const trainNoNumber = (trainNo: string): number =>
    trainNo.removeEndAlphabet().toInt()

/**
 * 列車番号の下3桁を号数として取得します。
 * 多くの列車では号数がそのまま、もしくは千の位に系統・臨時を示す数字を付けて列車番号となるため、
 * 下3桁を抜き出すことで号数が取得できます。
 * @param trainNo 列車番号
 * @returns 号数
 */
export const lastThreeDigits = (trainNo: string): string =>
    trainNo
        .removeEndAlphabet()
        .paddingZero(4) // 4桁に左から桁埋め 0123
        .slice(1) // 右3桁を抜き出し 123
        .suppressZero() // 先頭の0を削除

/**
 * 列車番号の下3桁からオフセットを引いた値を号数として取得する処理を返します。
 * @param offset 下3桁から引くオフセット値
 * @returns 号数取得処理。号数が正の値にならない場合はnullを返します
 */
export const lastThreeDigitsWithOffset =
    (offset: number) =>
    (trainNo: string): string | null => {
        const nameNo = (trainNoNumber(trainNo) % 1000) - offset
        return nameNo > 0 ? nameNo.toString() : null
    }
