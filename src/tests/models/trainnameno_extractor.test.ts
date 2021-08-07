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
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })
})
