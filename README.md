"# EnToFa" :

- Add en_to_fa.js `After` Jquery File

#Example ADD JS: 
- `<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>`
- `<script src="en_to_fa.js"></script>`

#Exampl Function usage : 
```
<script>

jQuery(document).ready(function($){
  
   var Price = $(".entry-summary .price").text()

   var numbers = $.en2fa.toFarsi(Price);

   $(".entry-summary .price").text(numbers);

   $("li.product").each(function(){
    //   var Price3 = $(".price").text();
	var Price3 = $(this).find(".price").text()
    var numbers3 = $.en2fa.toFarsi(Price3);
	$(this).find(".price").text(numbers3);
    });

});

</script>`
```