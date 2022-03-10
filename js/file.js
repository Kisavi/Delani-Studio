// WHAT WE DO SECTION //
// toggling between images and description 
$(document).ready(function () {
    $(".set1").click(function () {
        $(".description1").toggle();
        $(".img1").toggle();
    });
});

// $(document).ready(function () {
//     $(".set2").click(function () {
//         $(".description2").toggle();
//         $(".img2").toggle();
//     });
// });

// $(document).ready(function () {
//     $(".set3").click(function () {
//         $(".description3").toggle();
//         $(".img3").toggle();
//     });
// });

// PORTFOLIO SECTION //
// CONTACT US SECTION //
$(document).ready(function() {
    $("#myForm form").submit(function(event) {
        let nameInput = $("input#userName").val();
        let emailInput = $("input#userEmail").val();
        let userMessageInput = $("input#userMessage").val();
        if(nameInput && emailInput && userMessageInput !== "") {
            alert(`${nameInput} we have received your message. Thank you for reaching out to us.`)
        }
       event.preventDefault();
    })
})