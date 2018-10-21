const maskText = (rawText, maskTemplate = '+X (XXX) XXX-XX-XX', allowOverflow = true) => {
    let output = ''
    if (!rawText) return ''
    for (let i = 0, j = 0; i <= maskTemplate.length; i++) {
        const templateChar = maskTemplate[i];
        if (templateChar === undefined) {
            if (allowOverflow && rawText[j] !== undefined) {
                return rawText
            } else {
                break;
            }
        } else if (templateChar === 'X') {
            inputChar = rawText[j++];
            if (inputChar) {
                output += inputChar;
            } else {
                break;
            }
        } else {
            output += templateChar;
        }
    }
    return output;
}

const assert = (testCase, statement) => {
    if (!statement) throw new Error('failed test: ' + testCase);
}

assert(
    'matches string to template on perfect conditions',
    maskText('79151234567') === '+7 (915) 123-45-67'
);

assert(
    'matches string to template on incomplete input (ends on the place for next character)',
    maskText('791512345') === '+7 (915) 123-45-'
);

assert(
    'if allowOverflow === true, returns original string on overflow',
    maskText('791512345678') === '791512345678'
);

assert(
    'if allowOverflow === false, returns original string on overflow',
    maskText('791512345678', 'XX XX XX', false) === '79 15 12'
);

assert(
    'works with different templates',
    maskText('TESTTESTTEST', 'XXXX XXXX XXXX!') === 'TEST TEST TEST!'
);