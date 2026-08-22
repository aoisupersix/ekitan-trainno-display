import { TrainNameNoExtractor } from './types'
import { lastThreeDigits, lastThreeDigitsWithOffset } from './helpers'

/**
 * JR西日本在来線特急の号数取得処理定義
 * 号数と列車番号の対応はJR西日本の列車走行位置APIのデータを元にしています。
 */
export const jrWestExtractors: TrainNameNoExtractor[] = [
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
    // くろしお(50番台+号数もしくは2050番台+号数)
    {
        name: 'くろしお',
        extract: lastThreeDigitsWithOffset(50),
    },
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
    // はるか(1000番台+号数)
    {
        name: 'はるか',
        extract: lastThreeDigits,
    },
    // やくも(1000番台+号数)
    {
        name: 'やくも',
        extract: lastThreeDigits,
    },
    // スーパーはくと(50番台+号数: 51D~) ※智頭急行直通
    {
        name: 'スーパーはくと',
        extract: lastThreeDigitsWithOffset(50),
    },
]
