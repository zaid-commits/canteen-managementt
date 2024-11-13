 src = "https://code.jquery.com/jquery-3.5.1.slim.min.js" >

     $(document).ready(function() {
         var cartItems = localStorage.getItem("cartItems");
         if (cartItems) {
             cartItems = JSON.parse(cartItems);
             var total = 0;
             cartItems.forEach(function(item, index) {
                 $("#cart-items").append("<li class='list-group-item'>" + item.itemName + " - ₹" + item.price + " <button class='btn btn-sm btn-danger remove-item' data-index='" + index + "'>Remove</button></li>");
                 total += item.price;
             });
             $("#total").text(total.toFixed(2));
         }

         // Remove item from cart
         $(document).on("click", ".remove-item", function() {
             var index = $(this).data("index");
             cartItems.splice(index, 1);
             localStorage.setItem("cartItems", JSON.stringify(cartItems));
             location.reload();
         });

         // Clear cart
         $("#clear-cart").click(function() {
             localStorage.removeItem("cartItems");
             location.reload();
         });

         // Proceed to checkout
         $("#checkout-btn").click(function() {
             window.location.href = "DummyPayment.html";
         });
     });