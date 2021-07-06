import { extractTrainNameNo } from '../../models/trainnameno_extractor'

describe('extractTrainNameNo()', () => {
    describe('東北新幹線', () => {
        test.each`
            trainName     | trainNo    | trainNameNo
            ${'はやぶさ'} | ${'8010B'} | ${'10'}
        `(
            '$trainName($trainNo)の号数は$trainNameNo',
            ({ trainName, trainNo, trainNameNo }) => {
                expect(extractTrainNameNo(trainName, trainNo)).toBe(trainNameNo)
            }
        )
    })
})
