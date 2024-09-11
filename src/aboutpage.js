const content = document.querySelector("#content");

function createAboutpage(){
    content.innerHTML = "";
    content.innerHTML += " <h1>Please read some shit about us dawg!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vel libero vel ligula fringilla faucibus. Donec euismod orci vel urna placerat, a luctus enim volutpat. Sed varius, enim ut pulvinar consectetur, felis ex hendrerit arcu, ac ullamcorper nunc velit in arcu. Donec id neque eget est placerat iaculis.</p>";
};

export {createAboutpage};