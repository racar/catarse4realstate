$(".register-form, .recover-form").on("click", ".pwd-reveal", function(e) {
  e.preventDefault(), $(".pwd-form").find("input").prop("type", "text"), $(this).removeClass("pwd-reveal").addClass("pwd-hide").text("Ocultar Contraseña")
}), $(".register-form, .recover-form").on("click", ".pwd-hide", function(e) {
  e.preventDefault(), $(".pwd-form").find("input").prop("type", "password"), $(this).removeClass("pwd-hide").addClass("pwd-reveal").text("Ver Contraseña")
}), $(".pwd-form").on("keyup", "input", function() {
  var e = $(this).val(),
    o = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    o.test(e) ? ($(this).removeClass("invalid").addClass("valid"), $(".pwd-form").find(".input-message").removeClass("error").addClass("success").html("Correcta")) : ($(this).removeClass("valid").addClass("invalid"), $(".pwd-form").find(".input-message").removeClass("success").addClass("error").html("Inválida"))
}), $(".pwd-validate").on("keyup", "input", function() {
  var e = $(".pwd-form").find("input").val(),
    o = $(this).val();
e == o ? ($(this).removeClass("invalid").addClass("valid"), $(".pwd-validate").find(".input-message").removeClass("error").addClass("success").html("Correcta")) : ($(this).removeClass("valid").addClass("invalid"), $(".pwd-validate").find(".input-message").removeClass("success").addClass("error").html("Inválida"))
});
