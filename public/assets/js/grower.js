$(document).ready(function() {
    // Getting references to the name inout and grower container, as well as the table body
    let growerName = $("#grower-name");
    let growerLicense = $("#grower-license")
    let growerCity = $("#grower-city")
    let growerState = $("#grower-state")
    let growerEmail = $("#grower-email")
    let growerBio = $("#grower-bio")
    let growerIndoor = $("#grower-indoor")
    let growerStrains = $("#grower-strains")
    let growerCycle = $("#grower-cycle")
        //var growerList = $("tbody");
        //var growerContainer = $(".grower-container");
        // Adding event listeners to the form to create a new object, and the button to delete
        // an Grower
    $(document).on("submit", "#grower-form", handleGrowerFormSubmit());
    //$(document).on("click", ".delete-grower", handleDeleteButtonPress);

    // Getting the intiial list of Growers
    //getGrowers();

    // A function to handle what happens when the form is submitted to create a new Grower
    function handleGrowerFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        // if (!growerName.val().trim().trim()) {
        //     return;
        // }
        // Calling the upsertGrower function and passing in the value of the name input
        upsertGrower({
            grower_name: growerName.val().trim(),
            license: growerLicense.val().trim(),
            city: growerCity.val().trim(),
            state: growerState.val().trim(),
            email: growerEmail.val().trim(),
            bio: growerBio.val().trim(),
            indoor: growerIndoor,
            strains: growerStrains.val().trim(),
            cycle: growerCycle.val().trim()
        });
    }

    // A function for creating an grower. Calls getGrowers upon completion
    function upsertGrower(growerData) {
        $.post("/api/growers", growerData)
            //.then(getGrowers);
    }

    // Function for creating a new list row for growers
    // function createGrowerRow(growerData) {
    //     var newTr = $("<tr>");
    //     newTr.data("grower", growerData);
    //     newTr.append("<td>" + growerData.name + "</td>");
    //     newTr.append("<td> " + growerData.Posts.length + "</td>");
    //     newTr.append("<td><a href='/blog?grower_id=" + growerData.id + "'>Go to Posts</a></td>");
    //     newTr.append("<td><a href='/cms?grower_id=" + growerData.id + "'>Create a Post</a></td>");
    //     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-grower'>Delete Grower</a></td>");
    //     return newTr;
    // }

    // Function for retrieving growers and getting them ready to be rendered to the page
    // function getGrowers() {
    //     $.get("/api/growers", function(data) {
    //         var rowsToAdd = [];
    //         for (var i = 0; i < data.length; i++) {
    //             rowsToAdd.push(createGrowerRow(data[i]));
    //         }
    //         renderGrowerList(rowsToAdd);
    //         nameInput.val("");
    //     });
    // }

    // A function for rendering the list of growers to the page
    // function renderGrowerList(rows) {
    //     growerList.children().not(":last").remove();
    //     growerContainer.children(".alert").remove();
    //     if (rows.length) {
    //         console.log(rows);
    //         growerList.prepend(rows);
    //     } else {
    //         renderEmpty();
    //     }
    // }

    // Function for handling what to render when there are no growers
    // function renderEmpty() {
    //     var alertDiv = $("<div>");
    //     alertDiv.addClass("alert alert-danger");
    //     alertDiv.text("You must create an Grower before you can create a Post.");
    //     growerContainer.append(alertDiv);
    // }

    // Function for handling what happens when the delete button is pressed
    // function handleDeleteButtonPress() {
    //     var listItemData = $(this).parent("td").parent("tr").data("grower");
    //     var id = listItemData.id;
    //     $.ajax({
    //             method: "DELETE",
    //             url: "/api/growers/" + id
    //         })
    //         .then(getGrowers);
    // }
});