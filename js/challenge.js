document.addEventListener('DOMContentLoaded', (event) => {

    // set variables
    let count = 0;
    let likeCounter = 1;
    const counterID = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const likeClass = document.getElementsByClassName('likes');
    const likeLI = document.createElement('li');


    // DOM Challenge part 1 - As a user, I should see the timer increment every second once the page has loaded.
    setInterval(function() {
        if(count > -100) {
            counterID.innerText = count++;
        }
    }, 1000);

    //DOM Challenge part 2 - As a user, I can manually increment and decrement the counter using the plus and minus buttons.
    // plus button add event listener to increment with each click of the plus button
    plusButton.addEventListener('click', function() {
        counterID.innerText = count++;
    });

    // minus button add event listener to decrement with each click of the minus button
    minusButton.addEventListener('click', function() {
        counterID.innerText = count--;
    });

    //DOM Challenge part 3 - As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
    // like button event listener clicked for a specific number 
    likeButton.addEventListener('click', function() {
        if(count === count) {
            console.log(likeLI.innerText = `Number ${count} has been liked ${likeCounter} time(s)!!`);
            // likeLI.append(likeClass);
            likeCounter++;
        } else if(count !== count) {
            likeCounter = 1;
        }
        console.log('has been clicked');
    });

});