import {
    findPagerTrainInformationFromDep,
    getPagerTrainInformations,
    PagerTrainInformations,
} from '../../models/pager_train_informations'

describe('pager_train_informations', () => {
    describe('getPagerTrainInformations()', () => {
        let trainInfoElement: HTMLElement
        let trainInfos: PagerTrainInformations

        beforeEach(() => {
            trainInfoElement = document.createElement('script')
            document.head.appendChild(trainInfoElement)
            trainInfoElement.textContent = `
            $(function(){
                //ページャ用データを取得
                var data_pager = JSON.parse('{"data":{"1234567-1234-1234M":{"dep":"0720","prev":"1234567-1234-1233M","next":"1234567-1234-1235M"}}}').data;
            }`

            trainInfos = {
                data: {
                    '1234567-1234-1234M': {
                        dep: '0720',
                        prev: '1234567-1234-1233M',
                        next: '1234567-1234-1235M',
                    },
                },
            }
        })

        afterEach(() => {
            document.head.innerHTML = ''
            document.body.innerHTML = ''
        })

        it('scriptタグが存在しない場合はnullを返す', () => {
            expect(getPagerTrainInformations(document.body)).toBeNull()
        })

        it('scriptタグは存在するが列車情報が存在しない場合はnullを返す', () => {
            trainInfoElement.textContent = 'other script;'
            expect(getPagerTrainInformations(document.head)).toBeNull()
        })

        it('列車情報がJSONではない場合はnullを返す', () => {
            trainInfoElement.textContent = `
            $(function(){
                var data_pager = JSON.parse('not json').data;
            }`
            expect(getPagerTrainInformations(document.head)).toBeNull()
        })

        it('列車情報が不正なJSONの場合はnullを返す', () => {
            trainInfoElement.textContent = `
            $(function(){
                var data_pager = JSON.parse('{"data":"invalid json"}').data;
            }`
            expect(getPagerTrainInformations(document.head)).toBeNull()
        })

        it('列車情報の取得に成功した場合はPagerTrainInformationsを返す', () => {
            expect(getPagerTrainInformations(document.head)).toStrictEqual(
                trainInfos
            )
        })
    })
    describe('findPagerTrainInformationFromDep()', () => {
        let trainInfos: PagerTrainInformations

        beforeEach(() => {
            trainInfos = {
                data: {
                    '1234567-1234-1234M': {
                        dep: '0720',
                        prev: '1234567-1234-1233M',
                        next: '1234567-1234-1235M',
                    },
                    '1234567-1234-1235M': {
                        dep: '0730',
                        prev: '1234567-1234-1234M',
                        next: '1234567-1234-1236M',
                    },
                },
            }
        })

        it('列車情報が空の場合はnullを返す', () => {
            const infos: PagerTrainInformations = {
                data: {},
            }
            expect(findPagerTrainInformationFromDep(infos, '0000')).toBeNull()
        })

        it('出発時刻が一致する列車情報が存在しない場合はnullを返す', () => {
            expect(
                findPagerTrainInformationFromDep(trainInfos, '0000')
            ).toBeNull()
        })

        it('出発時刻が一致する列車情報が存在する場合は列車情報を返す', () => {
            const result = findPagerTrainInformationFromDep(trainInfos, '0720')
            expect(result).toBeDefined()
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const [tx, info] = result!
            expect(tx).toBe('1234567-1234-1234M')
            expect(info).toStrictEqual({
                dep: '0720',
                prev: '1234567-1234-1233M',
                next: '1234567-1234-1235M',
            })
        })
    })
})
