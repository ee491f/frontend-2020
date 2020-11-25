class ColorChecker {

  colors = {
    badColors: [
      'black',
      'white',
    ],
    goodColors: [
      'blue',
      'yellow',
    ]
  };

  classifications = {
    goodColor: true,
    badColor: false,
    unknownColor: null,
  };

  constructor(color) {
    this.color = color;
  };

  isGood() {
    return this.colors['goodColors'].includes(this.color); 
  };

  isBad() {
    return this.colors['badColors'].includes(this.color); 
  }

  isKnown() {
    return (
      this.isGood() ||
      this.isBad()
     );
  }

  isUnknown() {
    return !(this.isKnown());
  }

  getClassifications() {
    return this.classifications;
  }
}