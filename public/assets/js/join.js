$(document).ready(function() {
    $("#signup-modal").on("click", function(event) {
        event.preventDefault();
        //console.log("button clicked!!!!")
        $('.modal-body').modal()
            //console.log($('.typeuser'))
        $(".typeuser").show()
        $(".grower-form").hide()
        $(".dispenser-form").hide()

        $("#userTypeBttn").on("click", function(event) {
            event.preventDefault();

            var userType = $("#userTypeOptions").val();
            console.log(userType);
            //$.cookie('usertype', userType, { path: '/' })
            Cookies.set('usertype', userType, { path: '/' });
            if (userType === 'Grower') {
                $(".typeuser").hide()
                $(".grower-form").show()
            } else {
                $(".typeuser").hide()
                $(".dispenser-form").show()
            }

        });
    });
});