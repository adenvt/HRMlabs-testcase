// var BigInt = require('big-integer')
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
            // return BigInt(n)
            return n
        }

        // Actualy you can use recursive method like
        // return fibo(n - 1) + fibo(n - 2)
        // but it very very very kill CPU usage

        // var a = BigInt(0) // f(n - 2), because we start on n = 2, so a = 0
        // var b = BigInt(1) // f(n - 1), because we start on n = 2, so b = 1
        // var result = BigInt(0)
        var a = 0
        var b = 1
        var result = 0

        // loop from 2 until n
        for (var i = 2; i <= n; i++) {
            // result = f(n - 1) + f(n - 2)
            // because f(n - 1) is B,
            // and f(n - 2) is A
            // so we can change f(n - 1) + f(n - 2) to B + A

            // result = b.add(a)
            result = b + a

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

        console.log('    fibo(1):', fibo(1))
        console.log('    fibo(2):', fibo(2))
        console.log('    fibo(3):', fibo(3))
        console.log('    fibo(4):', fibo(4))
        console.log('    fibo(5):', fibo(5))
        console.log('    fibo(80):', fibo(80))
        console.log('    fibo(9000):', output)

        expect(fibo(1)).to.equal(1)
        expect(fibo(2)).to.equal(1)
        expect(fibo(3)).to.equal(2)
        expect(fibo(4)).to.equal(3)
        expect(fibo(5)).to.equal(5)
        expect(fibo(80)).to.equal(23416728348467685)
        expect(output).to.equal(346160291286684746313289272940653195821004938840574649197792354882626761451249209476688158830845438584081783077248969641036805567685925275096026379667053520731117017902152350004056055263290740468312565519013758527115134986679500927618960595898784125436743322890902556558480966166842068858827121368084037500398689666218044551350360442646862696279483129043660912539980584260616428129687853518243358544506024804211410314325692133398509706576596745187284000675448960566587838629300214068490071678112576561242120168921521062906855593650494011391615760506296564726181583639595605639315514462323593255726350681177298919692687529131475966996479175735276726414564038873951028105275764984412066591637415934772279139455253087288034009154993561193308269619883651016764739580528775882659332284075160900251889565909001620005955898020498741253426259183467407856451935255744598735677063143605951074135853992415938277666700535092854704966755528337679057697026202081967337389133151551900992563506110333584028337592625787023110008351289364452178195306107056259768301902940710358705695173401175797592063874235214258319794748258830812224447883759078743189231351248058057742818858083652751310389157188583652487191753681908871324452598859106144951594606797195786754559141129782727790928218793262000601818878041232712620482141748965030717911922256234544033929372196985105014830841771293541916105669494308393067698504542986022441130160781328108216014215621166500631310190198456977407701085658980743316402172456165191576635035885104241740897029972735571913355609051794588175072614073380279274977928339443177725603335698391914343325635814053921690136602830888930385122496970174170881935462763316271613842866892088329627160809282789447665993788904319486227140536689107577971883772835153070545678359828373104418268785375257487856252266909918112168299229852218195022374231040315139836301079422737682650129388000)
    })
})

describe('Test 4', () => {
    // Get minimum, and second minimum value, and the position
    function getMinCandidate(input, length) {
        var min = parseInt(input[0])
        var pos = 0
        var alter

        for (var i = 1; i < length; i++) {
            var value = parseInt(input[i])

            // find lowest value
            if (value < min) {
                alter = min

                min = value
                pos = i
            } else {
                // find second lowest value
                if (alter === undefined) {
                    alter = value
                } else if (value < alter) {
                    alter = value
                }
            }
        }

        return {
            value: min,
            alternateValue: alter,
            pos: pos
        }
    }

    function getValue(length, inputA, inputB) {
        console.log('    inputA:', inputA)
        console.log('    inputB:', inputB)

        var arrA = inputA.split(' ')
        var arrB = inputB.split(' ')

        // Find lowest value, and second lowest value
        // and position of value so we can check it later.
        var minA = getMinCandidate(arrA, length)
        var minB = getMinCandidate(arrB, length)

        // If A and B position not same, sum it
        if (minA.pos !== minB.pos) {
            console.log('    Output:', `(${minA.value} + ${minB.value}) = ${(minA.value + minB.value)}`)

            return minA.value + minB.value
        }

        // else, we try find next lowest sum, we have 2 possibility
        // A min + B second min
        // or
        // A second min + B min
        var possibilityA = minA.value + minB.alternateValue
        var possibilityB = minA.alternateValue + minB.value

        // Compare possibilityA & possibilityA, and return lowest
        // return possibilityA < possibilityB
        //   ? possibilityA
        //   : possibilityB
        if (possibilityA < possibilityB) {
            console.log('    Output:', `(${minA.value} + ${minB.alternateValue}) = ${possibilityA}`)

            return possibilityA
        } else {
            console.log('    Output:', `(${minA.alternateValue} + ${minB.value}) = ${possibilityB}`)

            return possibilityB
        }
    }

    // Alternatif using bruteforce method
    // function getValue(length, inputA, inputB) {
    //   var arrA = inputA.split(' ')
    //   var arrB = inputB.split(' ')
    //   var result = [];

    // Try sum all 1 By 1, except same position
    //   for (var i = 0; i < length; i++) {
    //     for (var j = 0; j < length; j++) {
    //       if (i === j) // skip if position is same
    //         continue;

    //       var A = parseInt(arrA[i])
    //       var B = parseInt(arrB[j])

    //       result.push((A+B))
    //     }
    //   }

    //   return Math.min(...result)
    // }

    it('Find and minimum value', () => {
        output = getValue(4, '3 1 4 2', '6 7 8 9')
        expect(output).to.equal(7)

        output = getValue(5, '5 4 3 2 1', '1 2 3 4 5')
        expect(output).to.equal(2)

        output = getValue(5, '2 4 5 6 6', '2 5 5 6 6')
        expect(output).to.equal(6)
    })
})
