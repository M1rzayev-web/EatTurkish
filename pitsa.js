const pitsaArry = [
    {
        img: "./images/pitsa-peperoni.jpg"
    }
]
const qiymat = document.getElementById('status')
const imgPitsa = document.getElementById('imgPitsa')
function peperoni() {
    qiymat.innerHTML = ("Pitsa peperoni tayyorlash");
// imgPitsa.innerHTML = "./images/pitsa-peperoni.jpg";
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
                          qiymat.innerHTML =
                            "pitsa ustiga kolbasalar qo'yib chiqildi";
                          setTimeout(function () {
                              qiymat.innerHTML = "Pitsa qayta pechka solindi";
                              setTimeout(function () {
                                  qiymat.innerHTML =
                                    "Pitsa tayyor pechtan olib dasturhonga tortsa bo'ladi";
                                  setTimeout(function () {
                                      qiymat.innerHTML = "Yoqimli ishtaha";
                                  }, 3000)
                              },3000)
                          },3000)
                      },3000)
                  }, 3000)
              }, 3000)
          }, 3000)
      }, 3000); 
    }, 3000);
  }, 3000);
}

peperoni();
