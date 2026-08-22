import { TrainNameNoExtractor } from './types'
import { shinkansenExtractors } from './shinkansen'
import { jrHokkaidoExtractors } from './jr_hokkaido'
import { jrEastExtractors } from './jr_east'
import { jrCentralExtractors } from './jr_central'
import { jrWestExtractors } from './jr_west'
import { jrShikokuExtractors } from './jr_shikoku'
import { jrKyushuExtractors } from './jr_kyushu'
import { privateRailwayExtractors } from './private_railways'

/**
 * 列車の号数取得処理定義
 * 先頭から順に列車名の一致判定を行うため、部分一致の正規表現を含む新幹線の定義は
 * 在来線特急の後に置きます(ex. 「とき」が「ときわ」に一致しないように)
 */
export const extractors: TrainNameNoExtractor[] = [
    ...jrHokkaidoExtractors,
    ...jrEastExtractors,
    ...jrCentralExtractors,
    ...jrWestExtractors,
    ...jrShikokuExtractors,
    ...jrKyushuExtractors,
    ...privateRailwayExtractors,
    ...shinkansenExtractors,
]

export { TrainNameNoExtractor } from './types'
