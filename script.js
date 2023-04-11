 //  ------------------ task1 --------------------------

 function createAdder(num) {
    return function(x) {
      return x + num;
    }
  }
  
  const add5 = createAdder(5);
console.log("answer of Question 1 is = " + add5(+prompt("please enter a number"))); 


//  ------------------ task2 --------------------------

let arr = ["1", "3", "5", "7", "9"];
let num = prompt("please enter number to find in array");

function recursiveSearch(arr, num) {

    if (arr.length === 0) {
      return false;
    }
    
    if (arr[0] === num) {
      return true;
    }
    
    return recursiveSearch(arr.slice(1), num);
  }

  let findValue = recursiveSearch(arr, num);
  console.log("Question 2 answer is = " + findValue)
  
// -------------------------- task 3 ----------------------------

function addParagraph(text) {
    const paragraph = document.createElement('p'); 
    paragraph.textContent = text; 
    document.body.appendChild(paragraph);
  }

  addParagraph('Hello, world!');

  // -------------------------- task 4 ----------------------------

  function addListItem(text) {
    
    const newItem = document.createElement('li');
    newItem.textContent = text;
    const list = document.querySelector('ul');
    list.appendChild(newItem);
  }

  addListItem("list item created with javaScript")

  // -------------------------- task 5 ----------------------------

  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  const myDiv = document.getElementById('body');
  changeBackgroundColor(myDiv, 'pink');

    // -------------------------- task 6 ----------------------------

    function saveObjectToLocalStorage(key, object) {
        
          const serializedObject = JSON.stringify(object);
          localStorage.setItem(key, serializedObject);
        
      }
      const myObject = "kashif";
      saveObjectToLocalStorage('userName', myObject);
            
// -------------------------- task 7 ----------------------------


// -------------------------- task 8 ----------------------------

function saveObjectToLocalStorage1(obj) {
    Object.keys(obj).forEach(function(key) {
      localStorage.setItem(key, obj[key]);
    });
  
    var newObj = {};
    Object.keys(obj).forEach(function(key) {
      newObj[key] = localStorage.getItem(key);
    });
  
    return newObj;
  }

  saveObjectToLocalStorage1('height');


    
  
    
