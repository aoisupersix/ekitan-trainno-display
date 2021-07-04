export {}

declare global {
    interface String {
        /**
         * 文字列を数値に変換します。
         * @returns 数値に変換された文字列
         */
        toInt(): number

        /**
         * 引数に指定された桁数まで0で桁埋めします。
         * @param length 桁埋め後の文字列長
         * @returns 指定桁数まで0埋めした文字列
         */
        paddingZero(length: number): string

        /**
         * 文字列から先頭の0を除きます。
         * @returns 先頭の0を除いた文字列
         */
        suppressZero(): string

        /**
         * 文字列から末尾のアルファベットを削除します。
         * @returns 末尾のアルファベットを削除した文字列。末尾がアルファベットではない場合は文字列をそのまま返します
         */
        removeEndAlphabet(): string
    }
}

String.prototype.toInt = function () {
    return Number(this)
}

String.prototype.paddingZero = function (length) {
    return this.padStart(length, '0')
}

String.prototype.suppressZero = function () {
    return this.toInt().toString()
}

String.prototype.removeEndAlphabet = function () {
    if (!this.substr(-1, 1).match(/[A-Za-z]/)) {
        return this.valueOf() // 末尾がアルファベットではない
    }
    return this.slice(0, -1) // 末尾1文字を除去
}
