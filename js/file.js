// WHAT WE DO SECTION //
// toggling between images and description 
$(document).ready(function(){
    $(".img1").click(function(){
      $(".img1").hide('1500').hide('1000');
      $(".description1").show('1500');
    });
    $(".description1").click(function(){
      $(".description1").slideUp('1500');
      $(".img1").show('1500');
    });
  });

  $(document).ready(function(){
    $(".img2").click(function(){
      $(".img2").hide('1500').hide('1000');
      $(".description2").show('1500');
    });
    $(".description2").click(function(){
      $(".description2").slideUp('1500');
      $(".img2").show('1500');
    });
  });

  $(document).ready(function(){
    $(".img3").click(function(){
      $(".img3").hide('1500').hide('1000');
      $(".description3").show('1500');
    });
    $(".description3").click(function(){
      $(".description3").slideUp('1500');
      $(".img3").show('1500');
    });
  });

// PORTFOLIO SECTION //
// CONTACT US SECTION //
$(document).ready(function() {
    $("form").submit(function(event) {
        let nameInput = $("input#userName").val();
        let emailInput = $("input#userEmail").val();
        let userMessageInput = $("input#userMessage").val();
        if(nameInput && emailInput && userMessageInput !== "") {
            alert(`${nameInput} we have received your message. Thank you for reaching out to us.`)
        }
       event.preventDefault();
    })
})