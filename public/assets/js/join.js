
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').focus()
//   })

// $(document).ready(function(){
//     $('.openPopup').on('click',function(){
//         var dataURL = $(this).attr('data-href');
//         $('.modal-body').load(dataURL,function(){
//             $('#myModal').modal({show:true});
//         });
//     }); 
// });

// $('#modal2').modal({
//     show: false
//   })
$(document).ready(function(){
    $("#signup-modal").on("click", function(event) {
        event.preventDefault();
        console.log("button clicked!!!!")
        $('.modal-body').modal()
        console.log($('.typeuser'))
        $(".typeuser").show()
        $(".grower-form").hide()
        $(".dispenser-form").hide()

        $("#userTypeBttn").on("click", function(event) {
            event.preventDefault();

            var userType = $("#userTypeOptions").val();
            console.log(userType);
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