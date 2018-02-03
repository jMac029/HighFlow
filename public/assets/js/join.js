
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

var userType = 

$(document).ready(function() {
    $("#userTypeBttn").on("click", function(event) {
        event.preventDefault();

        userType = $("#userTypeOptions").val();
        console.log(userType);
            
    });
});
