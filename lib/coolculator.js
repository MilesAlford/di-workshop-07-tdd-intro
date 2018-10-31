class Coolculator {
  add(a, b) {
    return a + b
  }

  multiply(a, b) {
    return a * b
  }

  subtract(a, b) {
    return a - b
  }

  divide(a, b) {
    return a / b
  }

  highest(a, b) {
    return Math.max(a, b)
  }

  lowest(a, b) {
    return Math.min(a, b)
  }

  double(a) {
  return a + a
}

  square(a) {
    return a * a
  }

  raise(a, b) {
    return Math.pow(a, b)
  }

  isNegative(a) {
    if(a < 0) {
      return true
    } else {
      return false
    }
  }

  isPositive(a) {
    if(a > 0) {
      return true
    } else {
      return false
    }
  }
}

module.exports = Coolculator
