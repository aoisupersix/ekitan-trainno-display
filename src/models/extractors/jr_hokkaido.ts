import { TrainNameNoExtractor } from './types'
import { lastThreeDigitsWithOffset } from './helpers'
import '../../utilities/trainno_util'

/**
 * JR北海道在来線特急・快速の号数取得処理定義
 */
export const jrHokkaidoExtractors: TrainNameNoExtractor[] = [
    // 快速エアポート(区間快速・特別快速含む)
    // 号数=列車番号の下3桁-800 (ex. エアポート11号: 3811M, 特別快速エアポート41号: 4841M)
    {
        name: /^(快速|区間快速|特別快速)?エアポート$/,
        extract: lastThreeDigitsWithOffset(800),
    },
    // 北斗
    {
        name: '北斗',
        extract: (trainNo) => {
            // 臨時北斗
            if (trainNo === '8032D') {
                return '84'
            } else if (trainNo === '8031D') {
                return '91'
            } else if (trainNo === '8036D') {
                return '86'
            } else if (trainNo === '8033D') {
                return '95'
            }

            if (trainNo.substr(0, 1) === '6') {
                // 曜日運休 60XXD
                // 先頭の6を削除
                trainNo = trainNo.slice(1)
            }

            // 通常 XXD
            return trainNo.removeEndAlphabet().suppressZero()
        },
    },
    // とかち
    {
        name: 'とかち',
        extract: (trainNo) => {
            // 31D~40D
            const no = trainNo.removeEndAlphabet().toInt()
            const nameNo = no - 30
            return nameNo.toString()
        },
    },
    // おおぞら
    {
        name: 'おおぞら',
        extract: (trainNo) =>
            // 4001D~4012D
            trainNo.removeEndAlphabet().slice(1).suppressZero(),
    },
    // サロベツ
    {
        name: 'サロベツ',
        extract: (trainNo) => {
            if (trainNo.length === 5) {
                // 曜日運休 60XXD
                // 先頭の6を削除
                trainNo = trainNo.slice(1)
            }

            // 61D~64D
            const no = trainNo.removeEndAlphabet().toInt()
            const nameNo = no - 60
            return nameNo.toString()
        },
    },
    // オホーツク
    {
        name: 'オホーツク',
        extract: (trainNo) => {
            // 71D~74D
            const no = trainNo.removeEndAlphabet().toInt()
            const nameNo = no - 70
            return nameNo.toString()
        },
    },
    // 大雪
    {
        name: '大雪',
        extract: (trainNo) => {
            if (trainNo.substr(0, 1) === '6') {
                // 曜日運休 60XXD
                // 先頭の6を削除
                trainNo = trainNo.slice(1)
            }

            // 81D~84D
            const no = trainNo.removeEndAlphabet().toInt()
            const nameNo = no - 80
            return nameNo.toString()
        },
    },
    // すずらん・カムイ・ライラック
    {
        name: /(すずらん|カムイ|ライラック)/,
        extract: (trainNo) =>
            trainNo.removeEndAlphabet().slice(1).suppressZero(),
    },
]
