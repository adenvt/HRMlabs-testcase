var BigInt = require('big-integer')
var expect = require('chai').expect

describe('Test 1', () => {
    it('function that can reverse the sentences', () => {
        var input = 'HRM Labs is highly customized'
        var output = ''

        // Reverse Text with looping backward
        for (var i = input.length - 1; i >= 0; i--) {
            // last char (input length - 1)
            // OR
            // char after space
            // need to be uppercase
            var isNeedUpperCase = (i === input.length - 1) || (input[i + 1] === ' ')

            // if it need uppercase, convert to uppercase
            output += isNeedUpperCase ? input[i].toUpperCase() : input[i]
        }

        // alternatif using array built in function (split, reverse, join)
        // output = input
        //     .split('')
        //     .reverse()
        //     .join('')
        //     .split(' ')
        //     .map((word) => {
        //         return word[0].toUpperCase() + word.slice(1)
        //     })
        //     .join(' ')

        console.log('    input:', input)
        console.log('    output:', output)

        expect(output).to.equal('Dezimotsuc Ylhgih Si SbaL MRH')
    })
})

describe('Test 2', () => {
    it('Function that produces output in pig latin', () => {
        var input = 'Distruptor is a support heroes in dota.'
        var output = ''

        // Remove trailling dot
        // Then Split word into array
        var wordArr = input
            .substr(0, input.length - 1)
            .split(' ')

        // Map => looping and return new Array with pig latin
        var newArr = wordArr.map(function(word) {
            // Save First Char
            var firstChar = word[0]
            // Copy string without firstchar, add firstChar to last, and add 'es'
            return word.substr(1, word.length) + firstChar + 'es'
        })

        // Join array of pig latin word to produce the sentences,
        // don't forget add trailling dot.
        output = newArr.join(' ') + '.'

        // Actualy can chain method & simply like this
        // output = input
        //              .substr(0, input.length - 1)
        //              .split(' ')
        //              .map((word) => {
        //                 return word.substr(1, word.length) + word[0] + 'es'
        //              })
        //              .join(' ') + '.'

        console.log('    input:', input)
        console.log('    output:', output)

        expect(output).to.equal('istruptorDes sies aes upportses eroeshes nies otades.')
    })
})

describe('Test 3', () => {
    // Fibo sequence
    // in this test, i use library Big Integer,
    // because JS has limit Integer Size
    function fibo(n) {
        // f(0) = 0
        // f(1) = 1
        if (n < 2) {
            return BigInt(n)
        }

        // Actualy you can use recursive method like
        // return fibo(n - 1) + fibo(n - 2)
        // but it very very very kill CPU usage

        var a = BigInt(0) // f(n - 2), because we start on n = 2, so a = 0
        var b = BigInt(1) // f(n - 1), because we start on n = 2, so b = 1
        var result = BigInt(0)

        // loop from 2 until n
        for (var i = 2; i <= n; i++) {
            // result = f(n - 1) + f(n - 2)
            // because f(n - 1) is B,
            // and f(n - 2) is A
            // so we can change f(n - 1) + f(n - 2) to B + A
            result = b.add(a)

            // B is value of A on next loop,
            // and Result is value of B on next loop,
            // so we can save / cache it to increase perform
            a = b
            b = result
        }

        return result
    }

    it('Fibonannci function', () => {
        var output = fibo(9000)

        console.log('    fibo(9000):', output.toString())

        expect(output.toString()).to.equal('346160291286684746313289272940653195821004938840574649197792354882626761451249209476688158830845438584081783077248969641036805567685925275096026379667053520731117017902152350004056055263290740468312565519013758527115134986679500927618960595898784125436743322890902556558480966166842068858827121368084037500398689666218044551350360442646862696279483129043660912539980584260616428129687853518243358544506024804211410314325692133398509706576596745187284000675448960566587838629300214068490071678112576561242120168921521062906855593650494011391615760506296564726181583639595605639315514462323593255726350681177298919692687529131475966996479175735276726414564038873951028105275764984412066591637415934772279139455253087288034009154993561193308269619883651016764739580528775882659332284075160900251889565909001620005955898020498741253426259183467407856451935255744598735677063143605951074135853992415938277666700535092854704966755528337679057697026202081967337389133151551900992563506110333584028337592625787023110008351289364452178195306107056259768301902940710358705695173401175797592063874235214258319794748258830812224447883759078743189231351248058057742818858083652751310389157188583652487191753681908871324452598859106144951594606797195786754559141129782727790928218793262000601818878041232712620482141748965030717911922256234544033929372196985105014830841771293541916105669494308393067698504542986022441130160781328108216014215621166500631310190198456977407701085658980743316402172456165191576635035885104241740897029972735571913355609051794588175072614073380279274977928339443177725603335698391914343325635814053921690136602830888930385122496970174170881935462763316271613842866892088329627160809282789447665993788904319486227140536689107577971883772835153070545678359828373104418268785375257487856252266909918112168299229852218195022374231040315139836301079422737682650129388000')
    })
})

describe('Test 4', () => {
    function getMinimum(input, length) {
        var min = parseInt(input[0])

        // Looping using increment 2, so we can skip space char,
        for (var i = 2, j = length * 2; i < j; i += 2) {
            // Make sure input is integer
            var num = parseInt(input[i])

            // check
            if (num < min) {
                min = num
            }
        }

        return min
        // Note:
        //  this method have disadvance, value of array is limit to 1 digit number (0-9)
        //
        //  Alternatif using split:
        //
        // var numArr = input.split(' ')
        // var min = parseInt(numArr[0])

        // for (var item of numArr) {
        //     // Make sure input is integer
        //     var num = parseInt(item)

        //     // check
        //     if (num < min) {
        //         min = num
        //     }
        // }
        // return min;

        // second alternatif using split and Math.min
        // return input.split(' ').reduce((a, b) => Math.min(a, b))
    }

    function getValue(length, inputA, inputB) {
      // SUM A, B
      return getMinimum(inputA, length) + getMinimum(inputB, length)
    }

    it('Find and minimum value', () => {
        var length = 5
        var inputA = '5 4 3 2 1'
        var inputB = '1 2 3 4 5'
        var output = 0

        output = getValue(4, '3 1 4 2', '6 7 8 9')
        expect(output).to.equal(7)

        output = getValue(length, inputA, inputB)

        console.log('    input 1:', length)
        console.log('    input 2:', inputA)
        console.log('    input 3:', inputB)
        console.log('    output :', output)

        expect(output).to.equal(2)
    })
})
