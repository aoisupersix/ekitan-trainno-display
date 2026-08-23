import { TrainNameNoExtractor } from './types'
import {
    lastThreeDigits,
    lastThreeDigitsWithOffset,
    trainNoNumber,
} from './helpers'

/**
 * JR西日本在来線特急の号数取得処理定義
 * 号数と列車番号の対応はJR西日本の列車走行位置APIのデータおよびWikipediaの付番規則を元にしています。
 */
export const jrWestExtractors: TrainNameNoExtractor[] = [
    // #region 北陸・東海道特急
    // サンダーバード(4000番台+号数: 4001M~)
    {
        name: 'サンダーバード',
        extract: lastThreeDigits,
    },
    // しらさぎ(号数そのまま)
    {
        name: 'しらさぎ',
        extract: lastThreeDigits,
    },
    // #endregion

    // #region 北近畿特急
    // こうのとり(3000番台+号数)
    {
        name: 'こうのとり',
        extract: lastThreeDigits,
    },
    // きのさき(5000番台+号数)
    {
        name: 'きのさき',
        extract: lastThreeDigits,
    },
    // まいづる(3040番台+号数: 3041M~)
    {
        name: 'まいづる',
        extract: lastThreeDigitsWithOffset(40),
    },
    // はしだて(5080番台+号数: 5081M~)
    {
        name: 'はしだて',
        extract: lastThreeDigitsWithOffset(80),
    },
    // はまかぜ(号数そのまま, 延長運転: 8000番台+号数, 臨時: 9000番台+号数)
    {
        name: 'はまかぜ',
        extract: lastThreeDigits,
    },
    // #endregion

    // #region 関西特急
    // くろしお(50番台+号数もしくは2050番台+号数)
    {
        name: 'くろしお',
        extract: lastThreeDigitsWithOffset(50),
    },
    // はるか(1000番台+号数)
    {
        name: 'はるか',
        extract: lastThreeDigits,
    },
    // #endregion

    // #region 山陰特急
    // やくも(1000番台+号数: 1001M~)
    {
        name: 'やくも',
        extract: lastThreeDigits,
    },
    // スーパーはくと(50番台+号数: 51D~) ※智頭急行直通
    {
        name: 'スーパーはくと',
        extract: lastThreeDigitsWithOffset(50),
    },
    // スーパーおき(3000番台+号数)
    {
        name: 'スーパーおき',
        extract: lastThreeDigits,
    },
    // スーパーまつかぜ(2000番台+号数)
    {
        name: 'スーパーまつかぜ',
        extract: lastThreeDigits,
    },
    // スーパーいなば
    // 上郡-鳥取間: 号数+70, 岡山-上郡間: 下り(偶数)が号数+2071, 上り(奇数)が号数+2069
    {
        name: 'スーパーいなば',
        extract: (trainNo) => {
            const no = trainNoNumber(trainNo)
            if (no >= 2000) {
                const nameNo = no % 2 === 0 ? no - 2071 : no - 2069
                return nameNo > 0 ? nameNo.toString() : null
            }

            const nameNo = (no % 1000) - 70
            return nameNo > 0 ? nameNo.toString() : null
        },
    },
    // #endregion
]
