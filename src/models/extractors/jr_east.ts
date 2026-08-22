import { TrainNameNoExtractor } from './types'
import {
    lastThreeDigits,
    lastThreeDigitsWithOffset,
    lastTwoDigitsWithOffset,
    trainNoNumber,
} from './helpers'

/**
 * JR東日本在来線特急の号数取得処理定義
 * 号数と列車番号の対応はJR東日本の列車走行位置サービス(どこトレ)のダイヤデータを元にしています。
 */
export const jrEastExtractors: TrainNameNoExtractor[] = [
    // #region 中央線特急
    // あずさ
    // 新宿発着: 号数そのまま(1M~)もしくは5000番台(5041M~),
    // 千葉発着: 2100番台(2103M~), 臨時: 8000/9000番台+号数
    {
        name: 'あずさ',
        extract: lastTwoDigitsWithOffset(0),
    },
    // かいじ
    // 5100番台(5102M~5159M)もしくは千葉発着の2100番台+号数
    {
        name: 'かいじ',
        extract: lastTwoDigitsWithOffset(0),
    },
    // #endregion

    // #region 東海道線特急
    // 湘南(3070番台+号数: 3071M~3089M)
    {
        name: '湘南',
        extract: lastThreeDigitsWithOffset(70),
    },
    // #endregion

    // #region 常磐線特急
    // ひたち(1M~30M), ときわ(51M~86M, 臨時: 9095M)
    {
        name: 'ひたち',
        extract: lastThreeDigits,
    },
    {
        name: 'ときわ',
        extract: lastThreeDigits,
    },
    // #endregion

    // #region 高崎線特急
    // 草津・四万(3001M~3004M, 30号台: 4031M~4034M)
    {
        name: '草津・四万',
        extract: lastThreeDigits,
    },
    // あかぎ
    {
        name: 'あかぎ',
        extract: lastThreeDigits,
    },
    // #endregion

    // #region 房総・成田特急
    // しおさい(4001M~4014M)
    {
        name: 'しおさい',
        extract: lastThreeDigits,
    },
    // さざなみ(1000番台+号数)
    {
        name: 'さざなみ',
        extract: lastThreeDigits,
    },
    // わかしお(1050番台+号数: 1051M~1070M)
    {
        name: 'わかしお',
        extract: lastThreeDigitsWithOffset(50),
    },
    // 新宿わかしお・新宿さざなみ(臨時のため個別対応)
    {
        name: '新宿わかしお',
        extract: (trainNo) => {
            const nameNos: Record<string, string> = {
                '9053M': '1',
                '9056M': '2',
            }
            return nameNos[trainNo] ?? null
        },
    },
    {
        name: '新宿さざなみ',
        extract: (trainNo) => {
            const nameNos: Record<string, string> = {
                '9043M': '1',
                '9046M': '4',
            }
            return nameNos[trainNo] ?? null
        },
    },
    // 成田エクスプレス(2000番台+号数: 2001M~2054M)
    {
        name: '成田エクスプレス',
        extract: lastThreeDigits,
    },
    // #endregion

    // #region 伊豆特急
    // 踊り子
    {
        name: '踊り子',
        extract: (trainNo) => {
            // 規則性のない臨時列車の個別対応
            const irregulars: Record<string, string> = {
                '8092M': '12',
                '8093M': '3',
                '8095M': '55',
            }
            if (irregulars[trainNo] !== undefined) {
                return irregulars[trainNo]
            }

            const no = trainNoNumber(trainNo)
            if (no >= 8050) {
                // 臨時(50号台) 8053M~8061M
                return lastThreeDigits(trainNo)
            }
            if (no >= 8000) {
                // 臨時(1桁号数帯) 8027M~8028M
                return (no - 8020).toString()
            }

            // 定期 3021M~3031M
            return (no - 3020).toString()
        },
    },
    // サフィール踊り子(定期: 3001M~3002M, 臨時: 8000番台+号数)
    {
        name: 'サフィール踊り子',
        extract: (trainNo) => {
            // 規則性のない臨時列車の個別対応
            if (trainNo === '8015M') {
                return '5'
            }

            return lastThreeDigits(trainNo)
        },
    },
    // #endregion

    // #region 羽越・信越特急
    // いなほ(1M~14M)
    {
        name: 'いなほ',
        extract: lastThreeDigits,
    },
    // しらゆき(50番台+号数: 51M~58M)
    {
        name: 'しらゆき',
        extract: lastThreeDigitsWithOffset(50),
    },
    // #endregion

    // #region 奥羽特急
    // つがる(2041M~2044M)
    {
        name: 'つがる',
        extract: lastThreeDigits,
    },
    // スーパーつがる(2020番台+号数: 2021M~2022M)
    {
        name: 'スーパーつがる',
        extract: lastThreeDigitsWithOffset(20),
    },
    // #endregion
]
