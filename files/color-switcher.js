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
