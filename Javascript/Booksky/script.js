var popup_overlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".popup-box")
var add_button = document.getElementById("add-button")

add_button.addEventListener("click",function(){
    popup_overlay.style.display="block"
    popup_box.style.display = "block"
    
})
cancel-popup_box.addEventListener("click", function(event){
    event.preventDefault()
    popup_overlay.style.display="none"
    popup_box.style.display = "none"
})

//select elements for creating new book
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description-input")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput}</h2>
    <h5>${bookauthorinput}</h5>
    <p>${bookdescription}</p>
    <button onclick="deletenote()">Delete</button>` //template ilterals
    container.append(div)
    popup_overlay.style.display="none"
    popup_box.style.display = "none"

})
function deletenote(event){
    event.target.parentElement.remove()
}