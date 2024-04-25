


var dishes = [
    {
      name: 'Лумпия с соусом ', 
      price: '2500',
      photo: 'dish-11.png',
      text: 'Начинка из свиного фарша, обжаренного с луком, морковью и другими овощами'
    },
    {
      name: 'Рыба с овощами ', 
      price: '3500',
      photo: 'dish-12.png',
      text: 'Очень нежная рыбка, минимум масла и калорий, гарнир готовится в самой рыбе'
    },
    {
      name: 'Чили с тофу ', 
      price: '2700',
      photo: 'dish-13.png',
      text: 'Очень острое и пряное блюдо из рецептов индийско-китайской кухни'
    },
    {
      name: 'Яичница с огурцом', 
      price: '1980',
      photo: 'dish-14.png',
      text: 'Наивкуснейшая яичница с солёными огурцами на завтрак'
    },
];

var drinks = [
  {
    name: 'Горілка Finlandia', 
    price: '1000',
    photo: 'fin2.png',
    text: 'КЛАСИЧНА ГОРІЛКА З ЧИСТИМ, ДЗВІНКИМ СМАКОМ. ТАКА ЯКА МАЄ БУТИ.УНІКАЛЬНА, БО FINLANDIA. '
  },
  {
    name: 'Martini Bianco', 
    price: '1500',
    photo: 'mar.png',
    text: 'Мартини Бьянко – наиболее популярный вермут из всей линейки Martini. '
  },
  {
    name: 'Узвар', 
    price: '1000',
    photo: 'uzvar2.png',
    text: 'Узвар из сухофруктов - очень вкусный и полезный традиционный напиток зимних праздников.'
  },
  {
    name: 'Мохіто', 
    price: '1000',
    photo: 'lemon-moh.png',
    text: 'Мохі́то  — традиційний кубинський алкогольний коктейль. Мохіто традиційно виготовляють з білого рому, цукру , лайму, газованої води та мяти.'
  }
];
var dessert = [
  {
    name: 'Шоколадні роли', 
    price: '500',
    photo: 'ChocolateRolls.png',
    text: 'Шоколадні роли- - Чарівні шоколадні млинці'
  },
  {
    name: 'Вишневі роли', 
    price: '500',
    photo: 'CherryRolls.png',
    text: 'Вишневі роли- - Чарівні вишневі млинці'
  },
  {
    name: 'Крем-сир роли', 
    price: '500',
    photo: 'CreamRoles.png',
    text: 'Крем-сир роли - Чарівні млинці з кремом'
  }
];

// var wishList = [];

var storedWishList = localStorage.getItem('wishList');
var wishList = storedWishList ? JSON.parse(storedWishList) : [];



// --------------------кнопка с тире----------------------------------------

const menuButton = document.querySelector('.menu_button');
const headerContainer = document.querySelector('.header-container');

menuButton.addEventListener('click', () => {
  headerContainer.style.display = headerContainer.style.display === 'flex' ? 'none' : 'flex';
});






// --------------------кнопка меню----------------------------------------

var dishesMenu = document.querySelector('.dishesMenu');
  var button = document.querySelector('.button_menu');
  var menu = document.querySelector('.menu');


  
try {
  menu.style.display = 'none';
  
} catch (error) { }

try {
    button.addEventListener('click', function() {
    if (menu.style.display === 'none' ) {
      menu.style.display = 'flex'; 
    } else {
      menu.style.display = 'none';
    }
  });
} catch (error) {
  
}



  function scrollToElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  

try {
    food.addEventListener('click', function() {
    scrollToElement('.dishesMenu'); showDishes ;
  });

} catch (error) {
  
}




// --------------------Заказ столика---------------------------------------


var orderButton = document.querySelector('.orderButton');
    try {
          orderButton.addEventListener('click', function() {
        window.location.href = 'wishListPage.html';
    });
    } catch (error) {
      
    }


// -------------------------------------------------------------------------


var foodButton = document.getElementById('food');

try {
  foodButton.addEventListener('click', function() {
    showDishes();
});

} catch (error) {
  
}


function showDishes() {
  dishesMenu.innerHTML = '';
  
  dishes.forEach(function (dish) {
    dishesMenu.innerHTML += `
      <div class="dishBox">
        <div class="dishFhoto">
          <img src="./Images/${dish.photo}" alt="${dish.name}">
          <div class="dishPrice">${dish.price}</div>
        </div>
        <div class="dishText">
          <p class="dishTitle">${dish.name}</p>
          ${dish.text}
        </div>
        <button class="addWishList">Додати до списку бажань</button>
      </div>
    `;
  });



// --------------------------------------------------Додаваня до список бажань-------------- 

  let addWishListButtons = dishesMenu.querySelectorAll('.addWishList');
  
  addWishListButtons.forEach(function(addWishListButton, index) {
    addWishListButton.addEventListener('click', function() {
      console.log(wishList);
      var storedWishList = localStorage.getItem('wishList');
      var wishList = storedWishList ? JSON.parse(storedWishList) : [];
      var wishDish = dishes[index];
  

      var isAlreadyInWishList = false;

      for (var i = 0; i < wishList.length; i++) {
      if (wishList[i].name === wishDish.name) {
        isAlreadyInWishList = true;
        break;
      }
    }

    if (!isAlreadyInWishList) {
      wishList.push(wishDish);
      localStorage.setItem('wishList', JSON.stringify(wishList));
    } else {
      alert('Вже додано');
    }


    }); 
  });
}







// ------------------------------------------------------------------------------------

var drinksButton = document.getElementById('drinks');

try {
  drinksButton.addEventListener('click', function() {
  scrollToElement('.dishesMenu');
  showDrinks();
});
} catch (error) {
  
}


function showDrinks() {

  dishesMenu.innerHTML = '';

  drinks.forEach(function(drink) {
      dishesMenu.innerHTML += `
          <div class="dishBox">
              <div class="dishFhoto">
                  <img src="./Images/${drink.photo}" alt="${drink.name}">
                  <div class="dishPrice">${drink.price}</div>
              </div>
              <div class="dishText">
                  <p class="dishTitle">${drink.name}</p>
                  ${drink.text}
              </div>
              <button class="addWishList">Додати до списку бажань</button>
          </div>`;
  });

let addWishListButtons = dishesMenu.querySelectorAll('.addWishList');
  
  addWishListButtons.forEach(function(addWishListButton, index) {
    addWishListButton.addEventListener('click', function() {
      console.log(wishList);
      var storedWishList = localStorage.getItem('wishList');
      var wishList = storedWishList ? JSON.parse(storedWishList) : [];
  
      // Здесь вы определяете wishDish из текущего элемента массива dishes
      var wishDish = drinks[index];
  
       var isAlreadyInWishList = false;

      for (var i = 0; i < wishList.length; i++) {
      if (wishList[i].name === wishDish.name) {
        isAlreadyInWishList = true;
        break;
      }
    }

    if (!isAlreadyInWishList) {
      wishList.push(wishDish);
      localStorage.setItem('wishList', JSON.stringify(wishList));
    } else {
      alert('Вже додано');
    }
      


    }); 
  });


}



// -------------------------------------------------------------------------

var dessertButton = document.getElementById('dessert');

try {
  dessertButton.addEventListener('click', function() {
  scrollToElement('.dishesMenu');
  showDessert();
});
} catch (error) {
  
}


function showDessert() {

  dishesMenu.innerHTML = '';

  dessert.forEach(function(dessert) {
      dishesMenu.innerHTML += `
          <div class="dishBox">
              <div class="dishFhoto">
                  <img src="./Images/${dessert.photo}" alt="${dessert.name}">
                  <div class="dishPrice">${dessert.price}</div>
              </div>
              <div class="dishText">
                  <p class="dishTitle">${dessert.name}</p>
                  ${dessert.text}
              </div>
              <button class="addWishList">Додати до списку бажань</button>
          </div>`;
  });

let addWishListButtons = dishesMenu.querySelectorAll('.addWishList');
  
  addWishListButtons.forEach(function(addWishListButton, index) {
    addWishListButton.addEventListener('click', function() {
      console.log(wishList);
      var storedWishList = localStorage.getItem('wishList');
      var wishList = storedWishList ? JSON.parse(storedWishList) : [];
  
      // Здесь вы определяете wishDish из текущего элемента массива dishes
      var wishDish = dessert[index];

             var isAlreadyInWishList = false;

      for (var i = 0; i < wishList.length; i++) {
      if (wishList[i].name === wishDish.name) {
        isAlreadyInWishList = true;
        break;
      }
    }

    if (!isAlreadyInWishList) {
      wishList.push(wishDish);
      localStorage.setItem('wishList', JSON.stringify(wishList));
    } else {
      alert('Вже додано');
    }
  

      


    }); 
  });


}





// -----------------------------------------------------------------------------------------------------------------

try {
  dishes.forEach(function(dish) {
    dishesMenu.innerHTML += `
    <div class="dishBox">
        <div class="dishFhoto">
        <img src="./Images/${dish.photo}" alt="${dish.name}">
        
            <div class="dishPrice">${dish.price}</div>
        </div>
        <div class="dishText">
            <p class="dishTitle">${dish.name}</p>
            ${dish.text}
        </div>
    </div>`;
});
} catch (error) {
  
}



// -------------------карусель----------------------------------------


// $('.owl_1').owlCarousel();
// $('.owl_2').owlCarousel();

$('.owl_1').owlCarousel();
$('.owl_2').owlCarousel({
  margin:10,
  loop:true,
  // autoWidth:true,
  items:2,
})


// $('.owl-carousel').owlCarousel();
// $('.owl-carousel').owlCarousel({
//   margin:10,
//   loop:true,
//   autoWidth:true,
//   items:8,
// })










