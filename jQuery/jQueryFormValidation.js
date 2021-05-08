$(function () {
  var $registerForm = $("#registration");
  //---check blank spce are there---------
  $.validator.addMethod("noSpace",function(value,element){
      return value === '' || value.trim().length != 0
  },"Spaces are not allowed");
  if ($registerForm.length) {
    $registerForm.validate({
      rules: {
        username: {
          required: true,
          noSpace:true
        },
        email: {
          required: true,
          email:true
        },
        password: {
          required: true,
        },
        confirm: {
          required: true,
          equalTo:'#password'
        },
        fname: {
          required: true,
        },
        lname: {
          required: true,
        },
        gender: {
          required: true,
        },
        hobbies: {
          required: true,
        },
        country: {
          required: true,
        },
        address: {
          required: true,
        },
      },
      messages: {
        username: {
          required: "Username is mandatory!",
        },
        email: {
          required: "email is mandatory!",
          email:"please enter valid email"
        },
        password: {
          required: "password is mandatory!",
        },
        confirm: {
          required: "confirm is mandatory!",
          equalTo:"please enter same password"
        },
        fname: {
          required: "fname is mandatory!",
        },
        lname: {
          required: "lname is mandatory!",
        },
        gender: {
          required: "gender is mandatory!",
        },
        hobbies: {
          required: "hobbies is mandatory!",
        },
        country: {
          required: "country is mandatory!",
        },
        address: {
          required: "address is mandatory!",
        }
      },
      errorPlacement:function(error,element){
          if(element.is(":radio")){
              error.appendTo(element.parents(".gender"));
          }
          else if(element.is(":checkbox")){
              error.appendTo(element.parents(".hobbies"));
          }
          else{
              error.insertAfter(element);
          }
      }
    });
  }
});
