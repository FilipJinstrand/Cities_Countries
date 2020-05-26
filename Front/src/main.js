var page = document.getElementById("content")

fetch('http://localhost:3000/country')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        DisplayCountries(data);
    });



function DisplayCountries(data) {
    var countryList = document.getElementById("countryList")
    var img = "";
    data.forEach(element => {
        switch (element.id) {
            case 1:
                img = "../img/Flag_of_Sweden.gif"
                break;
            case 2:
                img = "../img/Flag_of_Finland.gif"
                break;
            case 3:
                img = "../img/Flag_of_Norway.gif"
                break;
            default:
                break;
        };
        countryList.insertAdjacentHTML("afterbegin", `
            <li>
                <div id="countryCard_${element.id}" class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${img}" class="card-img" alt="..." style="height: 150px">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${element.countryname}</h5>
                                <p class="card-text">Huvudstad.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>`
        );
    });

}