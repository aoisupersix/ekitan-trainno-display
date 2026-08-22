import { TrainNameNoExtractor } from './types'
import { lastThreeDigits, trainNoNumber } from './helpers'

/**
 * JR東海在来線特急の号数取得処理定義
 */
export const jrCentralExtractors: TrainNameNoExtractor[] = [
    // しなの(1000番台+号数: 1001M~1026M)
    {
        name: 'しなの',
        extract: lastThreeDigits,
    },
    // ひだ
    {
        name: 'ひだ',
        extract: (trainNo) => {
            const no = trainNoNumber(trainNo)
            if (no >= 2000) {
                // 大阪発着系統(2000番台+号数)
                return (no - 2000).toString()
            }

            // 名古屋発着系統は号数+20(ex. ひだ1号: 1021D)
            const nameNo = (no % 1000) - 20
            return nameNo > 0 ? nameNo.toString() : null
        },
    },
    // 南紀(3000番台+号数: 3001D~3008D)
    {
        name: '南紀',
        extract: lastThreeDigits,
    },
]
