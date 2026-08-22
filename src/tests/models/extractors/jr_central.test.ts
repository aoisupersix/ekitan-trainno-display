import { extractTrainNameNo } from '../../../models/trainnameno_extractor'

const testExtractTrainNameNoName = '$trainName($trainNo)の号数は$trainNameNo'

const testExtractTrainNameNo = ({ trainName, trainNo, trainNameNo }) => {
    expect(extractTrainNameNo(trainName, trainNo)).toBe(trainNameNo)
}

describe('JR東海特急', () => {
    test.each`
        trainName   | trainNo    | trainNameNo
        ${'しなの'} | ${'1001M'} | ${'1'}
        ${'しなの'} | ${'1026M'} | ${'26'}
    `(testExtractTrainNameNoName, testExtractTrainNameNo)
})
