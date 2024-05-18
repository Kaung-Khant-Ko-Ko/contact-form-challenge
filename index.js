let radio1 = $(".form__input-general-enquiry");
let radio2 = $(".form__input-support-request");

$(".error-msg").slideUp(0);
$(".success-message").slideUp(0);

radio1.click(function () {
  radio2.removeClass("form__input-query-type-selected");
  radio1.addClass("form__input-query-type-selected");
});

radio2.click(function () {
  radio1.removeClass("form__input-query-type-selected");
  radio2.addClass("form__input-query-type-selected");
});

$(".form__submit-btn").click(function () {
  let error = 6;

  if ($("#fname").val() === "") {
    $("#fname-error").slideUp();
    setTimeout(() => {
      $("#fname-error").slideDown();
      $("#fname").addClass("warning");
    }, 400);
  } else {
    $("#fname-error").slideUp();
    $("#fname").removeClass("warning");
    error -= 1;
  }

  if ($("#lname").val() === "") {
    $("#lname-error").slideUp();
    setTimeout(() => {
      $("#lname-error").slideDown();
      $("#lname").addClass("warning");
    }, 400);
  } else {
    $("#lname-error").slideUp();
    $("#lname").removeClass("warning");
    error -= 1;
  }

  if ($("#email").val() === "" || validate($("#email").val()) === false) {
    let msg = "";
    if ($("#email").val() === "") {
      $("#email-error").slideUp();
      msg = "This field is required";
    } else {
      $("#email-error").slideUp();
      msg = "Please enter a valid email address";
    }
    setTimeout(() => {
      $("#email-error").text(msg);
      $("#email-error").slideDown();
      $("#email").addClass("warning");
    }, 400);
  } else {
    $("#email-error").slideUp();
    $("#email").removeClass("warning");
    error -= 1;
  }

  if ($("input[name=query-type]:checked").val() === undefined) {
    $("#query-type-error").slideUp();
    setTimeout(() => {
      $("#query-type-error").slideDown();
    }, 400);
  } else {
    $("#query-type-error").slideUp();
    error -= 1;
  }

  if ($("#message").val() === "") {
    $("#message-error").slideUp();
    setTimeout(() => {
      $("#message-error").slideDown();
      $("#message").addClass("warning");
    }, 400);
  } else {
    $("#message-error").slideUp();
    $("#message").removeClass("warning");
    error -= 1;
  }

  if ($("#consent").prop("checked") === false) {
    $("#consent-error").slideUp();
    setTimeout(() => {
      $("#consent-error").slideDown();
      $("#consent").addClass("warning");
    }, 400);
  } else {
    $("#consent-error").slideUp();
    $("#consent").removeClass("warning");
    error -= 1;
  }

  if (error === 0) {
    setTimeout(() => {
      $(".form__input").val("");
      $(
        ".form__input-" + $("input[name=query-type]:checked")[0].id
      ).removeClass("form__input-query-type-selected");
      $("input[name=query-type]").prop("checked", false);
      $("#consent").prop("checked", false);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      $(".success-message").slideDown(1000);
    }, 400);
  }
});

function validate(email) {
  var pattern = /^[\w]+[\.\w+]*[\w]+@[\w]+\.[\w]+[\.\w]*[\w]+$/;
  return pattern.test(email);
}
