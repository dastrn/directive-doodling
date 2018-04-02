export class ModFactorFormatter {
    public formatMyString(before: string, leftOfDecimalDigitCount: number, rightOfDecimalDigitCount: number): string {

      // Fails fast if our before string is not a number.
      if (isNaN(+before)) {
        return before;
      }
      const totalLength = leftOfDecimalDigitCount + rightOfDecimalDigitCount;
      const noPunc = before.replace('.', '').replace(',', '');
      let noZero = Number(noPunc).toString();

      while (noZero.length > totalLength) {
        noZero = noZero.slice(0, -1);
      }
      while (noZero.length < totalLength) {
        noZero = '0' + noZero;
      }
      return noZero.slice(0, leftOfDecimalDigitCount) + '.' + noZero.slice(leftOfDecimalDigitCount, totalLength);
    }

    public formatMyStringForModFactor(before: string) {
      return this.formatMyString(before, 3, 3);
    }

    /// Creates a default value given number of leading and trailing zeroes.
    private formatDefaultValueFor(leftOfDecimalDigitCount: number, rightOfDecimalDigitCount: number) {
      let returnValue = '';

      for (let i = 0; i < leftOfDecimalDigitCount; i++) {
        returnValue = '0' + returnValue;
      }
      if (rightOfDecimalDigitCount > 0) {
        returnValue += '.';
      }
      for (let i = 0; i < rightOfDecimalDigitCount; i++) {
        returnValue = returnValue + '0';
      }
      return returnValue;
    }

    private stripExtraDecimalPoint(before: string): string {
      const hasTwoDecimals = before.split('.').length === 3;
      if (hasTwoDecimals) {
        // Figure out if we have a case in which all characters before the first decimal are zero
        // If ^ is true, remove all zeroes until we bump into the decimal, then remove the decimal, then return that value.
      }

      return '';
    }
}
