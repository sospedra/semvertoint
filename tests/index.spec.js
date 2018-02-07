/* global test, expect */
const semverToInt = require('../src/')

const gen = () => parseInt(Math.random() * 10 ** (Math.random() * 4))

test('transform any semver valid format to integer', () => {
  expect(semverToInt('12.0.1')).toBe(130000100001) 
})

test('accepts a custom base for transforms', () => {
  expect(semverToInt('9.83.100', 6)).toBe(10084100)
})

test('major do not overlap', () => {
  const greater = semverToInt('100.23.0')
  const lower = semverToInt('99.122.1')

  expect(greater > lower).toBe(true)
})

test('minor do not overlap', () => {
  const greater = semverToInt('10.890.199')
  const lower = semverToInt('10.889.9999')

  expect(greater > lower).toBe(true)
})

test('custom base will be parsed to even integer', () => {
  const fromInt = semverToInt('12.345.6789', 6)
  const fromFloat = semverToInt('12.345.6789', 5.45)
  const fromOdd = semverToInt('12.345.6789', 5)

  expect(fromInt === fromFloat).toBe(true)
  expect(fromFloat === fromOdd).toBe(true)
  expect(fromInt + fromFloat + fromOdd).toBe(fromInt * 3)
})

test('always return an integer', () => {
  const fromRandom = semverToInt(`${gen()}.${gen()}.${gen()}`)
  
  expect(Number.isInteger(fromRandom)).toBe(true)
})

test('never overlaps', () => {
  const major = gen()
  const minor = gen()
  const patch = gen()

  const greater = semverToInt(`${major}.${minor + 1}.${patch + 1}`)
  const lower = semverToInt(`${major}.${minor}.${patch}`)

  expect(greater > lower).toBe(true)
})

