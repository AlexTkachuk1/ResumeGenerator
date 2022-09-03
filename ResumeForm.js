let Submit =  document.getElementById('submit');
    Submit.addEventListener("click", function(e){
        e.preventDefault();
    let Text = document.getElementById('text');
    Text.textContent = " ";
    let Alerts = document.getElementById('alerts');

    let Url = document.getElementById('Url').value;
    
    if(Url.length > 0){
        let Img = document.getElementById('img');
        Img.src = Url;
    }

    let FirstName = document.getElementById('FirstName').value;

    if(FirstName.length<2){
        Text.innerHTML += "Имя слишком короткое.";
    }
    if(FirstName.length>10){
        Text.innerHTML += "Имя слишком длинное.";
    }
    
    let LastName = document.getElementById('LastName').value;

    if(LastName.length<2){
        Text.innerHTML += "\n Фамилия слишком короткое.";
    }
    if(FirstName.length>10){
        Text.innerHTML += "\n Фамилия слишком длинная.";
    }

    let MiddleName = document.getElementById('MiddleName').value;

    if(MiddleName.length<2){
        Text.innerHTML += "\n Отчество слишком короткое.";
    }
    if(MiddleName.length>10){
        Text.innerHTML += "\n Отчество слишком длинное.";
    }

    // просто посмотрел максимально возможную длинну электронной почты для экономии времени,
    // т.к. мне показалось что в данном задании  это не принципиально , но лучшим решением былобы написать регулярное выражение.
    let Email = document.getElementById('Email').value;

    if(Email.length<=5 || Email.length>64 ){
        Text.innerHTML += "\n Почта введена не корректно , пожалуйста перепроверьте данные и попробуйте ввести снова.";
    }

    let Telephone = document.getElementById('Telephone').value;

    let regex = /^(\+375|80)(29|25|44|33)(\d{7})$/;
    if(!regex.test(Telephone)){
        Text.innerHTML += "\n Телефон введен не корректно , пожалуйста перепроверьте данные и попробуйте ввести снова.";
    }

    let YearOfBirth = document.getElementById('YearOfBirth').value;
    let yearOfBirth =  new Date(YearOfBirth);
    let DateNow = new Date();
    let MinimumDate = new Date('01 01 1920');
    if(yearOfBirth < MinimumDate || yearOfBirth > DateNow){
        Text.innerHTML += "\n Год введен не корректно , пожалуйста перепроверьте данные и попробуйте ввести снова." ;
    }
    });
    