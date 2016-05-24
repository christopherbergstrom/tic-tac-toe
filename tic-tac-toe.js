var container;
var numPlayers;
var player1Symbol;
var player2Symbol;
var whichTurn;
var array;
var count = 0;
var col00;
var col01;
var col02;
var col10;
var col11;
var col12;
var col20;
var col21;
var col22;
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
  col00 = document.createElement("span");
  col00.setAttribute("class","square1");
  col00.setAttribute("id","topLeft");
  col00.addEventListener("click", function mark()
  {
    if (numPlayers === 1 && array[0][0] === "")
    {
      col00.innerHTML=player1Symbol;
      array[0][0]=player1Symbol;
      checkWin();
      compMove();
      checkWin();
    }
    else if (numPlayers === 2)
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
    }
    col00.removeEventListener("click", mark);
  });
  col01 = document.createElement("span");
  col01.setAttribute("class","square2");
  col01.addEventListener("click", function mark()
  {
    if (numPlayers === 1 && array[0][1] === "")
    {
      col01.innerHTML=player1Symbol;
      array[0][1]=player1Symbol;
      checkWin();
      compMove();
      checkWin();
    }
    else if (numPlayers === 2)
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
    }
    col01.removeEventListener("click", mark);
  });
  col02 = document.createElement("span");
  col02.setAttribute("class","square3");
  col02.setAttribute("id","topRight");
  col02.addEventListener("click", function mark()
  {
    if (numPlayers === 1 && array[0][2] === "")
    {
      console.log("here");
      console.log(array[0][2]);
      col02.innerHTML=player1Symbol;
      array[0][2]=player1Symbol;
      checkWin();
      compMove();
      checkWin();
    }
    else if (numPlayers === 2)
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
    }
    col02.removeEventListener("click", mark);
  });
  row0.appendChild(col00);
  row0.appendChild(col01);
  row0.appendChild(col02);

  var row1 = document.createElement("div");
  row1.setAttribute("class","row");
  col10 = document.createElement("span");
  col10.setAttribute("class","square1");
  col10.addEventListener("click", function mark()
  {
    if (numPlayers === 1 && array[1][0] === "")
    {
      col10.innerHTML=player1Symbol;
      array[1][0]=player1Symbol;
      checkWin();
      compMove();
      checkWin();
    }
    else if (numPlayers === 2)
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
    }
    col10.removeEventListener("click", mark);
  });
  col11 = document.createElement("span");
  col11.setAttribute("class","square2");
  col11.setAttribute("id","middle");
  col11.addEventListener("click", function mark()
  {
    if (numPlayers === 1 && array[1][1] === "")
    {
      col11.innerHTML=player1Symbol;
      array[1][1]=player1Symbol;
      checkWin();
      compMove();
      checkWin();
    }
    else if (numPlayers === 2)
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
    }
    col11.removeEventListener("click", mark);
  });
  col12 = document.createElement("span");
  col12.setAttribute("class","square3");
  col12.addEventListener("click", function mark()
  {
    if (numPlayers === 1 && array[1][2] === "")
    {
      col12.innerHTML=player1Symbol;
      array[1][2]=player1Symbol;
      checkWin();
      compMove();
      checkWin();
    }
    else if (numPlayers === 2)
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
    }
    col12.removeEventListener("click", mark);
  });
  row1.appendChild(col10);
  row1.appendChild(col11);
  row1.appendChild(col12);

  var row2 = document.createElement("div");
  row2.setAttribute("class","row");
  col20 = document.createElement("span");
  col20.setAttribute("class","square1");
  col20.setAttribute("id","bottomLeft");
  col20.addEventListener("click", function mark()
  {
    if (numPlayers === 1 && array[2][0] === "")
    {
      col20.innerHTML=player1Symbol;
      array[2][0]=player1Symbol;
      checkWin();
      compMove();
      checkWin();
    }
    else if (numPlayers === 2)
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
    }
    col20.removeEventListener("click", mark);
  });
  col21 = document.createElement("span");
  col21.setAttribute("class","square2");
  col21.addEventListener("click", function mark()
  {
    if (numPlayers === 1 && array[2][1] === "")
    {
      col21.innerHTML=player1Symbol;
      array[2][1]=player1Symbol;
      checkWin();
      compMove();
      checkWin();
    }
    else if (numPlayers === 2)
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
    }
    col21.removeEventListener("click", mark);
  });
  col22 = document.createElement("span");
  col22.setAttribute("class","square3");
  col22.setAttribute("id","bottomRight");
  col22.addEventListener("click", function mark()
  {
    if (numPlayers === 1 && array[2][2] === "")
    {
      col22.innerHTML=player1Symbol;
      array[2][2]=player1Symbol;
      checkWin();
      compMove();
      checkWin();
    }
    else if (numPlayers === 2)
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
    }
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
  count++;
  var win = false;
  var who = "";
  //Horazontal
  if (array[0][0] === player1Symbol && array[0][1] === player1Symbol && array[0][2] === player1Symbol)
  {
    win = true;
    who = "Player 1";
    console.log("player1 wins!");
  }
  else if (array[0][0] === player2Symbol && array[0][1] === player2Symbol && array[0][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      win = true;
      who = "Computer";
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      win = true;
      who = "Player 2";
      console.log("player2 wins!");
    }
  }
  if (array[1][0] === player1Symbol && array[1][1] === player1Symbol && array[1][2] === player1Symbol)
  {
    win = true;
    who = "Player 1";
    console.log("player1 wins!");
  }
  else if (array[1][0] === player2Symbol && array[1][1] === player2Symbol && array[1][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      win = true;
      who = "Computer";
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      win = true;
      who = "Player 2";
      console.log("player2 wins!");
    }
  }
  if (array[2][0] === player1Symbol && array[2][1] === player1Symbol && array[2][2] === player1Symbol)
  {
    win = true;
    who = "Player 1";
    console.log("player1 wins!");
  }
  else if (array[2][0] === player2Symbol && array[2][1] === player2Symbol && array[2][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      win = true;
      who = "Computer";
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      win = true;
      who = "Player 2";
      console.log("player2 wins!");
    }
  }

  //Vertical
  if (array[0][0] === player1Symbol && array[1][0] === player1Symbol && array[2][0] === player1Symbol)
  {
    win = true;
    who = "Player 1";
    console.log("player1 wins!");
  }
  else if (array[0][0] === player2Symbol && array[1][0] === player2Symbol && array[2][0] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      win = true;
      who = "Computer";
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      win = true;
      who = "Player 2";
      console.log("player2 wins!");
    }
  }
  if (array[0][1] === player1Symbol && array[1][1] === player1Symbol && array[2][1] === player1Symbol)
  {
    win = true;
    who = "Player 1";
    console.log("player1 wins!");
  }
  else if (array[0][1] === player2Symbol && array[1][1] === player2Symbol && array[2][1] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      win = true;
      who = "Computer";
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      win = true;
      who = "Player 2";
      console.log("player2 wins!");
    }
  }
  if (array[0][2] === player1Symbol && array[1][2] === player1Symbol && array[2][2] === player1Symbol)
  {
    win = true;
    who = "Player 1";
    console.log("player1 wins!");
  }
  else if (array[0][2] === player2Symbol && array[1][2] === player2Symbol && array[2][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      win = true;
      who = "Computer";
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      win = true;
      who = "Player 2";
      console.log("player2 wins!");
    }
  }

  //Diagonal
  if (array[0][0] === player1Symbol && array[1][1] === player1Symbol && array[2][2] === player1Symbol)
  {
    win = true;
    who = "Player 1";
    console.log("player1 wins!");
  }
  else if (array[0][0] === player2Symbol && array[1][1] === player2Symbol && array[2][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      win = true;
      who = "Computer";
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      win = true;
      who = "Player 2";
      console.log("player2 wins!");
    }
  }
  if (array[2][0] === player1Symbol && array[1][1] === player1Symbol && array[0][2] === player1Symbol)
  {
    win = true;
    who = "Player 1";
    console.log("player1 wins!");
  }
  else if (array[2][0] === player2Symbol && array[1][1] === player2Symbol && array[0][2] === player2Symbol)
  {
    if (numPlayers === 1)
    {
      win = true;
      who = "Computer";
      console.log("computer wins!");
    }
    else if (numPlayers === 2)
    {
      win = true;
      who = "Player 2";
      console.log("player2 wins!");
    }
  }
  if (win === true)
  {
    console.log(array[0].length);
    console.log(array[1].length);
    console.log(array[2].length);
    alert(who+" wins!");
    location.reload();
  }
  if (count === 9 && win === false)
  {
    alert("Tie!");
    location.reload();
  }
}
function compMove()
{
  console.log(array);
  //top check for comp
  if (array[0][0] === player2Symbol && array[0][1] === player2Symbol && array[0][2] === "")
  {
    console.log("here");
    array[0][2]=player2Symbol;
    col02.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][0] === player2Symbol && array[0][2] === player2Symbol && array[0][1] === "")
  {
    console.log("here");
    array[0][1]=player2Symbol;
    col01.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][1] === player2Symbol && array[0][2] === player2Symbol && array[0][0] === "")
  {
    console.log("here");
    array[0][0]=player2Symbol;
    col00.innerHTML=player2Symbol;
    return;
  }
  //middle horazontal
  if (array[1][0] === player2Symbol && array[1][1] === player2Symbol && array[1][2] === "")
  {
    console.log("here");
    array[1][2]=player2Symbol;
    col12.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][0] === player2Symbol && array[1][2] === player2Symbol && array[1][1] === "")
  {
    console.log("here");
    array[1][1]=player2Symbol;
    col11.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][1] === player2Symbol && array[1][2] === player2Symbol && array[1][0] === "")
  {
    console.log("here");
    array[1][0]=player2Symbol;
    col10.innerHTML=player2Symbol;
    return;
  }
  //bottom
  if (array[2][0] === player2Symbol && array[2][1] === player2Symbol && array[2][2] === "")
  {
    console.log("here");
    array[2][2]=player2Symbol;
    col22.innerHTML=player2Symbol;
    return;
  }
  else if (array[2][0] === player2Symbol && array[2][2] === player2Symbol && array[2][1] === "")
  {
    console.log("here");
    array[2][1]=player2Symbol;
    col21.innerHTML=player2Symbol;
    return;
  }
  else if (array[2][1] === player2Symbol && array[2][2] === player2Symbol && array[2][0] === "")
  {
    console.log("here");
    array[2][0]=player2Symbol;
    col20.innerHTML=player2Symbol;
    return;
  }
  //left
  if (array[0][0] === player2Symbol && array[1][0] === player2Symbol && array[2][0] === "")
  {
    console.log("here");
    array[2][0]=player2Symbol;
    col20.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][0] === player2Symbol && array[2][0] === player2Symbol && array[1][0] === "")
  {
    console.log("here");
    array[1][0]=player2Symbol;
    col10.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][0] === player2Symbol && array[2][0] === player2Symbol && array[0][0] === "")
  {
    console.log("here");
    array[0][0]=player2Symbol;
    col00.innerHTML=player2Symbol;
    return;
  }
  //middle vertical
  if (array[0][1] === player2Symbol && array[1][1] === player2Symbol && array[2][1] === "")
  {
    console.log("here");
    array[2][1]=player2Symbol;
    col21.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][1] === player2Symbol && array[2][1] === player2Symbol && array[1][1] === "")
  {
    console.log("here");
    array[1][1]=player2Symbol;
    col11.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][1] === player2Symbol && array[2][1] === player2Symbol && array[0][1] === "")
  {
    console.log("here");
    array[0][1]=player2Symbol;
    col01.innerHTML=player2Symbol;
    return;
  }
  //right
  if (array[0][2] === player2Symbol && array[1][2] === player2Symbol && array[2][2] === "")
  {
    console.log("here");
    array[2][2]=player2Symbol;
    col22.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][2] === player2Symbol && array[2][2] === player2Symbol && array[1][2] === "")
  {
    console.log("here");
    array[1][2]=player2Symbol;
    col12.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][2] === player2Symbol && array[2][2] === player2Symbol && array[0][2] === "")
  {
    console.log("here");
    array[0][2]=player2Symbol;
    col02.innerHTML=player2Symbol;
    return;
  }
  //diagonal top left to bottom right
  if (array[0][0] === player2Symbol && array[1][1] === player2Symbol && array[2][2] === "")
  {
    console.log("here");
    array[2][2]=player2Symbol;
    col22.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][0] === player2Symbol && array[2][2] === player2Symbol && array[1][1] === "")
  {
    console.log("here");
    array[1][1]=player2Symbol;
    col11.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][1] === player2Symbol && array[2][2] === player2Symbol && array[0][0] === "")
  {
    console.log("here");
    array[0][0]=player2Symbol;
    col00.innerHTML=player2Symbol;
    return;
  }
  //diagonal top right to bottom left
  if (array[0][2] === player2Symbol && array[1][1] === player2Symbol && array[2][0] === "")
  {
    console.log("here");
    array[2][0]=player2Symbol;
    col20.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][2] === player2Symbol && array[2][0] === player2Symbol && array[1][1] === "")
  {
    console.log("here");
    array[1][1]=player2Symbol;
    col11.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][1] === player2Symbol && array[2][0] === player2Symbol && array[0][2] === "")
  {
    console.log("here");
    array[0][2]=player2Symbol;
    col02.innerHTML=player2Symbol;
    return;
  }
  //top check for player
  if (array[0][0] === player1Symbol && array[0][1] === player1Symbol && array[0][2] === "")
  {
    console.log("here");
    array[0][2]=player2Symbol;
    col02.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][0] === player1Symbol && array[0][2] === player1Symbol && array[0][1] === "")
  {
    console.log("here");
    array[0][1]=player2Symbol;
    col01.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][1] === player1Symbol && array[0][2] === player1Symbol && array[0][0] === "")
  {
    console.log("here");
    array[0][0]=player2Symbol;
    col00.innerHTML=player2Symbol;
    return;
  }
  //middle horazontal
  if (array[1][0] === player1Symbol && array[1][1] === player1Symbol && array[1][2] === "")
  {
    console.log("here");
    array[1][2]=player2Symbol;
    col12.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][0] === player1Symbol && array[1][2] === player1Symbol && array[1][1] === "")
  {
    console.log("here");
    array[1][1]=player2Symbol;
    col11.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][1] === player1Symbol && array[1][2] === player1Symbol && array[1][0] === "")
  {
    console.log("here");
    array[1][0]=player2Symbol;
    col10.innerHTML=player2Symbol;
    return;
  }
  //bottom
  if (array[2][0] === player1Symbol && array[2][1] === player1Symbol && array[2][2] === "")
  {
    console.log("here");
    array[2][2]=player2Symbol;
    col22.innerHTML=player2Symbol;
    return;
  }
  else if (array[2][0] === player1Symbol && array[2][2] === player1Symbol && array[2][1] === "")
  {
    console.log("here");
    array[2][1]=player2Symbol;
    col21.innerHTML=player2Symbol;
    return;
  }
  else if (array[2][1] === player1Symbol && array[2][2] === player1Symbol && array[2][0] === "")
  {
    console.log("here");
    array[2][0]=player2Symbol;
    col20.innerHTML=player2Symbol;
    return;
  }
  //left
  if (array[0][0] === player1Symbol && array[1][0] === player1Symbol && array[2][0] === "")
  {
    console.log("here");
    array[2][0]=player2Symbol;
    col20.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][0] === player1Symbol && array[2][0] === player1Symbol && array[1][0] === "")
  {
    console.log("here");
    array[1][0]=player2Symbol;
    col10.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][0] === player1Symbol && array[2][0] === player1Symbol && array[0][0] === "")
  {
    console.log("here");
    array[0][0]=player2Symbol;
    col00.innerHTML=player2Symbol;
    return;
  }
  //middle vertical
  if (array[0][1] === player1Symbol && array[1][1] === player1Symbol && array[2][1] === "")
  {
    console.log("here");
    array[2][1]=player2Symbol;
    col21.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][1] === player1Symbol && array[2][1] === player1Symbol && array[1][1] === "")
  {
    console.log("here");
    array[1][1]=player2Symbol;
    col11.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][1] === player1Symbol && array[2][1] === player1Symbol && array[0][1] === "")
  {
    console.log("here");
    array[0][1]=player2Symbol;
    col01.innerHTML=player2Symbol;
    return;
  }
  //right
  if (array[0][2] === player1Symbol && array[1][2] === player1Symbol && array[2][2] === "")
  {
    console.log("here");
    array[2][2]=player2Symbol;
    col22.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][2] === player1Symbol && array[2][2] === player1Symbol && array[1][2] === "")
  {
    console.log("here");
    array[1][2]=player2Symbol;
    col12.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][2] === player1Symbol && array[2][2] === player1Symbol && array[0][2] === "")
  {
    console.log("here");
    array[0][2]=player2Symbol;
    col02.innerHTML=player2Symbol;
    return;
  }
  //diagonal top left to bottom right
  if (array[0][0] === player1Symbol && array[1][1] === player1Symbol && array[2][2] === "")
  {
    console.log("here");
    array[2][2]=player2Symbol;
    col22.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][0] === player1Symbol && array[2][2] === player1Symbol && array[1][1] === "")
  {
    console.log("here");
    array[1][1]=player2Symbol;
    col11.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][1] === player1Symbol && array[2][2] === player1Symbol && array[0][0] === "")
  {
    console.log("here");
    array[0][0]=player2Symbol;
    col00.innerHTML=player2Symbol;
    return;
  }
  //diagonal top right to bottom left
  if (array[0][2] === player1Symbol && array[1][1] === player1Symbol && array[2][0] === "")
  {
    console.log("here");
    array[2][0]=player2Symbol;
    col20.innerHTML=player2Symbol;
    return;
  }
  else if (array[0][2] === player1Symbol && array[2][0] === player1Symbol && array[1][1] === "")
  {
    console.log("here");
    array[1][1]=player2Symbol;
    col11.innerHTML=player2Symbol;
    return;
  }
  else if (array[1][1] === player1Symbol && array[2][0] === player1Symbol && array[0][2] === "")
  {
    console.log("here");
    array[0][2]=player2Symbol;
    col02.innerHTML=player2Symbol;
    return;
  }
  //if nothing matches
  //middle
  if (array[1][1] === player2Symbol)
  {
    if (array[0][0] === "")
    {
      console.log("here");
      array[0][0]=player2Symbol;
      col00.innerHTML=player2Symbol;
      return;
    }
    else if (array[0][1] === "")
    {
      console.log("here");
      array[0][1]=player2Symbol;
      col01.innerHTML=player2Symbol;
      return;
    }
    else if (array[0][2] === "")
    {
      console.log("here");
      array[0][2]=player2Symbol;
      col02.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][0] === "")
    {
      console.log("here");
      array[1][0]=player2Symbol;
      col10.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][2] === "")
    {
      console.log("here");
      array[1][2]=player2Symbol;
      col12.innerHTML=player2Symbol;
      return;
    }
    else if (array[2][0] === "")
    {
      console.log("here");
      array[2][0]=player2Symbol;
      col20.innerHTML=player2Symbol;
      return;
    }
    else if (array[2][1] === "")
    {
      console.log("here");
      array[2][1]=player2Symbol;
      col21.innerHTML=player2Symbol;
      return;
    }
    else if (array[2][2] === "")
    {
      console.log("here");
      array[2][2]=player2Symbol;
      col22.innerHTML=player2Symbol;
      return;
    }
  }
  //top left
  if (array[0][0] === player2Symbol)
  {
    if (array[0][1] === "")
    {
      console.log("here");
      array[0][1]=player2Symbol;
      col01.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][1] === "")
    {
      console.log("here");
      array[1][1]=player2Symbol;
      col11.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][0] === "")
    {
      console.log("here");
      array[1][0]=player2Symbol;
      col10.innerHTML=player2Symbol;
      return;
    }
  }
  //top right
  if (array[0][2] === player2Symbol)
  {
    if (array[0][1] === "")
    {
      console.log("here");
      array[0][1]=player2Symbol;
      col01.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][1] === "")
    {
      console.log("here");
      array[1][1]=player2Symbol;
      col11.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][2] === "")
    {
      console.log("here");
      array[1][2]=player2Symbol;
      col12.innerHTML=player2Symbol;
      return;
    }
  }
  //bottom left
  if (array[2][0] === player2Symbol)
  {
    if (array[1][0] === "")
    {
      console.log("here");
      array[1][0]=player2Symbol;
      col10.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][1] === "")
    {
      console.log("here");
      array[1][1]=player2Symbol;
      col11.innerHTML=player2Symbol;
      return;
    }
    else if (array[2][1] === "")
    {
      console.log("here");
      array[2][1]=player2Symbol;
      col21.innerHTML=player2Symbol;
      return;
    }
  }
  //bottom right
  if (array[2][2] === player2Symbol)
  {
    if (array[1][2] === "")
    {
      console.log("here");
      array[1][2]=player2Symbol;
      col12.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][1] === "")
    {
      console.log("here");
      array[1][1]=player2Symbol;
      col11.innerHTML=player2Symbol;
      return;
    }
    else if (array[2][1] === "")
    {
      console.log("here");
      array[2][1]=player2Symbol;
      col21.innerHTML=player2Symbol;
      return;
    }
  }
  //top middle
  if (array[0][1] === player2Symbol)
  {
    if (array[0][0] === "")
    {
      console.log("here");
      array[0][0]=player2Symbol;
      col00.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][1] === "")
    {
      console.log("here");
      array[1][1]=player2Symbol;
      col11.innerHTML=player2Symbol;
      return;
    }
    else if (array[0][2] === "")
    {
      console.log("here");
      array[0][2]=player2Symbol;
      col02.innerHTML=player2Symbol;
      return;
    }
    //odds
    // else if (array[1][0] === "")
    // {
    //   console.log("here");
    //   array[1][0]=player2Symbol;
    //   col10.innerHTML=player2Symbol;
    //   return;
    // }
    // else if (array[1][2] === "")
    // {
    //   console.log("here");
    //   array[1][2]=player2Symbol;
    //   col12.innerHTML=player2Symbol;
    //   return;
    // }
  }
  //left middle
  if (array[1][0] === player2Symbol)
  {
    if (array[0][0] === "")
    {
      console.log("here");
      array[0][0]=player2Symbol;
      col00.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][1] === "")
    {
      console.log("here");
      array[1][1]=player2Symbol;
      col11.innerHTML=player2Symbol;
      return;
    }
    else if (array[2][0] === "")
    {
      console.log("here");
      array[2][0]=player2Symbol;
      col20.innerHTML=player2Symbol;
      return;
    }
    //odds
    // else if (array[0][1] === "")
    // {
    //   console.log("here");
    //   array[0][1]=player2Symbol;
    //   col01.innerHTML=player2Symbol;
    //   return;
    // }
    // else if (array[2][1] === "")
    // {
    //   console.log("here");
    //   array[2][1]=player2Symbol;
    //   col21.innerHTML=player2Symbol;
    //   return;
    // }
  }
  //right middle
  if (array[1][0] === player2Symbol)
  {
    if (array[0][2] === "")
    {
      console.log("here");
      array[0][2]=player2Symbol;
      col02.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][1] === "")
    {
      console.log("here");
      array[1][1]=player2Symbol;
      col11.innerHTML=player2Symbol;
      return;
    }
    else if (array[2][2] === "")
    {
      console.log("here");
      array[2][2]=player2Symbol;
      col22.innerHTML=player2Symbol;
      return;
    }
    //odds
    // else if (array[0][1] === "")
    // {
    //   console.log("here");
    //   array[0][1]=player2Symbol;
    //   col01.innerHTML=player2Symbol;
    //   return;
    // }
    // else if (array[2][1] === "")
    // {
    //   console.log("here");
    //   array[2][1]=player2Symbol;
    //   col21.innerHTML=player2Symbol;
    //   return;
    // }
  }
  //bottom middle
  if (array[2][1] === player2Symbol)
  {
    if (array[2][0] === "")
    {
      console.log("here");
      array[2][0]=player2Symbol;
      col20.innerHTML=player2Symbol;
      return;
    }
    else if (array[1][1] === "")
    {
      console.log("here");
      array[1][1]=player2Symbol;
      col11.innerHTML=player2Symbol;
      return;
    }
    else if (array[2][2] === "")
    {
      console.log("here");
      array[2][2]=player2Symbol;
      col22.innerHTML=player2Symbol;
      return;
    }
    //odds
    // else if (array[1][0] === "")
    // {
    //   console.log("here");
    //   array[1][0]=player2Symbol;
    //   col10.innerHTML=player2Symbol;
    //   return;
    // }
    // else if (array[1][2] === "")
    // {
    //   console.log("here");
    //   array[1][2]=player2Symbol;
    //   col12.innerHTML=player2Symbol;
    //   return;
    // }
  }
  //if nothing still matches
  do
  {
    var move = Math.floor(Math.random()*9);
    if (move === 0)
    {
      if (array[0][0] === "")
      {
        array[0][0] = player2Symbol;
        col00.innerHTML=player2Symbol;
        console.log(array);
        break;
      }
    }
    if (move === 1)
    {
      if (array[0][1] === "")
      {
        array[0][1] = player2Symbol;
        col01.innerHTML=player2Symbol;
        console.log(array);
        break;
      }
    }
    if (move === 2)
    {
      if (array[0][2] === "")
      {
        array[0][2] = player2Symbol;
        col02.innerHTML=player2Symbol;
        console.log(array);
        break;
      }
    }
    if (move === 3)
    {
      if (array[1][0] === "")
      {
        array[1][0] = player2Symbol;
        col10.innerHTML=player2Symbol;
        console.log(array);
        break;
      }
    }
    if (move === 4)
    {
      if (array[1][1] === "")
      {
        array[1][1] = player2Symbol;
        col11.innerHTML=player2Symbol;
        console.log(array);
        break;
      }
    }
    if (move === 5)
    {
      if (array[1][2] === "")
      {
        array[1][2] = player2Symbol;
        col12.innerHTML=player2Symbol;
        console.log(array);
        break;
      }
    }
    if (move === 6)
    {
      if (array[2][0] === "")
      {
        array[2][0] = player2Symbol;
        col20.innerHTML=player2Symbol;
        console.log(array);
        break;
      }
    }
    if (move === 7)
    {
      if (array[2][1] === "")
      {
        array[2][1] = player2Symbol;
        col21.innerHTML=player2Symbol;
        console.log(array);
        break;
      }
    }
    if (move === 8)
    {
      if (array[2][2] === "")
      {
        array[2][2] = player2Symbol;
        col22.innerHTML=player2Symbol;
        console.log(array);
        break;
      }
    }
  } while (true);
}
