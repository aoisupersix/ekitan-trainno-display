import { extractTrainNameNo } from '../../models/trainnameno_extractor'

describe('extractTrainNameNo()', () => {
    test('未対応の列車名の場合はnullを返す', () => {
        expect(extractTrainNameNo('謎の列車', '1M')).toBeNull()
    })

    test('「ときわ」は上越新幹線「とき」として判定されない', () => {
        // ときわ95号(9095M)を上越新幹線の定義で処理すると誤った号数になるため
        expect(extractTrainNameNo('ときわ', '9095M')).toBe('95')
    })

    test('「さくらライナー」は九州新幹線「さくら」として判定されない', () => {
        expect(extractTrainNameNo('さくらライナー', '1234')).toBeNull()
    })
})
