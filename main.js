/*
	WEB 303
	Starting file for Assignment 1 
	{Your Name Here}
*/

$(document).ready(function () {
  const $salaryInput = $("#salary");
  const $percentInput = $("#percent");

  function handleInputChange() {
    const salary = $salaryInput.val();
    const percent = $percentInput.val();
    const total = salary * (percent / 100);
    const rounded = total.toFixed();

    $("#spend").text("$" + rounded);
  }

  // for both the input fields add a key up eventlistener
  $salaryInput.add($percentInput).on("keyup", handleInputChange);
})