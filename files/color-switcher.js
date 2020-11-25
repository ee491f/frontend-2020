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

function settingColors(event) {
  $("[function=background-switcher] .warning").fadeOut();
  let color = $("[function=background-switcher] [type=text][name=color]").val();
  const checker = new ColorChecker(color);

  if (checker.isGood()) {
    $('[function=background-switcher]').css("background-color", color);
  } else if (checker.isBad()) {
    $("[function=background-switcher] .warning.bad-color").fadeIn();
  } else if (checker.isUnknown()) {
    $("[function=background-switcher] .warning.unknown-color").fadeIn();
  } else {
    console.log("an unexpected scenario occurred")
  }
};
