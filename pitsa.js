const pitsaArry = [
  {
    img: "./images/pitsa-peperoni.jpg",
  },
];
const qiymat = document.getElementById("status");
const imgPitsa = document.getElementById("imgPitsa");
function peperoni() {
  qiymat.innerHTML = "Pitsa peperoni tayyorlash";
  setTimeout(function () {
    qiymat.innerHTML = "Xamirni yoyish boshlandi";

    setTimeout(function () {
      qiymat.innerHTML = "Xamir ustiga sous quyildi";
      setTimeout(function () {
        qiymat.innerHTML = "Xamir ustiga pishloq sepildi";
        setTimeout(function () {
          qiymat.innerHTML = "Yarim tayyor pitsa pechka qo'yildi";
          setTimeout(function () {
            qiymat.innerHTML = "Pitsa xamiri pishti";
            setTimeout(function () {
              qiymat.innerHTML = "Pitsa pechtan olindi";
              setTimeout(function () {
                qiymat.innerHTML = "pitsa ustiga kolbasalar qo'yib chiqildi";
                setTimeout(function () {
                  qiymat.innerHTML = "Pitsa qayta pechka solindi";
                  setTimeout(function () {
                    qiymat.innerHTML =
                      "Pitsa tayyor pechtan olib dasturhonga tortsa bo'ladi";
                    setTimeout(function () {
                      qiymat.innerHTML = "Yoqimli ishtaxa";
                    }, 3000);
                  }, 3000);
                }, 3000);
              }, 3000);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}

peperoni();

// const url =  "https://dog.ceo/api/breed/hound/images/random"
// const rasm = document.getElementById("rasm");
// const loading = document.querySelector(".loading")
// const btn=document.getElementById('btn')
// function getImg(url) {
//     loading.classList.add('show')
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         rasm.src = data.message;
//         loading.classList.remove('show')
//     });
// }
// btn.addEventListener('click', function () {
//    getImg(url) 
// } )



const url = "https://jsonplaceholder.typicode.com/users/1/todos"; 
function getTodos(url) {
    
    
}
