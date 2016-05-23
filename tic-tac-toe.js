var container;
var numPlayers;
var player1Symbol;
var player2Symbol;
var whichTurn;
var array;
window.onload = function()
{
  array = [["","",""],["","",""],["","",""],];
  // array[2][2] = "a";
  // console.log(array);
  whichTurn=1;
  console.log("loaded");
  container = document.getElementById("container");
  askQuestions();
};
function askQuestions()
{
  var questionBox = document.createElement("div");
  questionBox.setAttribute("id","questionBox");
  var numberOfPlayers = document.createElement("div");
  numberOfPlayers.setAttribute("id","numberOfPlayers")
  numberOfPlayers.innerHTML="Number of Players";
  var numberOfPlayersContainer = document.createElement("div");
  var onePlayer = document.createElement("span");
  onePlayer.setAttribute("class","button");
  onePlayer.innerHTML="1";
  onePlayer.addEventListener("click", function()
  {
    numPlayers=1;
    console.log(numPlayers);
    symbol();
  });
  var twoPlayer = document.createElement("span");
  twoPlayer.setAttribute("class","button");
  twoPlayer.innerHTML="2";
  twoPlayer.addEventListener("click", function()
  {
    numPlayers=2;
    console.log(numPlayers);
    symbol();
  });
  questionBox.appendChild(numberOfPlayers);
  numberOfPlayersContainer.appendChild(onePlayer);
  numberOfPlayersContainer.appendChild(twoPlayer);
  questionBox.appendChild(numberOfPlayersContainer);
  container.appendChild(questionBox);
  function symbol()
  {
    onePlayer.parentNode.removeChild(onePlayer);
    twoPlayer.parentNode.removeChild(twoPlayer);
    numberOfPlayers.innerHTML="Player 1 Choose Your Symbol";
    // var numberOfPlayersContainer = document.createElement("div");
    var x = document.createElement("span");
    x.setAttribute("class","button");
    x.innerHTML="X";
    x.addEventListener("click", function()
    {
      player1Symbol="X";
      player2Symbol="O";
      console.log(player1Symbol);
      console.log(player2Symbol);
      createBoard(questionBox);
    });
    var o = document.createElement("span");
    o.setAttribute("class","button");
    o.innerHTML="O";
    o.addEventListener("click", function()
    {
      player1Symbol="O";
      player2Symbol="X";
      console.log(player1Symbol);
      console.log(player2Symbol);
      createBoard(questionBox);
    });
    numberOfPlayersContainer.appendChild(x);
    numberOfPlayersContainer.appendChild(o);
  }
}
function createBoard(questionBox)
{
  questionBox.parentNode.removeChild(questionBox);
  var gameBox = document.createElement("div")
  gameBox.setAttribute("id","gameBox");
  var row0 = document.createElement("div");
  row0.setAttribute("class","row");
  var col00 = document.createElement("span");
  col00.setAttribute("class","square1");
  col00.setAttribute("id","topLeft");
  col00.addEventListener("click", function mark()
  {
    if (whichTurn%2 !== 0)
    {
      col00.innerHTML=player1Symbol;
      array[0][0]=player1Symbol;
    }
    else
    {
      col00.innerHTML=player2Symbol;
      array[0][0]=player2Symbol;
    }
    whichTurn++;
    checkWin();
    col00.removeEventListener("click", mark);
  });
  var col01 = document.createElement("span");
  col01.setAttribute("class","square2");
  col01.addEventListener("click", function mark()
  {
    if (whichTurn%2 !== 0)
    {
      col01.innerHTML=player1Symbol;
      array[0][1]=player1Symbol;
    }
    else
    {
      col01.innerHTML=player2Symbol;
      array[0][1]=player2Symbol;
    }
    whichTurn++;
    checkWin();
    col01.removeEventListener("click", mark);
  });
  var col02 = document.createElement("span");
  col02.setAttribute("class","square3");
  col02.setAttribute("id","topRight");
  col02.addEventListener("click", function mark()
  {
    if (whichTurn%2 !== 0)
    {
      col02.innerHTML=player1Symbol;
      array[0][2]=player1Symbol;
    }
    else
    {
      col02.innerHTML=player2Symbol;
      array[0][2]=player2Symbol;
    }
    whichTurn++;
    checkWin();
    col02.removeEventListener("click", mark);
  });
  row0.appendChild(col00);
  row0.appendChild(col01);
  row0.appendChild(col02);

  var row1 = document.createElement("div");
  row1.setAttribute("class","row");
  var col10 = document.createElement("span");
  col10.setAttribute("class","square1");
  col10.addEventListener("click", function mark()
  {
    if (whichTurn%2 !== 0)
    {
      col10.innerHTML=player1Symbol;
      array[1][0]=player1Symbol;
    }
    else
    {
      col10.innerHTML=player2Symbol;
      array[1][0]=player2Symbol;
    }
    whichTurn++;
    checkWin();
    col10.removeEventListener("click", mark);
  });
  var col11 = document.createElement("span");
  col11.setAttribute("class","square2");
  col11.setAttribute("id","middle");
  col11.addEventListener("click", function mark()
  {
    if (whichTurn%2 !== 0)
    {
      col11.innerHTML=player1Symbol;
      array[1][1]=player1Symbol;
    }
    else
    {
      col11.innerHTML=player2Symbol;
      array[1][1]=player2Symbol;
    }
    whichTurn++;
    checkWin();
    col11.removeEventListener("click", mark);
  });
  var col12 = document.createElement("span");
  col12.setAttribute("class","square3");
  col12.addEventListener("click", function mark()
  {
    if (whichTurn%2 !== 0)
    {
      col12.innerHTML=player1Symbol;
      array[1][2]=player1Symbol;
    }
    else
    {
      col12.innerHTML=player2Symbol;
      array[1][2]=player2Symbol;
    }
    whichTurn++;
    checkWin();
    col12.removeEventListener("click", mark);
  });
  row1.appendChild(col10);
  row1.appendChild(col11);
  row1.appendChild(col12);

  var row2 = document.createElement("div");
  row2.setAttribute("class","row");
  var col20 = document.createElement("span");
  col20.setAttribute("class","square1");
  col20.setAttribute("id","bottomLeft");
  col20.addEventListener("click", function mark()
  {
    if (whichTurn%2 !== 0)
    {
      col20.innerHTML=player1Symbol;
      array[2][0]=player1Symbol;
    }
    else
    {
      col20.innerHTML=player2Symbol;
      array[2][0]=player2Symbol;
    }
    whichTurn++;
    checkWin();
    col20.removeEventListener("click", mark);
  });
  var col21 = document.createElement("span");
  col21.setAttribute("class","square2");
  col21.addEventListener("click", function mark()
  {
    if (whichTurn%2 !== 0)
    {
      col21.innerHTML=player1Symbol;
      array[2][1]=player1Symbol;
    }
    else
    {
      col21.innerHTML=player2Symbol;
      array[2][1]=player2Symbol;
    }
    whichTurn++;
    checkWin();
    col21.removeEventListener("click", mark);
  });
  var col22 = document.createElement("span");
  col22.setAttribute("class","square3");
  col22.setAttribute("id","bottomRight");
  col22.addEventListener("click", function mark()
  {
    if (whichTurn%2 !== 0)
    {
      col22.innerHTML=player1Symbol;
      array[2][2]=player1Symbol;
    }
    else
    {
      col22.innerHTML=player2Symbol;
      array[2][2]=player2Symbol;
    }
    whichTurn++;
    checkWin();
    col22.removeEventListener("click", mark);
  });
  row2.appendChild(col20);
  row2.appendChild(col21);
  row2.appendChild(col22);

  gameBox.appendChild(row0);
  gameBox.appendChild(row1);
  gameBox.appendChild(row2);
  container.appendChild(gameBox);
}
function checkWin()
{
  //Horazontal
  if (array[0][0] === player1Symbol && array[0][1] === player1Symbol && array[0][2] === player1Symbol)
  {
    console.log("player1 wins!");
  }
  else if (array[0][0] === player2Symbol && array[0][1] === player2Symbol && array[0][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      console.log("player2 wins!");
    }
  }
  if (array[1][0] === player1Symbol && array[1][1] === player1Symbol && array[1][2] === player1Symbol)
  {
    console.log("player1 wins!");
  }
  else if (array[1][0] === player2Symbol && array[1][1] === player2Symbol && array[1][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      console.log("player2 wins!");
    }
  }
  if (array[2][0] === player1Symbol && array[2][1] === player1Symbol && array[2][2] === player1Symbol)
  {
    console.log("player1 wins!");
  }
  else if (array[2][0] === player2Symbol && array[2][1] === player2Symbol && array[2][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      console.log("player2 wins!");
    }
  }

  //Vertical
  if (array[0][0] === player1Symbol && array[1][0] === player1Symbol && array[2][0] === player1Symbol)
  {
    console.log("player1 wins!");
  }
  else if (array[0][0] === player2Symbol && array[1][0] === player2Symbol && array[2][0] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      console.log("player2 wins!");
    }
  }
  if (array[0][1] === player1Symbol && array[1][1] === player1Symbol && array[2][1] === player1Symbol)
  {
    console.log("player1 wins!");
  }
  else if (array[0][1] === player2Symbol && array[1][1] === player2Symbol && array[2][1] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      console.log("player2 wins!");
    }
  }
  if (array[0][2] === player1Symbol && array[1][2] === player1Symbol && array[2][2] === player1Symbol)
  {
    console.log("player1 wins!");
  }
  else if (array[0][2] === player2Symbol && array[1][2] === player2Symbol && array[2][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      console.log("player2 wins!");
    }
  }

  //Diagonal
  if (array[0][0] === player1Symbol && array[1][1] === player1Symbol && array[2][2] === player1Symbol)
  {
    console.log("player1 wins!");
  }
  else if (array[0][0] === player2Symbol && array[1][1] === player2Symbol && array[2][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      console.log("player2 wins!");
    }
  }
  if (array[2][0] === player1Symbol && array[1][1] === player1Symbol && array[0][2] === player1Symbol)
  {
    console.log("player1 wins!");
  }
  else if (array[2][0] === player2Symbol && array[1][1] === player2Symbol && array[0][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      console.log("player2 wins!");
    }
  }
  console.log(array);
}
