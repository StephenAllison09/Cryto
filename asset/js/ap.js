// Our Pre-populated array 
var cryptos = ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash"];

function buttonMaker() {
    
    
    for(var i = 0; i < cryptos.length; i++) {
        //Adds "+" between words
        var plusTitles = cryptos[i].split(' ').join('-');
        
        //Button attributes
        var button = $('<button data-cryptos=' + plusTitles + '>').append(cryptos[i]);

        //Add button class
        button.addClass('button');
        
        //Appened to div
        $('#cryptoButtons').append(button);
    }
    $('.button').on('click', function(){
        var crypto = $(this).data('cryptos');
        crypto = crypto.split('-').join(' ');
        var queryURL = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
        
        $.ajax({
            url: queryURL,
            method: 'GET'

    })
        .done(function(data) {
            console.log(data);
            
            for (var i = 0; i < data.length; i++){
                if (crypto === data[i].name) {
                    console.log(data[i].price_usd)
                }
            }
                
            
        })
   });

}

$('#addCrypto').on('click',function(){
    
    //Clear the buttons so they won't duplicate on the page
        $('#cryptoButtons').empty();
         
        //newTitle gets the cyrpto title user entered
        var newTitle = $('#crypto-input').val();
    
//    capitalizeFirstLetter(newTitle);
//    
//    function capitalizeFirstLetter(string) {
//    return string.charAt(0).toUpperCase() + string.slice(1);
//}

        //Only add one instance of crypto
        for (i = 0; i < cryptos.length; i++) {
        
            //If newTitle can be found in the array
            if (newTitle == cryptos[i]) {

               //Remove newTitle from the array
                cryptos.pop(newTitle);
            }
        }
    // Add newTitle to array 
    cryptos.push(newTitle);
    
    buttonMaker();
});



buttonMaker(); 
