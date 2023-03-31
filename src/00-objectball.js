function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black","White"],
            players: {
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1",
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7",
                },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15",
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5",
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1",
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players: {
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2",
                },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10",
                },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5",
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0",
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12",
                }
            }
        }
    };
}
console.log(gameObject());

function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (playerName in players) {
        return players[playerName].points;
      }
    }
    return "Player not found";
  }
  console.log(numPointsScored("Brendan Haywood"));

  function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
        const players = game[team].players;
        if (playerName in players) {
            return players[playerName].shoe;
        }
    }
    return "Player not found";
  }
  console.log(shoeSize("DeSagna Diop"));

  function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return "Team not found";
  }
  console.log(teamColors("Brooklyn Nets"))
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  console.log(teamNames());
  
  function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        const playerNumbers = [];
        const players = game[team].players;
        for (let player in players) {
          playerNumbers.push(players[player].number);
        }
        return playerNumbers;
      }
    }
    return "Team not found";
  }
  console.log(playerNumbers("Brooklyn Nets"));

  function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (playerName in players) {
        return players[playerName];
      }
    }
    return "Player not found";
  }
  console.log(playerStats("Mason Plumlee"));

  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoeSize;
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].shoe > largestShoeSize) {
          largestShoeSize = players[player].shoe;
          playerWithLargestShoeSize = players[player];
        }
      }
    }
    return playerWithLargestShoeSize.rebounds;
  }
  console.log(bigShoeRebounds());

  function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints;
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].points > mostPoints) {
          mostPoints = players[player].points;
          playerWithMostPoints = player;
        }
      }
    }
    return playerWithMostPoints;
  }
  console.log(mostPointsScored());
  
  function winningTeam() {
    const game = gameObject();
    let highestScore = 0;
    let winningTeam;
    for (let team in game) {
      let teamScore = 0;
      const players = game[team].players;
      for (let player in players) {
        teamScore += players[player].points;
      }
      if (teamScore > highestScore) {
        highestScore = teamScore;
        winningTeam = game[team].teamName;
      }
    }
    return winningTeam;
  }
  console.log(winningTeam());
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    let playerWithLongestName;
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (player.length > longestName.length) {
          longestName = player;
          playerWithLongestName = player;
        }
      }
    }
    return playerWithLongestName;
  }
  console.log(playerWithLongestName());

  function doesLongNameStealATon() {
    let mostSteals = 0;
    let playerWithMostSteals;
    let longestName;
    for (let team in gameObject) {
      for (let player in gameObject[team]["players"]) {
        if (gameObject[team]["players"][player]["steals"] > mostSteals) {
          mostSteals = gameObject[team]["players"][player]["steals"];
          playerWithMostSteals = player;
        }
        if (!longestName || player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return playerWithMostSteals === longestName;
  }
  console.log(doesLongNameStealATon());