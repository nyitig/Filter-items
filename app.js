// create mainDivContainer innerHTML
let imgPropertiesArray=[
  { 
    category : `állatok`,
    src : `assets/pic/allatok01.jpg`,
    alt : `futókacsák`,
    text : `Indiai futókacsák`,
  },
  { 
    category : `állatok`,
    src : `assets/pic/allatok02.jpg`,
    alt : `futókacsák`,
    text : `Indiai futókacsák`,
  },
  { 
    category : `állatok`,
    src : `assets/pic/allatok03.jpg`,
    alt : `macskák`,
    text : `Macskák`,
  },
  { 
    category : `állatok`,
    src : `assets/pic/allatok04.jpg`,
    alt : `bárányok`,
    text : `Bárányok`,
  },
  { 
    category : `savanyúság`,
    src : `assets/pic/csalamade01.jpg`,
    alt : `káposzta`,
    text : `Reszelt káposzta`,
  },
  { 
    category : `savanyúság`,
    src : `assets/pic/csalamade02.jpg`,
    alt : `uborka és répa`,
    text : `Reszelt uborka és répa`,
  },  { 
    category : `savanyúság`,
    src : `assets/pic/csalamade03.jpg`,
    alt : `paprika`,
    text : `Reszelt paprika`,
  },  { 
    category : `savanyúság`,
    src : `assets/pic/csalamade04.jpg`,
    alt : `savanyúság üvegben`,
    text : `Savanyúság üvegben`,
  },
  {
  category : `himesháza`,
  src : `assets/pic/himes01.jpg`,
  alt : `Rózsák`,
  text : `Rózsák`,
  },
 {
  category : `himesháza`,
  src : `assets/pic/himes02.jpg`,
  alt : `Utcai dísz`,
  text : `Utcai dísz`,
  },
  {
    category : `himesháza`,
    src : `assets/pic/himes03.jpg`,
    alt : `Virágzó talicska`,
    text : `Virágzó talicska`,
  },
  {
    category : `himesháza`,
    src : `assets/pic/himes04.jpg`,
    alt : `Buszmegálló`,
    text : `Buszmegálló`,
  },
  {
    category : `szőlőhegy`,
    src : `assets/pic/szolohegy01.jpg`,
    alt : `tyúk és macska`,
    text : `Tyúk és macska`,
  },
  {
    category : `szőlőhegy`,
    src : `assets/pic/szolohegy02.jpg`,
    alt : `baromfik`,
    text : `Baromfik`,
  },
  {
    category : `szőlőhegy`,
    src : `assets/pic/szolohegy03.jpg`,
    alt : `macska`,
    text : `Macska`,
  },
  {
    category : `szőlőhegy`,
    src : `assets/pic/szolohegy04.jpg`,
    alt : `savanyúság üvegben`,
    text : `Szőlőhegyi látkép`,
  },
]
const mainDivContainer=document.getElementById('mainDivContainer') 
let mainDivContainerTemplate=``

createMainContainer()

function createMainContainer() {
  mainDivContainerTemplate = imgPropertiesArray.map(template=> `
  <div id="" class="mainDivBox displayFlexColumn alignItemCent justyContCent boxshadow" data-category="${template.category}">
  <div id="mainImgBoxContainer" class="displayFlexColumn alignItemCent justyContCent">
    <img id="" class="mainDivBoxImg" src="${template.src}" alt="${template.src}">
  </div>
  <div id="" class="marginTopP mainBoxText">
    <p id="" class="mainDivBoxP">${template.text}</p>
  </div>
</div>
  `
  ).join('')
  mainDivContainer.innerHTML=mainDivContainerTemplate
}
// Filter => category

const dataFilterDiv=document.querySelectorAll('[data-filter]')
const dataCategoryDiv=document.querySelectorAll('[data-category]')

for (let i = 0; i < dataFilterDiv.length; i++) {
   dataFilterDiv[i].addEventListener("click", () => {
    // amire klikk, az aktív legyen, a többi nem
    for (let z = 0; z < dataFilterDiv.length; z++) {
      if (i==z) {
        if (dataFilterDiv[z].classList.contains('active')==false) {
          dataFilterDiv[z].classList.add("active")
        } 
      }else {
        if (dataFilterDiv[z].classList.contains('active')==true) {
          dataFilterDiv[z].classList.toggle('active')
        }
      }
    }
    // azon data-category, ahol egyezik, az maradjon, a többi legyen elrejtve
  
    let filterText=dataFilterDiv[i].dataset.filter.toLowerCase()
    // össze kell vetni a categóriákkal
    if (filterText!="összes") {
      for (let x = 0; x < dataCategoryDiv.length; x++) {
        let dataCategoryText=dataCategoryDiv[x].dataset.category.toLowerCase()
        if (filterText==dataCategoryText && dataCategoryDiv[x].classList.contains('disabled')==true) {
          dataCategoryDiv[x].classList.toggle('hiddenDisplay')
          setTimeout(() => {
           dataCategoryDiv[x].classList.toggle('disabled') 
          }, 300);
        }
        if (filterText!=dataCategoryText && dataCategoryDiv[x].classList.contains('disabled')==false) {
                 dataCategoryDiv[x].classList.add('disabled')
                 setTimeout(() => {
                  dataCategoryDiv[x].classList.add('hiddenDisplay')
                 }, 300);
          }
      }
    } else {
      for (let index = 0; index < dataCategoryDiv.length; index++) {
        dataCategoryDiv[index].classList.remove('hiddenDisplay')
        dataCategoryDiv[index].classList.remove('disabled')
      }
    }
  })  
 }
//  Filter => type in input
const searchInput=document.getElementById('serchInput')
const mainDivBoxP=document.querySelectorAll('.mainDivBoxP')
searchInput.addEventListener("keyup", (event) => {
  dataFilterDiv.forEach((value,index)=> {
    dataFilterDiv[index].classList.forEach((vol,ind)=> {
      let searchClass=dataFilterDiv[index].classList[ind].toString()
      let acitveText="active"
      if (searchClass==acitveText) {
            dataFilterDiv[index].classList.remove('active')
          }
      })
  }) 
  const searchInputText=event.target.value.toLowerCase().toString()
  if (event.key==="Enter") {
    event.target.value=""
    serchInput.blur()
  }
  if (searchInputText=="" && dataFilterDiv[0].classList.contains('acitve')==false) {
    dataFilterDiv[0].classList.add('active')
  }
  // P text  and category search

  mainDivBoxP.forEach((nev,index) => {
    let mainPText=nev.innerHTML.toLowerCase().toString()
    let dataCategoryText=dataCategoryDiv[index].dataset.category.toLowerCase().toString()
  const visible= mainPText.includes(searchInputText)==true || dataCategoryText.includes(searchInputText)==true 
 
  console.log(visible)
  console.log("Itt végződik")
  dataCategoryDiv[index].classList.toggle("disabled", !visible)
  setTimeout(() => {
    dataCategoryDiv[index].classList.toggle('hiddenDisplay', !visible)
  }, 300);
  })
 /* mainDivBoxP.forEach((nev, index) => {
    let mainPText=nev.innerHTML.toLowerCase().toString()
    if (dataCategoryDiv[index].classList.contains('disabled')==false && mainPText.includes(searchInputText)==false ) {
     console.log("EZeket az indexeket zárom: "+index)
      dataCategoryDiv[index].classList.add('disabled')
      setTimeout(() => {
        dataCategoryDiv[index].classList.add('hiddenDisplay')
      }, 300);
    }
    if (mainPText.includes(searchInputText)==true ) {
      console.log("EZeket az indexeket nyitom: "+index) 
      dataCategoryDiv[index].classList.remove('hiddenDisplay')
      setTimeout(() => {
      dataCategoryDiv[index].classList.remove('disabled')
      }, 300);
    }   
  })*/

  // category text search
 /*   dataCategoryDiv.forEach((nev,index)=> {
     let dataCategoryText=dataCategoryDiv[index].dataset.category.toLowerCase().toString()
     console.log(dataCategoryText)
     if (dataCategoryDiv[index].classList.contains('disabled')==false && dataCategoryText.includes(searchInputText)==false ) {
      console.log("EZeket az indexeket zárom: "+index)
       dataCategoryDiv[index].classList.add('disabled')
       setTimeout(() => {
         dataCategoryDiv[index].classList.add('hiddenDisplay')
       }, 300);
     }
     if (dataCategoryText.includes(searchInputText)==true ) {
       console.log("EZeket az indexeket nyitom: "+index) 
       dataCategoryDiv[index].classList.remove('hiddenDisplay')
       setTimeout(() => {
       dataCategoryDiv[index].classList.remove('disabled')
       }, 300);
     } 
    })*/
})