import { TrainNameNoExtractor } from './types'
import { lastThreeDigits, lastTwoDigitsWithOffset } from './helpers'

/**
 * 私鉄特急の号数取得処理定義
 * 号数と列車番号の対応は各社公式時刻表と駅探の列車番号の突き合わせを元にしています。
 */
export const privateRailwayExtractors: TrainNameNoExtractor[] = [
    // #region 小田急ロマンスカー
    // 全列車で号数=列車番号の下2桁(ex. はこね41号: 0741, メトロはこね21号: 0421, ふじさん1号: 0401M)
    {
        name: /^(スーパーはこね|メトロはこね|メトロえのしま|メトロホームウェイ|メトロモーニングウェイ|はこね|さがみ|えのしま|ふじさん|ホームウェイ|モーニングウェイ)$/,
        extract: lastTwoDigitsWithOffset(0),
    },
    // #endregion

    // #region 東武特急
    // けごん・りょうもう系: 号数=列車番号の下2桁(ex. リバティけごん1号: 1001, りょうもう3号: 1803)
    {
        name: /^(リバティけごん|リバティりょうもう|けごん|りょうもう)$/,
        extract: lastTwoDigitsWithOffset(0),
    },
    // きぬ・会津系: 号数は100号台で号数=列車番号の下2桁+100
    // (ex. リバティきぬ105号: 1105, リバティ会津101号: 1001)
    {
        name: /^(リバティきぬ|リバティ会津|きぬ)$/,
        extract: lastTwoDigitsWithOffset(100),
    },
    // #endregion

    // #region 西武特急
    // ちちぶ・むさし通しの発車順で号数=列車番号(ex. むさし1号: 1, ちちぶ3号: 3)
    {
        name: /^(特急)?(ちちぶ|むさし)$/,
        extract: lastThreeDigits,
    },
    // #endregion
]
