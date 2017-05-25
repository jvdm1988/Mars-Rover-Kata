var myRover = {
  position: [0,0],
  direction: 'N'
};

var planet = {
  grid: (10,10,10,10)
};

if (planet => 10){
  alert = "You're going off the grid";
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBackwards(rover){
  switch (rover.direction){
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]--
      break;
    };
    console.log("New Rover position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]++
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function goRight(rover){
  switch (rover.direction){
  case 'N':
    rover.direction='W';
    break;
  case 'E':
    rover.direction='N';
    break;
  case 'S':
    rover.direction='E';
    break;
  case 'W':
    rover.direction='S';
    break;
  };
  console.log("New Rover direction: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

  function goLeft(rover){
    switch (rover.direction){
    case 'N':
      rover.direction='E';
      break;
    case 'E':
      rover.direction='S';
      break;
    case 'S':
      rover.direction='W';
      break;
    case 'W':
      rover.direction='N';
      break;
    };
    console.log("New Rover direction: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

goForward(myRover);
goForward(myRover);
goRight(myRover);
goForward(myRover);
goForward(myRover);
goForward(myRover);
goLeft(myRover);
goForward(myRover);
goForward(myRover);
goBackwards(myRover);
goBackwards(myRover);
