import { extractTrainNameNo } from '../../../models/trainnameno_extractor'

const testExtractTrainNameNoName = '$trainName($trainNo)の号数は$trainNameNo'

const testExtractTrainNameNo = ({ trainName, trainNo, trainNameNo }) => {
    expect(extractTrainNameNo(trainName, trainNo)).toBe(trainNameNo)
}

describe('私鉄特急', () => {
    describe('小田急ロマンスカー', () => {
        // 実データ: 小田急公式時刻表(平日下り)の列車番号欄より
        test.each`
            trainName   | trainNo  | trainNameNo
            ${'はこね'} | ${'301'} | ${'1'}
            ${'はこね'} | ${'3'}   | ${'3'}
            ${'はこね'} | ${'5'}   | ${'5'}
            ${'はこね'} | ${'7'}   | ${'7'}
            ${'はこね'} | ${'9'}   | ${'9'}
            ${'はこね'} | ${'11'}  | ${'11'}
            ${'はこね'} | ${'721'} | ${'21'}
            ${'はこね'} | ${'723'} | ${'23'}
            ${'はこね'} | ${'725'} | ${'25'}
            ${'はこね'} | ${'727'} | ${'27'}
            ${'はこね'} | ${'741'} | ${'41'}
            ${'はこね'} | ${'771'} | ${'71'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('小田急ロマンスカー(さがみ・えのしま・ふじさん)', () => {
        // 実データ: 小田急公式時刻表(平日下り)の列車番号欄より
        test.each`
            trainName   | trainNo  | trainNameNo
            ${'さがみ'} | ${'351'} | ${'51'}
            ${'さがみ'} | ${'353'} | ${'53'}
            ${'さがみ'} | ${'791'} | ${'91'}
            ${'さがみ'} | ${'293'} | ${'93'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('えのしま', () => {
        // 実データ: 小田急公式時刻表(平日下り)の列車番号欄より
        test.each`
            trainName     | trainNo  | trainNameNo
            ${'えのしま'} | ${'501'} | ${'1'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('ふじさん', () => {
        // 実データ: 小田急公式時刻表(平日下り)の列車番号欄より
        test.each`
            trainName     | trainNo    | trainNameNo
            ${'ふじさん'} | ${'0401M'} | ${'1'}
            ${'ふじさん'} | ${'0403M'} | ${'3'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('メトロはこね', () => {
        // 実データ: 小田急公式時刻表(平日下り)の列車番号欄より
        test.each`
            trainName         | trainNo  | trainNameNo
            ${'メトロはこね'} | ${'421'} | ${'21'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('ホームウェイ', () => {
        // 実データ: 小田急公式時刻表(平日下り)の列車番号欄より
        test.each`
            trainName         | trainNo  | trainNameNo
            ${'ホームウェイ'} | ${'605'} | ${'5'}
            ${'ホームウェイ'} | ${'607'} | ${'7'}
            ${'ホームウェイ'} | ${'609'} | ${'9'}
            ${'ホームウェイ'} | ${'683'} | ${'83'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('メトロホームウェイ', () => {
        // 実データ: 小田急公式時刻表(平日下り)の列車番号欄より
        test.each`
            trainName               | trainNo  | trainNameNo
            ${'メトロホームウェイ'} | ${'641'} | ${'41'}
            ${'メトロホームウェイ'} | ${'643'} | ${'43'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('モーニングウェイ', () => {
        // 規則: 号数=列車番号の下2桁
        test.each`
            trainName             | trainNo  | trainNameNo
            ${'モーニングウェイ'} | ${'602'} | ${'2'}
            ${'モーニングウェイ'} | ${'660'} | ${'60'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('スーパーはこね', () => {
        // 規則: 号数=列車番号の下2桁
        test.each`
            trainName           | trainNo  | trainNameNo
            ${'スーパーはこね'} | ${'113'} | ${'13'}
            ${'スーパーはこね'} | ${'815'} | ${'15'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('東武特急(けごん・りょうもう系)', () => {
        // 実データ: 駅探(浅草発平日)の列車番号より。号数=下2桁
        test.each`
            trainName           | trainNo   | trainNameNo
            ${'リバティけごん'} | ${'1001'} | ${'1'}
            ${'リバティけごん'} | ${'1013'} | ${'13'}
            ${'リバティけごん'} | ${'1019'} | ${'19'}
            ${'リバティけごん'} | ${'1027'} | ${'27'}
            ${'リバティけごん'} | ${'1031'} | ${'31'}
            ${'リバティけごん'} | ${'1043'} | ${'43'}
            ${'リバティけごん'} | ${'1047'} | ${'47'}
            ${'リバティけごん'} | ${'1049'} | ${'49'}
            ${'リバティけごん'} | ${'1255'} | ${'55'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('けごん', () => {
        // 実データ: 駅探(浅草発平日)の列車番号より
        test.each`
            trainName   | trainNo   | trainNameNo
            ${'けごん'} | ${'1021'} | ${'21'}
            ${'けごん'} | ${'1025'} | ${'25'}
            ${'けごん'} | ${'1037'} | ${'37'}
            ${'けごん'} | ${'1051'} | ${'51'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('りょうもう', () => {
        // 実データ: 駅探(浅草発平日)の列車番号より
        test.each`
            trainName       | trainNo   | trainNameNo
            ${'りょうもう'} | ${'1803'} | ${'3'}
            ${'りょうもう'} | ${'1805'} | ${'5'}
            ${'りょうもう'} | ${'1807'} | ${'7'}
            ${'りょうもう'} | ${'1811'} | ${'11'}
            ${'りょうもう'} | ${'1421'} | ${'21'}
            ${'りょうもう'} | ${'1447'} | ${'47'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('リバティりょうもう', () => {
        // 実データ: 駅探(浅草発平日)の列車番号より
        test.each`
            trainName               | trainNo   | trainNameNo
            ${'リバティりょうもう'} | ${'1801'} | ${'1'}
            ${'リバティりょうもう'} | ${'1409'} | ${'9'}
            ${'リバティりょうもう'} | ${'1813'} | ${'13'}
            ${'リバティりょうもう'} | ${'1339'} | ${'39'}
            ${'リバティりょうもう'} | ${'1643'} | ${'43'}
            ${'リバティりょうもう'} | ${'1549'} | ${'49'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('きぬ(100号台)', () => {
        // 実データ: 駅探(浅草発平日)の列車番号より。号数=下2桁+100
        test.each`
            trainName | trainNo   | trainNameNo
            ${'きぬ'} | ${'1139'} | ${'139'}
            ${'きぬ'} | ${'1141'} | ${'141'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('リバティきぬ', () => {
        // 実データ: 駅探(浅草発平日)の列車番号より
        test.each`
            trainName         | trainNo   | trainNameNo
            ${'リバティきぬ'} | ${'1105'} | ${'105'}
            ${'リバティきぬ'} | ${'1109'} | ${'109'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('リバティ会津', () => {
        // 規則: リバティけごんと併結で号数=下2桁+100
        test.each`
            trainName         | trainNo   | trainNameNo
            ${'リバティ会津'} | ${'1001'} | ${'101'}
            ${'リバティ会津'} | ${'1013'} | ${'113'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('西武特急(ちちぶ・むさし)', () => {
        // 実データ: 駅探(池袋発平日)の列車番号より。ちちぶ・むさし通しの号数=列車番号
        test.each`
            trainName   | trainNo | trainNameNo
            ${'ちちぶ'} | ${'3'}  | ${'3'}
            ${'ちちぶ'} | ${'5'}  | ${'5'}
            ${'ちちぶ'} | ${'7'}  | ${'7'}
            ${'ちちぶ'} | ${'9'}  | ${'9'}
            ${'ちちぶ'} | ${'11'} | ${'11'}
            ${'ちちぶ'} | ${'25'} | ${'25'}
            ${'ちちぶ'} | ${'45'} | ${'45'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('むさし', () => {
        // 実データ: 駅探(池袋発平日)の列車番号より
        test.each`
            trainName   | trainNo | trainNameNo
            ${'むさし'} | ${'1'}  | ${'1'}
            ${'むさし'} | ${'23'} | ${'23'}
            ${'むさし'} | ${'27'} | ${'27'}
            ${'むさし'} | ${'31'} | ${'31'}
            ${'むさし'} | ${'55'} | ${'55'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })

    describe('特急ちちぶ表記', () => {
        // 駅探の種別表記が「特急ちちぶ」の場合も対応
        test.each`
            trainName       | trainNo | trainNameNo
            ${'特急ちちぶ'} | ${'13'} | ${'13'}
        `(testExtractTrainNameNoName, testExtractTrainNameNo)
    })
})
