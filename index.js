const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
    
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left + 1}px`


  }
  }


    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
          moveDodgerLeft();
        }
        if (e.key === "ArrowRight") {
          moveDodgerRight();
          }
      });
    
    

  
  /*
  function moveDodgerRight() {
      const rightNumbers = getComputedStyle("px", "");
      const right = parseInt(rightNumbers, 10);

    if (right > 0) {
        getComputedStyle = `${right - 1}px`;
      }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
      moveDodgerRight();
      }
  });



/*

function moveDodgerRight() {
    const rightNumbers = dodger.style.getComputedStyle('px', '')
    const right = parseInt(rightNumbers, 10);
  
    if (left > 0) {
      dodger.style.getComputedStyle = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
    if (right > 0) {
      dodger.style = `${left + 1}px`;
    }
  }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

function moveDodgerRight() {
    const rightNumbers = dodger.style("px", "");
    const right = parseInt(rightNumbers, 10);
  

  */