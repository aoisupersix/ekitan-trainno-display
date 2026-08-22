import { TrainNameNoExtractor } from './types'
import { lastThreeDigits } from './helpers'

/**
 * 新幹線の号数取得処理定義
 * 新幹線の列車番号は「号数+系統別のアルファベット」が基本で、
 * 臨時列車などは千の位以上に系統を示す数字が付くため、下3桁の抜き出しで号数が取得できます。
 * (ex. はやぶさ10号: 8010B, つばさ122号: 122M, かがやき503号: 503E, のぞみ64号: 64A)
 */
export const shinkansenExtractors: TrainNameNoExtractor[] = [
    // 東北・北海道新幹線(山形・秋田新幹線直通含む)
    {
        name: /(はやぶさ|はやて|やまびこ|なすの|こまち|つばさ)/,
        extract: lastThreeDigits,
    },
    // 上越新幹線
    // 「とき」が在来線特急「ときわ」に部分一致しないよう完全一致で判定します
    {
        name: /^(とき|たにがわ)$/,
        extract: lastThreeDigits,
    },
    // 北陸新幹線
    {
        name: /^(かがやき|はくたか|あさま|つるぎ)$/,
        extract: lastThreeDigits,
    },
    // 東海道・山陽・九州・西九州新幹線
    // 「さくら」が他社の「さくらライナー」などに部分一致しないよう完全一致で判定します
    {
        name: /^(のぞみ|ひかり|こだま|みずほ|さくら|つばめ|かもめ)$/,
        extract: lastThreeDigits,
    },
]
