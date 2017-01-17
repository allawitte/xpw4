player.showHighScoreList = function(pageToken) {
    document.querySelector('#highScoreListDiv').innerHTML = '';
    document.querySelector('#highScoreListDiv').style.display = 'block';
    // Create the request.
    LEADERBOARD_ID = document.getElementById('leaderboardIdShowHS').value;//1-проверить, что получено в LEADERBOARD_ID
    var request = gapi.client.games.scores.list(
        {leaderboardId: LEADERBOARD_ID,
            collection: 'PUBLIC',
            timeSpan: 'all_time',
            pageToken: pageToken,
            maxResults: '10'});//2-проверить, что получено в request
    request.execute(
        function(response) {
            console.log('High score', response);
            if (response.error) {
                alert('Error ' + response.error.code + ': ' + response.message);
                return;
            }
            var root = document.getElementById('highScoreListDiv');
            player.createPlayerList(root, response.items, true);//3-проверить, что создается здесь
            //4-проверить response.prevPageToken
            if (response.prevPageToken) {
                root.appendChild(
                    utilities.createButton('Prev', response.prevPageToken,
                        function(event) {
                            player.showHighScoreList(event.target.value);
                        }));
            }
            //5-проверить response.nextPageToken
            if (response.nextPageToken) {
                root.appendChild(
                    utilities.createButton('Prev', response.prevPageToken,
                        function(event) {
                            player.showHighScoreList(event.target.value);
                        }));
            }
        });
};
//Я не вижу тут внешних зависимостей