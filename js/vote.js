const votes = {
    dishonored: 1,
    dishonored2: 1
};
document.querySelectorAll('.vote-button').forEach(button => {
    button.addEventListener('click', function () {
        //getvotes
        const option = this.getAttribute('data-option');
        votes[option]++;

        //count
        const totalVotes = votes.dishonored + votes.dishonored2;
        const percentDishonored = Math.round((votes.dishonored / totalVotes) * 100);
        const percentDishonored2 = Math.round((votes.dishonored2 / totalVotes) * 100);
        //progress bar update
        document.getElementById('progress-dishonored').style.width = percentDishonored + '%';
        document.getElementById('progress-dishonored').innerText = percentDishonored + '%';

        document.getElementById('progress-dishonored2').style.width = percentDishonored2 + '%';
        document.getElementById('progress-dishonored2').innerText = percentDishonored2 + '%';

        
    });
});