import { TrainNameNoExtractor } from './types'
import { lastThreeDigits } from './helpers'

/**
 * JR東海在来線特急の号数取得処理定義
 */
export const jrCentralExtractors: TrainNameNoExtractor[] = [
    // しなの(1000番台+号数: 1001M~1026M)
    {
        name: 'しなの',
        extract: lastThreeDigits,
    },
]
