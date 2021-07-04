import '../utilities/trainno_util'

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

/**
 * とある列車名の列車番号から号数を取得する処理を示すインタフェース
 */
interface TrainNameNoExtractor {
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

/**
 * 列車の号数取得処理定義
 */
const extractors: TrainNameNoExtractor[] = [
    // #region 新幹線
    // 東北・北海道新幹線
    {
        name: /(はやぶさ|はやて|やまびこ|なすの|こまち|つばさ)/,
        extract: (trainNo) =>
            trainNo
                .removeEndAlphabet()
                .paddingZero(4) // 5桁に左から桁埋め 0123M
                .slice(1) // 右3桁を抜き出し 123
                .suppressZero(), // 先頭の0を削除
    },
    // #endregion

    // #region 北海道
    // 北斗
    {
        name: '北斗',
        extract: (trainNo) => {
            // 臨時北斗
            if (trainNo === '8032D') {
                return '84'
            } else if (trainNo === '8031D') {
                return '91'
            } else if (trainNo === '8036D') {
                return '86'
            } else if (trainNo === '8033D') {
                return '95'
            }

            if (trainNo.substr(0, 1) === '6') {
                // 曜日運休 60XXD
                // 先頭の6を削除
                trainNo = trainNo.slice(1)
            }

            // 通常 XXD
            return trainNo.removeEndAlphabet().suppressZero()
        },
    },
    // とかち
    {
        name: 'とかち',
        extract: (trainNo) => {
            // 31D~40D
            const no = trainNo.removeEndAlphabet().toInt()
            const nameNo = no - 30
            return nameNo.toString()
        },
    },
    // おおぞら
    {
        name: 'おおぞら',
        extract: (trainNo) =>
            // 4001D~4012D
            trainNo.removeEndAlphabet().slice(1).suppressZero(),
    },
    // サロベツ
    {
        name: 'サロベツ',
        extract: (trainNo) => {
            if (trainNo.length === 5) {
                // 曜日運休 60XXD
                // 先頭の6を削除
                trainNo = trainNo.slice(1)
            }

            // 61D~64D
            const no = trainNo.removeEndAlphabet().toInt()
            const nameNo = no - 60
            return nameNo.toString()
        },
    },
    // オホーツク
    {
        name: 'オホーツク',
        extract: (trainNo) => {
            // 71D~74D
            const no = trainNo.removeEndAlphabet().toInt()
            const nameNo = no - 70
            return nameNo.toString()
        },
    },
    // 大雪
    {
        name: '大雪',
        extract: (trainNo) => {
            if (trainNo.substr(0, 1) === '6') {
                // 曜日運休 60XXD
                // 先頭の6を削除
                trainNo = trainNo.slice(1)
            }

            // 81D~84D
            const no = trainNo.removeEndAlphabet().toInt()
            const nameNo = no - 80
            return nameNo.toString()
        },
    },
    // すずらん・カムイ・ライラック
    {
        name: /(すずらん|カムイ|ライラック)/,
        extract: (trainNo) =>
            trainNo.removeEndAlphabet().slice(1).suppressZero(),
    },
    // #endregion
]
