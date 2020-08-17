
function getupdate() {
    console.log("hello");


    let date = document.getElementById('Date').value;
    let month = document.getElementById('Month').value;
    let year = document.getElementById('Year').value;
    let Hours = document.getElementById('Hours').value;
    let Minutes = document.getElementById('Minutes').value;
    let ttit = document.getElementById('tit').value;
    let des = document.getElementById('Des').value;

    console.log("hello");
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([ttit, des, date, month, year]);
        console.log(itemJsonArray);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([ttit, des, date, month, year, Hours, Minutes]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

    }
    update();

    // console.log(itemJsonArray)
}


function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];

        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
    }
    // console.log(itemJsonArraystr);
    let tablebody = document.getElementById("tablebody");
    let str = "";

    itemJsonArray.forEach((element, index) => {
        str += `   
    
           <tr>
         
                                      <td style="font-size: 15px;">${index + 1}</td>
                                    <td style="font-size: 17px; word-break: break-all">${element[0]}</td>
                                    <td style="font-size: 15px;word-break: break-all">${element[1]}</td>
                                      <td style="font-size: 15px; word-break: break-all ">${element[2]}/${element[3]}/${element[4]} <br> Time: ${element[5]}:${element[6]}</td>

                                  
                           <br>
                                     
                                    <td> <button type="submit" class="btn btn-danger" id: "lll" onclick="deldete(${index})"
                                            style="width: auto;  ">Remove</button>
                                    </td>

                                </tr>
                                `;

    });
    tablebody.innerHTML = str;

}



add = document.getElementById("add");
add.addEventListener("click", () => {
    getupdate();
}
)

update();



function remove() {

    if (confirm("Please do not procastinate things or just leave things incomplete. Do you really want to clear the entire list")) {
        localStorage.clear();
        update();
    }
}
function deldete(item) {

    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.splice(item, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    update();
}








const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    a = new Date();
    a.getHours() + a.get

    let date = a.toLocaleDateString(undefined, options);
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();

    document.getElementById('date').innerHTML = date;
    document.getElementById('Time').innerHTML = time;
    // console.log(date)



    // if (a.getHours() < 6) {
    //     document.getElementById('back-img').style.backgroundImage = "url('pexels-pixabay-207130.jpg')"
    // }
    // else if (a.getHours() < 16) {
    //     document.getElementById('back-img').style.backgroundImage = "url('pexels-splitshire-1562.jpg')"
    // }
    // else if (a.getHours() < 19) {
    //     document.getElementById('back-img').style.backgroundImage = "url('pexels-stephan-seeber-1261728.jpg')"
    // }
    // else {
    //     document.getElementById('back-img').style.backgroundImage = "url('pexels-pixabay-207130.jpg')"
    // }
    // sample();

}, 1000);
// localStorage.clear();

sensor();

function sensor() {
    var abc = "";
    var bcd = "";
    var def = "";
    var fgh = "";
    var ijk = "";
    var lmn = "";

    a = new Date();
    a.getHours() + a.get
    // console.log(a.getDate())

    let date = a.toLocaleDateString(undefined, options);

    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    // var h2 = document.createElement('h2');

    document.getElementById('date').innerHTML = date;
    document.getElementById('Time').innerHTML = time;





    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];

        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
    }
    // console.log(itemJsonArray[0][1]);
    var fgh = "";
    var ijk = "";
    var lmn = "";
    for (let i = 0; i < itemJsonArray.length; i++) {
        console.log(i);

        if (a.getDate() > itemJsonArray[i][2]) {
            // console.log(a.getHours - itemJsonArray[i][5]);
            def = itemJsonArray[i][5];
            // console.log(def);
            bcd = (a.getHours() - itemJsonArray[i][5]);
            // console.log(bcd)
            fgh = itemJsonArray[i][2];
            // console.log(fgh);
            ijk = (a.getDate() - itemJsonArray[i][2]);
            // console.log(ijk);

            abc = "Your " + itemJsonArray[i][0] + " task is Pending by " + bcd + " hours and " + ijk + " days. Please remove it or re-schedule";

            // abc = document.createText('you are :' + itemJsonArray[0][1] + ' days old')
            // document.getElementById("final").style.display = "flex";

            // document.getElementById('kkkkk').appendChild(itemJsonArray[i][5]);

            alert(abc);

        }
        else if (a.getDate() > itemJsonArray[i][2] && a.getHours() > itemJsonArray[i][5]) {
            console.log(a.getHours - itemJsonArray[i][5]);
            def = itemJsonArray[i][5];
            console.log(def);
            bcd = (a.getHours() - itemJsonArray[i][5]);
            console.log(bcd)
            fgh = itemJsonArray[i][2];
            console.log(fgh);
            ijk = (a.getDate() - itemJsonArray[i][2]);
            console.log(ijk);

            abc = "Your " + itemJsonArray[i][0] + " task is Pending by " + bcd + " hours and " + ijk + " days. Please remove it or re-schedule";

            // abc = document.createText('you are :' + itemJsonArray[0][1] + ' days old')
            // document.getElementById("final").style.display = "flex";

            // document.getElementById('kkkkk').appendChild(itemJsonArray[i][5]);

            alert(abc);
        }
        else if (a.getHours() > itemJsonArray[i][5] && a.getDate() < itemJsonArray[i][2]) {
            // console.log(a.getHours - itemJsonArray[i][5]);
            // def = itemJsonArray[i][5];
            // console.log(def);
            // bcd = (a.getHours() - itemJsonArray[i][5]);
            // console.log(bcd)
            // fgh = itemJsonArray[i][2];
            // console.log(fgh);
            // ijk = (a.getDate() - itemJsonArray[i][2]);

            // console.log(ijk);

            // abc = "Your " + itemJsonArray[i][0] + " task is Pending by " + bcd + " hours and " + ijk + " days. Please remove it or re-schedule";
            // abc = document.createText('you are :' + itemJsonArray[0][1] + ' days old')
            // document.getElementById("final").style.display = "flex";

            // document.getElementById('kkkkk').appendChild(itemJsonArray[i][5]);

            // alert("abc");

        }
        // else if (a.getDate() > itemJsonArray[i][2] && a.getHours() < itemJsonArray[i][5]) {

        //     fgh = itemJsonArray[i][2];
        //     console.log(fgh);
        //     ijk = (a.getDate() - itemJsonArray[i][2]);
        //     console.log(ijk);
        //     abc = "Your " + itemJsonArray[i][0] + " task is Pending by " + ijk + " days. Please remove it or re-schedule";
        // }
        else {


        }




        // if (a.getHours > itemJsonArray[i][5]) {

        //     document.getElementById("final").style.display = "inline";
        //     console.log(itemJsonArray[i][1]);
        //     console.log("is Pending ")
        // }

        console.log(itemJsonArray[i][1]);

    }




}






