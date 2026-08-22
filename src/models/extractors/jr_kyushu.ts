import { TrainNameNoExtractor } from './types'
import {
    lastThreeDigits,
    lastThreeDigitsWithOffset,
    lastTwoDigitsWithOffset,
    trainNoNumber,
} from './helpers'

/**
 * JR九州在来線特急の号数取得処理定義
 * 号数と列車番号の対応はJR九州公式の駅別時刻表と駅探の列車番号の突き合わせ、
 * およびWikipediaの付番規則を元にしています。
 */
export const jrKyushuExtractors: TrainNameNoExtractor[] = [
    // #region 日豊本線特急
    // ソニック(3000番台+号数, 200号台は3080番台: ソニック201号=3081M)
    {
        name: 'ソニック',
        extract: (trainNo) => {
            const no = trainNoNumber(trainNo) % 1000
            if (no >= 81 && no <= 99) {
                // 200号台(深夜・早朝の区間列車)
                return (no + 120).toString()
            }

            return lastThreeDigits(trainNo)
        },
    },
    // にちりん(5000番台+号数, 102号のみ5092M)
    {
        name: 'にちりん',
        extract: (trainNo) => {
            if (trainNo === '5092M') {
                return '102'
            }

            return lastThreeDigits(trainNo)
        },
    },
    // にちりんシーガイア(5000番台+号数)
    {
        name: 'にちりんシーガイア',
        extract: lastThreeDigits,
    },
    // ひゅうが(5070番台+号数)
    {
        name: 'ひゅうが',
        extract: lastThreeDigitsWithOffset(70),
    },
    // きりしま(6000番台+号数)
    {
        name: 'きりしま',
        extract: lastThreeDigits,
    },
    // #endregion

    // #region 鹿児島本線・長崎本線特急
    // リレーかもめ(2000番台H もしくは 4090番台M+号数)
    {
        name: 'リレーかもめ',
        extract: lastThreeDigits,
    },
    // みどり(4000番台M もしくはハウステンボス併結の6000番台H+号数)
    {
        name: 'みどり',
        extract: lastThreeDigits,
    },
    {
        name: 'みどり（リレーかもめ）',
        extract: lastThreeDigits,
    },
    // ハウステンボス(6000番台H+号数)
    {
        name: 'ハウステンボス',
        extract: lastThreeDigits,
    },
    // かささぎ(1000番台+号数下2桁, 号数は100号台. 201号のみ1071M)
    {
        name: 'かささぎ',
        extract: (trainNo) => {
            if (trainNo === '1071M') {
                return '201'
            }

            return lastTwoDigitsWithOffset(100)(trainNo)
        },
    },
    // きらめき(50番台+号数)
    {
        name: 'きらめき',
        extract: lastThreeDigitsWithOffset(50),
    },
    // #endregion

    // #region 久大本線特急
    // ゆふ(80番台+号数: 81D~)
    {
        name: 'ゆふ',
        extract: lastThreeDigitsWithOffset(80),
    },
    // ゆふいんの森(8000番台+号数)
    {
        name: 'ゆふいんの森',
        extract: lastThreeDigits,
    },
    // #endregion
]
