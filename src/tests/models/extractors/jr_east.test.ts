import { extractTrainNameNo } from '../../../models/trainnameno_extractor'

const testExtractTrainNameNoName = '$trainName($trainNo)の号数は$trainNameNo'

const testExtractTrainNameNo = ({ trainName, trainNo, trainNameNo }) => {
    expect(extractTrainNameNo(trainName, trainNo)).toBe(trainNameNo)
}

describe('JR東日本特急', () => {
    describe('中央線特急', () => {
        test.each`
            trainName   | trainNo    | trainNameNo
            ${'あずさ'} | ${'1M'}    | ${'1'}
            ${'あずさ'} | ${'5004M'} | ${'4'}
            ${'あずさ'} | ${'5055M'} | ${'55'}
            ${'あずさ'} | ${'8084M'} | ${'84'}
            ${'あずさ'} | ${'9078M'} | ${'78'}
            ${'かいじ'} | ${'5102M'} | ${'2'}
            ${'かいじ'} | ${'5147M'} | ${'47'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('常磐線特急', () => {
        test.each`
            trainName   | trainNo    | trainNameNo
            ${'ひたち'} | ${'1M'}    | ${'1'}
            ${'ひたち'} | ${'30M'}   | ${'30'}
            ${'ときわ'} | ${'51M'}   | ${'51'}
            ${'ときわ'} | ${'86M'}   | ${'86'}
            ${'ときわ'} | ${'9095M'} | ${'95'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('高崎線特急', () => {
        test.each`
            trainName       | trainNo    | trainNameNo
            ${'草津・四万'} | ${'3001M'} | ${'1'}
            ${'草津・四万'} | ${'4034M'} | ${'34'}
            ${'あかぎ'}     | ${'4004M'} | ${'4'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('房総・成田特急', () => {
        test.each`
            trainName             | trainNo    | trainNameNo
            ${'しおさい'}         | ${'4001M'} | ${'1'}
            ${'しおさい'}         | ${'4014M'} | ${'14'}
            ${'さざなみ'}         | ${'1004M'} | ${'4'}
            ${'わかしお'}         | ${'1051M'} | ${'1'}
            ${'わかしお'}         | ${'1070M'} | ${'20'}
            ${'新宿わかしお'}     | ${'9053M'} | ${'1'}
            ${'新宿わかしお'}     | ${'9056M'} | ${'2'}
            ${'新宿さざなみ'}     | ${'9043M'} | ${'1'}
            ${'新宿さざなみ'}     | ${'9046M'} | ${'4'}
            ${'成田エクスプレス'} | ${'2001M'} | ${'1'}
            ${'成田エクスプレス'} | ${'2054M'} | ${'54'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)

        test('新宿わかしおの未知の列車番号はnullを返す', () => {
            expect(extractTrainNameNo('新宿わかしお', '9999M')).toBeNull()
        })
    })

    describe('伊豆特急', () => {
        test.each`
            trainName             | trainNo    | trainNameNo
            ${'踊り子'}           | ${'3021M'} | ${'1'}
            ${'踊り子'}           | ${'3031M'} | ${'11'}
            ${'踊り子'}           | ${'8027M'} | ${'7'}
            ${'踊り子'}           | ${'8053M'} | ${'53'}
            ${'踊り子'}           | ${'8092M'} | ${'12'}
            ${'踊り子'}           | ${'8093M'} | ${'3'}
            ${'踊り子'}           | ${'8095M'} | ${'55'}
            ${'サフィール踊り子'} | ${'3001M'} | ${'1'}
            ${'サフィール踊り子'} | ${'8004M'} | ${'4'}
            ${'サフィール踊り子'} | ${'8015M'} | ${'5'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('羽越・信越特急', () => {
        test.each`
            trainName     | trainNo  | trainNameNo
            ${'いなほ'}   | ${'1M'}  | ${'1'}
            ${'いなほ'}   | ${'14M'} | ${'14'}
            ${'しらゆき'} | ${'51M'} | ${'1'}
            ${'しらゆき'} | ${'58M'} | ${'8'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('奥羽特急', () => {
        test.each`
            trainName           | trainNo    | trainNameNo
            ${'つがる'}         | ${'2041M'} | ${'41'}
            ${'つがる'}         | ${'2044M'} | ${'44'}
            ${'スーパーつがる'} | ${'2021M'} | ${'1'}
            ${'スーパーつがる'} | ${'2022M'} | ${'2'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })
})
