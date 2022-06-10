function openPopup(event){
    popupForm.classList.add('popup_opened');
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
}

function closePopup(event){
    popupForm.classList.remove('popup_opened');
}

function addLike(event){
    if(event.target.classList.contains('place__like_active')){
        event.target.classList.remove('place__like_active');
    } else {
        event.target.classList.add('place__like_active');
    }
}

function formSubmitHandler (event) {
    event.preventDefault();
    let name = nameInput.value;
    let job = jobInput.value;
    title.textContent = name;
    subtitle.textContent = job;
}

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup');
let likes = document.querySelectorAll('.place__like');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_content_name');
let jobInput = document.querySelector('.popup__input_content_description');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
likes.forEach(like => {
    like.addEventListener('click', addLike);
});