// Change text in Card Title to ...
{/* Ex: <h5 class="card-title">The Ultimate MySQL Bootcamp: GO from SQL Beginner to Expert</h5> */}

// When all the website loads its scripts, call function
window.addEventListener("load", function()  {
    truncateCardTitle();    
});

function truncateCardTitle() {
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for(var i = 0; i < cardList.length; i++){
        var text = cardList[i].innerHTML; // get content inside html
        var newText = truncateString(text, 40);
        cardList[i].innerHTML = newText;
    }
}

// function to execute text
function truncateString(str,num) {
    if(str.length > num) {
        return str.slice(0,num) + "..."; // slice start from first str to num, include space
    } else{
        return str;
    }
}