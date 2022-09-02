fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let datas='';
    completedata.map((values)=>{
        console.log(completedata)
        datas+=` <div class="card">
        <div class="title">${values.title}</div>
        <img src="${values.image}" alt="" class="image">
        <p class="price">₹${values.price}</p>
    </div> `
    });
    document.getElementById("cards").innerHTML=datas;
}).catch((err)=>{
 console.log(err);
})
