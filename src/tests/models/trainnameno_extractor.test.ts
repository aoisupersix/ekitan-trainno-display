import { extractTrainNameNo } from '../../models/trainnameno_extractor'

const testExtractTrainNameNoName = '$trainName($trainNo)の号数は$trainNameNo'

const testExtractTrainNameNo = ({ trainName, trainNo, trainNameNo }) => {
    expect(extractTrainNameNo(trainName, trainNo)).toBe(trainNameNo)
}

describe('extractTrainNameNo()', () => {
    describe('東北新幹線', () => {
        test.each`
            trainName     | trainNo    | trainNameNo
            ${'はやぶさ'} | ${'8010B'} | ${'10'}
            ${'はやて'}   | ${'98B'}   | ${'98'}
            ${'やまびこ'} | ${'202B'}  | ${'202'}
            ${'なすの'}   | ${'284B'}  | ${'284'}
            ${'こまち'}   | ${'3040M'} | ${'40'}
            ${'つばさ'}   | ${'160M'}  | ${'160'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('北海道特急', () => {
        test.each`
            trainName       | trainNo    | trainNameNo
            ${'北斗'}       | ${'1D'}    | ${'1'}
            ${'北斗'}       | ${'13D'}   | ${'13'}
            ${'北斗'}       | ${'6005D'} | ${'5'}
            ${'北斗'}       | ${'8032D'} | ${'84'}
            ${'北斗'}       | ${'8031D'} | ${'91'}
            ${'北斗'}       | ${'8036D'} | ${'86'}
            ${'北斗'}       | ${'8033D'} | ${'95'}
            ${'とかち'}     | ${'31D'}   | ${'1'}
            ${'とかち'}     | ${'40D'}   | ${'10'}
            ${'おおぞら'}   | ${'4001D'} | ${'1'}
            ${'おおぞら'}   | ${'4012D'} | ${'12'}
            ${'サロベツ'}   | ${'61D'}   | ${'1'}
            ${'サロベツ'}   | ${'64D'}   | ${'4'}
            ${'オホーツク'} | ${'71D'}   | ${'1'}
            ${'オホーツク'} | ${'74D'}   | ${'4'}
            ${'大雪'}       | ${'81D'}   | ${'1'}
            ${'大雪'}       | ${'84D'}   | ${'4'}
            ${'すずらん'}   | ${'1001D'} | ${'1'}
            ${'すずらん'}   | ${'1012D'} | ${'12'}
            ${'ライラック'} | ${'3001M'} | ${'1'}
            ${'カムイ'}     | ${'3007M'} | ${'7'}
            ${'カムイ'}     | ${'3046M'} | ${'46'}
            ${'ライラック'} | ${'3048M'} | ${'48'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })
})
