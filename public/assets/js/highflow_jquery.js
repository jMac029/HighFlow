$(document).ready(function() {
    /* global moment */
  
    // blogContainer holds all of our products
    var blogContainer = $(".blog-container");
    var postCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.edit", handlePostEdit);
    // Variable to hold our products
    var products;
  
    // The code below handles the case where we want to get blog products for a specific grower
    // Looks for a query param in the url for author_id
    var url = window.location.search;
    var growerId;
    if (url.indexOf("?grower_id=") !== -1) {
      growerId = url.split("=")[1];
      getProducts(growerId);
    }
    // If there's no authorId we just get all products as usual
    else {
      getProducts();
    }
  
  
    // This function grabs products from the database and updates the view
    function getProducts(grower) {
      growerId = grower || "";
      if (growerId) {
        growerId = "/?grower_id=" + growerId;
      }
      $.get("/api/products" + growerId, function(data) {
        console.log("Posts", data);
        products = data;
        if (!products || !products.length) {
          displayEmpty(grower);
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function does an API call to delete products
    function deletePost(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/products/" + id
      })
      .then(function() {
        getPosts(postCategorySelect.val());
      });
    }
  
    // InitializeRows handles appending all of our constructed product HTML inside blogContainer
    function initializeRows() {
      blogContainer.empty();
      var postsToAdd = [];
      for (var i = 0; i < products.length; i++) {
        postsToAdd.push(createNewRow(products[i]));
      }
      blogContainer.append(postsToAdd);
    }
  
    // This function constructs a product's HTML
    function createNewRow(product) {
      var formattedDate = new Date(product.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      var newPostPanel = $("<div>");
      newPostPanel.addClass("panel panel-default");
      var newPostPanelHeading = $("<div>");
      newPostPanelHeading.addClass("panel-heading");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-info");
      var newPostTitle = $("<h2>");
      var newPostDate = $("<small>");
      var newPostAuthor = $("<h5>");
      newPostAuthor.text("Written by: " + product.Grower.name);
      newPostAuthor.css({
        float: "right",
        color: "blue",
        "margin-top":
        "-10px"
      });
      var newPostPanelBody = $("<div>");
      newPostPanelBody.addClass("panel-body");
      var newPostBody = $("<p>");
      newPostTitle.text(product.title + " ");
      newPostBody.text(product.body);
      newPostDate.text(formattedDate);
      newPostTitle.append(newPostDate);
      newPostPanelHeading.append(deleteBtn);
      newPostPanelHeading.append(editBtn);
      newPostPanelHeading.append(newPostTitle);
      newPostPanelHeading.append(newPostAuthor);
      newPostPanelBody.append(newPostBody);
      newPostPanel.append(newPostPanelHeading);
      newPostPanel.append(newPostPanelBody);
      newPostPanel.data("product", product);
      return newPostPanel;
    }
    
    // This function figures out which product we want to delete and then calls deletePost
    function handlePostDelete() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("product");
      deletePost(currentPost.id);
    }
  
    // This function figures out which product we want to edit and takes it to the appropriate url
    function handlePostEdit() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("product");
      window.location.href = "/cms?post_id=" + currentPost.id;
    }
  
    // This function displays a messgae when there are no products
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for Grower #" + id;
      }
      blogContainer.empty();
      var messageh2 = $("<h2>");
      messageh2.css({ "text-align": "center", "margin-top": "50px" });
      messageh2.html("No products yet" + partial + ", navigate <a href='/cms" + query +
      "'>here</a> in order to get started.");
      blogContainer.append(messageh2);
    }
  
  });
  