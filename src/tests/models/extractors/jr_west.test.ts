import { extractTrainNameNo } from '../../../models/trainnameno_extractor'

const testExtractTrainNameNoName = '$trainName($trainNo)の号数は$trainNameNo'

const testExtractTrainNameNo = ({ trainName, trainNo, trainNameNo }) => {
    expect(extractTrainNameNo(trainName, trainNo)).toBe(trainNameNo)
}

describe('JR西日本特急', () => {
    test.each`
        trainName           | trainNo    | trainNameNo
        ${'サンダーバード'} | ${'4002M'} | ${'2'}
        ${'サンダーバード'} | ${'4003M'} | ${'3'}
        ${'しらさぎ'}       | ${'2M'}    | ${'2'}
        ${'くろしお'}       | ${'62M'}   | ${'12'}
        ${'くろしお'}       | ${'2056M'} | ${'6'}
        ${'くろしお'}       | ${'2060M'} | ${'10'}
        ${'こうのとり'}     | ${'3004M'} | ${'4'}
        ${'きのさき'}       | ${'5002M'} | ${'2'}
        ${'はるか'}         | ${'1001M'} | ${'1'}
        ${'はるか'}         | ${'1007M'} | ${'7'}
        ${'やくも'}         | ${'1024M'} | ${'24'}
        ${'スーパーはくと'} | ${'51D'}   | ${'1'}
    `(testExtractTrainNameNoName, testExtractTrainNameNo)
})
