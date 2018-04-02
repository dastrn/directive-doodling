export class ModFactorFormatter2 {
    public formatMyString(before: string, leftOfDecimalDigitCount: number, rightOfDecimalDigitCount: number): string {

      // Fails fast if our before string is not a number.
      if (isNaN(+before)) {
        return before;
      }

      const numberOfDecimals = before.split('.').length - 1;

      // If we don't have any decimal points, then format and return.
      if (numberOfDecimals === 0) {
          return this.applyNoDecimalCase(before);
      }

      return this.applyFormattingToSingleDecimal(before);
    }

    public formatMyStringForModFactor(before: string) {
      return this.formatMyString(before, 3, 3);
    }

    private applyNoDecimalCase(before: string): string {
        while (before.length < 3) {
            before = '0' + before;
        }
        return before + '.000';
    }

    private applyFormattingToSingleDecimal(before: string): string {
        const splits = before.split('.');
        while (splits[0].length < 3) {
            splits[0] = '0' + splits[0];
        }
        while (splits[1].length < 3) {
            splits[1] = splits[1] + '0';
        }
        return splits[0] + '.' + splits[1];
    }
}
