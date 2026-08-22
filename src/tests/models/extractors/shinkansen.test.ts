import { extractTrainNameNo } from '../../../models/trainnameno_extractor'

const testExtractTrainNameNoName = '$trainName($trainNo)の号数は$trainNameNo'

const testExtractTrainNameNo = ({ trainName, trainNo, trainNameNo }) => {
    expect(extractTrainNameNo(trainName, trainNo)).toBe(trainNameNo)
}

describe('新幹線', () => {
    describe('東北・北海道新幹線', () => {
        test.each`
            trainName     | trainNo    | trainNameNo
            ${'はやぶさ'} | ${'8010B'} | ${'10'}
            ${'はやて'}   | ${'98B'}   | ${'98'}
            ${'やまびこ'} | ${'202B'}  | ${'202'}
            ${'なすの'}   | ${'284B'}  | ${'284'}
            ${'こまち'}   | ${'3040M'} | ${'40'}
            ${'こまち'}   | ${'3095M'} | ${'95'}
            ${'つばさ'}   | ${'160M'}  | ${'160'}
            ${'つばさ'}   | ${'9088M'} | ${'88'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('上越新幹線', () => {
        test.each`
            trainName     | trainNo   | trainNameNo
            ${'とき'}     | ${'311C'} | ${'311'}
            ${'たにがわ'} | ${'402C'} | ${'402'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('北陸新幹線', () => {
        test.each`
            trainName     | trainNo   | trainNameNo
            ${'かがやき'} | ${'503E'} | ${'503'}
            ${'はくたか'} | ${'551E'} | ${'551'}
            ${'あさま'}   | ${'604E'} | ${'604'}
            ${'つるぎ'}   | ${'5E'}   | ${'5'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('東海道・山陽・九州・西九州新幹線', () => {
        test.each`
            trainName   | trainNo    | trainNameNo
            ${'のぞみ'} | ${'64A'}   | ${'64'}
            ${'のぞみ'} | ${'265A'}  | ${'265'}
            ${'ひかり'} | ${'503A'}  | ${'503'}
            ${'こだま'} | ${'708A'}  | ${'708'}
            ${'みずほ'} | ${'600A'}  | ${'600'}
            ${'さくら'} | ${'545A'}  | ${'545'}
            ${'つばめ'} | ${'5307A'} | ${'307'}
            ${'かもめ'} | ${'4G'}    | ${'4'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })
})
