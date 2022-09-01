fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let datas='';
    completedata.map((values)=>{
        console.log(completedata)
        datas+=` <div class="card">
                    <h3 class="title">${values.title}</h3>
                    <img class="image" src="${values.image}" alt="">
                    <p class="discription">${values.description}</p>
                    <p class="price">${values.price}</p>
                </div>`
    });
    document.getElementById("cards").innerHTML=datas;
}).catch((err)=>{
 console.log(err);
})