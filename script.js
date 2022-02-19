//открытие и закрытие формы
const buttons = document.querySelectorAll('.button');
const form1 = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');

buttons.forEach(function(button){
button.addEventListener('click', () => {
form1.classList.add('open');
popup.classList.add('popup_open');
document.body.classList.toggle('_lock');
})});

const clos = document.querySelector('.close')
console.log(clos);
clos.addEventListener('click', () => {
form1.classList.remove('open');
popup.classList.remove('popup_open');
document.body.classList.remove('_lock');
})
//

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('touch');
    let menuArrows = document.querySelectorAll('.menu_arrow');
    if (menuArrows.length > 0){
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function(e){
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('pc'); 
};
//меню бургер
const iconMenu = document.querySelector('.menu_icon');
 const menuBody=document.querySelector('.menu_body');
if (iconMenu) {
   
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');

    });
}


//прокрутка при клике
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}
//прокрутка при клике на странице метод
const menuLinks2 = document.querySelectorAll('.section_8_link[data-goto]');
if (menuLinks2.length > 0) {
    menuLinks2.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink2 = e.target;
        if (menuLink2.dataset.goto && document.querySelector(menuLink2.dataset.goto)){
            const gotoBlock2 = document.querySelector(menuLink2.dataset.goto);
            const gotoBlockValue2 = gotoBlock2.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue2,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}
// проверка формы отправки данных на адекватность 
// function checkForm(form) {
 
//     const name = form.name.value;
//     const n = name.match(/^[A-Za-zА-Яа-я ]*[A-Za-zА-Яа-я ]+$/);
//     if (!n) {
//        alert("Имя введено неверно, пожалуйста исправьте ошибку");
//        return false;
//     }

//     const phone = form.phone.value;
//     const p = phone.match(/^[0-9+][0-9- ]*[0-9- ]+$/);
//     if (!p) {
//        alert("Телефон введен неверно");
//        return false;
//     }

//     const mail = form.mail.value;
//     const m = mail.match(/^[A-Za-z0-9][A-Za-z0-9\._-]*[A-Za-z0-9_]*@([A-Za-z0-9]+([A-Za-z0-9-]*
//     [A-Za-z0-9]+)*\.)+[A-Za-z]+$/);
//     if (!m) {
//        alert("E-mail введен неверно, пожалуйста исправьте ошибку");
//        return false;
//     }
//     return true;
//  }


// анимация при скролле
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }


  function onEntry2(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show2');
      }
    });
  }

  let observer2 = new IntersectionObserver(onEntry2, options);
  let elements2 = document.querySelectorAll('.element-animation2');
  
  for (let elm of elements2) {
    observer2.observe(elm);
  }

  function onEntry3(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show3');
      }
    });
  }

  let observer3 = new IntersectionObserver(onEntry3, options);
  let elements3 = document.querySelectorAll('.element-animation3');
  
  for (let elm of elements3) {
    observer3.observe(elm);
  }

//   при скролле один блок выталкивает другой

// (function(){
//     var A0 = document.querySelector('.aside1'),
//         A1 = A0.querySelectorAll('.stickyDa');
//     Array.prototype.slice.call(A1).forEach(function(a, index) {
//     var b = null, P = 200;
//     window.addEventListener('scroll', Ascroll, false);
//     document.body.addEventListener('scroll', Ascroll, false);
//     function Ascroll() {
//       if (b == null) {
//         var Sa = getComputedStyle(a, ''), s = '';
//         for (var i = 0; i < Sa.length; i++) {
//           if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
//             s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
//           }
//         }
//         b = document.createElement('div');
//         b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
//         a.insertBefore(b, a.firstChild);
//         var l = a.childNodes.length;
//         for (var i = 1; i < l; i++) {
//           b.appendChild(a.childNodes[1]);
//         }
//        a.style.height = b.getBoundingClientRect().height + 'px';
//         a.style.padding = '0';
//         a.style.border = '0';
//       }
//       var Ra = a.getBoundingClientRect(), R, Rh = Ra.top + b.getBoundingClientRect().height;
//       if (A1[index+1] != undefined) {
//         R = Math.round(Rh - A1[index+1].getBoundingClientRect().top + 5);  // расстояние между блоками, чтобы плавающие элементы не прижимались вплотную друг к другу
//       } else {
//         R = Math.round(Rh - A0.getBoundingClientRect().bottom + parseFloat(getComputedStyle(A0, '').paddingBottom.slice(0, -2)));
//       }
//       if ((Ra.top - P) <= 0) {
//         if ((Ra.top - P) <= R) {
//           b.className = 'stop';
//           b.style.top = - R +'px';
//         } else {
//           b.className = 'sticky';
//           b.style.top = P + 'px';
//         }
//       } else {
//         b.className = 'stop';
//         b.style.top = '0';
//       }
//       window.addEventListener('resize', function() {
//         a.children[0].style.width = getComputedStyle(a, '').width
//       }, false);
//     }
//     })
//     })()

// для соседнего блока выталкивание
    
// (function(){
//     var A2 = document.querySelector('.aside2'),
//         A3 = A2.querySelectorAll('.stickyDa2');
//     Array.prototype.slice.call(A3).forEach(function(a, index) {
//     var b = null, P = 150;
//     window.addEventListener('scroll', Ascroll2, false);
//     document.body.addEventListener('scroll', Ascroll2, false);
//     function Ascroll2() {
//       if (b == null) {
//         var Sa = getComputedStyle(a, ''), s = '';
//         for (var i = 0; i < Sa.length; i++) {
//           if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
//             s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
//           }
//         }
//         b = document.createElement('div');
//         b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
//         a.insertBefore(b, a.firstChild);
//         var l = a.childNodes.length;
//         for (var i = 1; i < l; i++) {
//           b.appendChild(a.childNodes[1]);
//         }
//        a.style.height = b.getBoundingClientRect().height + 'px';
//         a.style.padding = '0';
//         a.style.border = '0';
//       }
//       var Ra = a.getBoundingClientRect(), R, Rh = Ra.top + b.getBoundingClientRect().height;
//       if (A3[index+1] != undefined) {
//         R = Math.round(Rh - A3[index+1].getBoundingClientRect().top + 5);  // расстояние между блоками, чтобы плавающие элементы не прижимались вплотную друг к другу
//       } else {
//         R = Math.round(Rh - A2.getBoundingClientRect().bottom + parseFloat(getComputedStyle(A2, '').paddingBottom.slice(0, -2)));
//       }
//       if ((Ra.top - P) <= 0) {
//         if ((Ra.top - P) <= R) {
//           b.className = 'stop';
//           b.style.top = - R +'px';
//         } else {
//           b.className = 'sticky';
//           b.style.top = P + 'px';
//         }
//       } else {
//         b.className = 'stop';
//         b.style.top = '0';
//       }
//       window.addEventListener('resize', function() {
//         a.children[0].style.width = getComputedStyle(a, '').width
//       }, false);
//     }
//     })
//     })()