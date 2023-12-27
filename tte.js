const dynamicText = document.querySelector("h1 span");

const words = ["Love" , "like Art" , "the Future" , "Everything"];

let wordIndex=0;
let characterIndex=0;
let isDeleting =false;
const typeEffect =() =>
{
    const currentWord =words[wordIndex];
    const currentCharacter=currentWord.substring(0,characterIndex);
    dynamicText.textContent = currentCharacter;
    dynamicText.classList.add("stop-blinking");
   
    if( !isDeleting  && characterIndex < currentWord.length)
    {
        characterIndex++;
        setTimeout(typeEffect ,200);
    }
    else if(isDeleting && characterIndex > 0)
    {
        characterIndex--;
        setTimeout(typeEffect,100);
        
    }
    else
    {
        isDeleting= !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex= !isDeleting ? (wordIndex +1) % words.length : wordIndex;
        setTimeout(typeEffect,1200);
    }

  }

  typeEffect();


let c=2; //Explanation for isDeleting keyword in above logic

let  d=3;

  let a =true;
let e = (a && c>d );
console.log(e);
console.log(!a);