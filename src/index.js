// @flow
const DEFAULT_BASE = 6

const parseIntBase10 = (toParse) => parseInt(toParse, 10)

const parseWithExponent = (base: number, exponent: number): number => {
  return base * exponent + exponent
}

const semverToInt = (semver: string, base:number = 10) => {
  const [mayor, minor, patch] = semver.split('.').map(parseIntBase10)
  const baseInt = parseIntBase10(base)
  const mayorInt = parseWithExponent(mayor, 10 ** baseInt)
  const minorInt = parseWithExponent(minor, 10 ** (baseInt / 2))
  
  return mayorInt + minorInt + patch
}

module.exports = semverToInt

