import { TrainNameNoExtractor } from './types'
import {
    lastThreeDigits,
    lastThreeDigitsWithOffset,
    trainNoNumber,
} from './helpers'

/**
 * JR四国在来線特急・快速の号数取得処理定義
 * 号数と列車番号の対応はWikipediaの付番規則を元にしています。
 */
export const jrShikokuExtractors: TrainNameNoExtractor[] = [
    // しおかぜ(号数そのまま)
    {
        name: 'しおかぜ',
        extract: lastThreeDigits,
    },
    // いしづち
    // しおかぜ併結: 1000番台+号数, 松山側単独運転(100番台号数): 1040番台+号数の下1桁
    {
        name: 'いしづち',
        extract: (trainNo) => {
            const no = trainNoNumber(trainNo) % 1000
            if (no >= 41 && no <= 49) {
                return (100 + no - 40).toString()
            }

            return lastThreeDigits(trainNo)
        },
    },
    // 宇和海(1050番台+号数)
    {
        name: '宇和海',
        extract: lastThreeDigitsWithOffset(50),
    },
    // 南風(号数+30: 31D~)
    {
        name: '南風',
        extract: lastThreeDigitsWithOffset(30),
    },
    // しまんと(2000番台+号数)
    {
        name: 'しまんと',
        extract: lastThreeDigits,
    },
    // あしずり(2070番台+号数)
    {
        name: 'あしずり',
        extract: lastThreeDigitsWithOffset(70),
    },
    // うずしお(3000番台+号数)
    {
        name: 'うずしお',
        extract: lastThreeDigits,
    },
    // 剣山(4000番台+号数)
    {
        name: '剣山',
        extract: lastThreeDigits,
    },
    // むろと(8050番台+号数)
    {
        name: 'むろと',
        extract: lastThreeDigitsWithOffset(50),
    },
    // 快速マリンライナー(3100番台+号数) ※JR西日本・JR四国直通
    {
        name: /^(快速)?マリンライナー$/,
        extract: lastThreeDigitsWithOffset(100),
    },
]
