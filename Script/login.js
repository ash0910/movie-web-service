$(function() {

    // selecting a hiding the span(error) message initially
     $("#fname_error_message").hide();
     $("#sname_error_message").hide();
     $("#email_error_message").hide();
     $("#password_error_message").hide();
     $("#retype_password_error_message").hide();

    //  boolean value of each field which we will use later while submitting form
     var error_fname = false;
     var error_sname = false;
     var error_email = false;
     var error_password = false;
     var error_retype_password = false;

    // selecting the input fields and calling fuction to check and return boolean value.
     $("#form_fname").focusout(function(){
        check_fname();
     });
     $("#form_sname").focusout(function() {
        check_sname();
     });
     $("#form_email").focusout(function() {
        check_email();
     });
     $("#form_password").focusout(function() {
        check_password();
     });
     $("#form_retype_password").focusout(function() {
        check_retype_password();
     });

    //  check fname using regex 
     function check_fname() {
        var pattern = /^[a-zA-Z]*$/;

        var fname = $("#form_fname").val();

        if (pattern.test(fname) && fname !== '') {
           $("#fname_error_message").hide();
           $("#form_fname").css("border-bottom","2px solid #34F458");
        } else {
           $("#fname_error_message").html("* Must contain only Characters");
           $("#fname_error_message").show();
           $("#form_fname").css("border-bottom","2px solid #F90A0A");
           error_fname = true;
        }
     }

    //  check lname using regex
     function check_sname() {
        var pattern = /^[a-zA-Z]*$/;
        var sname = $("#form_sname").val()
        if (pattern.test(sname) && sname !== '') {
           $("#sname_error_message").hide();
           $("#form_sname").css("border-bottom","2px solid #34F458");
        } else {
           $("#sname_error_message").html("* Must contain only Characters");
           $("#sname_error_message").show();
           $("#form_sname").css("border-bottom","2px solid #F90A0A");
           error_fname = true;
        }
     }

     //  check password 
     function check_password() {
        
        var password = $('#form_password').val();
        
        var pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        if (pattern.test(password)){
            $("#password_error_message").hide();

            $("#form_password").css("border-bottom","2px solid #34F458");

        }
        else{
            $('#password_error_message').html("* 1 uppercase, 1 lowercase, 1 digit, 1 special character, Minimum lenght of 8");
            error_password = true;
            $("#form_password").css("border-bottom","2px solid #F90A0A");
            $("#password_error_message").show();

        }
    }
      
    //  checking both the passwrod if they are equal.
     function check_retype_password() {
        var password = $("#form_password").val();
        var retype_password = $("#form_retype_password").val();
        if (password !== retype_password) {
           $("#retype_password_error_message").html("* Passwords Did not Matched");
           $("#retype_password_error_message").show();
           $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
           error_retype_password = true;
        } else {
           $("#retype_password_error_message").hide();
           $("#form_retype_password").css("border-bottom","2px solid #34F458");
        }
     }

     function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#form_email").val();
        if (pattern.test(email) && email !== '') {
           $("#email_error_message").hide();
           $("#form_email").css("border-bottom","2px solid #34F458");
        } else {
           $("#email_error_message").html("Invalid Email");
           $("#email_error_message").show();
           $("#form_email").css("border-bottom","2px solid #F90A0A");
           error_email = true;
        }
     }

     $("#registration_form").submit(function() {
        error_fname = false;
        error_sname = false;
        error_email = false;
        error_password = false;
        error_retype_password = false;

        check_fname();
        check_sname();
        check_email();
        check_password();
        check_retype_password();

        if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
           alert("Registration Successfull");
           return true;
        } else {
           alert("Please check all the errors and try again");
           return false;
        }


     });
  });
