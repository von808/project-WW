document.addEventListener('DOMContentLoaded', () => {

  //============================================================SIDEBAR-START
  const sidebarBtn = document.querySelector('.sidebar__btn-open');
  const sidebar = document.querySelector('.sidebar');

  sidebarBtn.onclick = function () {
    sidebar.classList.toggle('sidebar-open')
  }
  //============================================================SIDEBAR-END

  //============================================================COPY-START
  let copy = (copyText) => {
    document.getElementById(copyText).select();

    document.execCommand('copy');
  }

  (function () {
    var caseItem = document.querySelectorAll('.copy-box > .btn__copy'),
      active = document.getElementsByClassName('copied');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('copied');

        this.classList.toggle('copied');
      });
    });
  })();
  //============================================================COPY-END

  //============================================================DROPDOWN-START
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('dropdown__list--visible');
      this.classList.add('dropdown__button--active');
    });

    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerHTML = this.innerHTML;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
      });
    });

    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
      }
    });
  });
  //============================================================DROPDOWN-END

  //============================================================DROPDOWN-CSTM-START
  const cstmDropdownItem = document.querySelectorAll('.dropdown__list-item');
  const cstmDropdown = document.querySelector('.dropdown');

  for (let btn of cstmDropdownItem) {
    btn.addEventListener('click', dropdowPlaceholderActive)
  }

  function dropdowPlaceholderActive() {
    this.parentNode.parentNode.classList.add('cstm-dropdown-active');
  }
  //============================================================DROPDOWN-CSTM-END

  //============================================================RATING-START
  const ratings = document.querySelectorAll('.rating');
  if (ratings.length > 0) {
    initRatings();
  }

  function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }

    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains('rating_set')) {
        setRating(rating);
      }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active');
      ratingValue = rating.querySelector('.rating__value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.rating__item');
      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];
        ratingItem.addEventListener("mouseenter", function (e) {
          initRatingVars(rating);
          setRatingActiveWidth(ratingItem.value);
        });
        ratingItem.addEventListener("mouseleave", function (e) {
          setRatingActiveWidth();
        });
        ratingItem.addEventListener("click", function (e) {
          initRatingVars(rating);

          if (rating.dataset.ajax) {
            setRatingValue(ratingItem.value, rating);
          } else {
            ratingValue.innerHTML = index + 1;
            setRatingActiveWidth();
          }
        });
      }
    }
  }
  //============================================================RATING-END

  //============================================================MODAL-START
  const modalOpen = document.querySelectorAll('.btn, .modal-open');
  const modalClose = document.querySelectorAll('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay ');
  const modals = document.querySelectorAll('.modal');

  modalOpen.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');
    });
  });

  modalClose.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
        modalOverlay.classList.remove('modal-overlay--visible');
      });

      document.querySelector(`[data-target="${path}"]`).classList.remove('modal--visible');
    });
  });

  modalOverlay.addEventListener('click', (e) => {

    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    }
  });
  //============================================================MODAL-END

  //============================================================TAB-START
  const tabBtn = document.querySelectorAll('.tab-btn')
  const tabItem = document.querySelectorAll('.tab-item')

  tabBtn.forEach(tabClick);

  function tabClick(item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('tab-active')) {

        tabBtn.forEach(function (item) {
          item.classList.remove('tab-active');
        });

        tabItem.forEach(function (item) {
          item.classList.remove('tab-active');
        });

        currentBtn.classList.add('tab-active');
        currentTab.classList.add('tab-active');
      }
    })
  }
  //============================================================TAB-END

  //============================================================INPUT-NUMBER-START
  $(function () {

    $(document).on("click", ".input-number__arrow--minus", function () {
      let total = $(this).next();
      if (total.val() > 0) {
        total.val(+total.val() - 1);
      }
    });

    $(document).on("click", ".input-number__arrow--plus", function () {
      let total = $(this).prev();
      total.val(+total.val() + 1);
    });

  });
  //============================================================INPUT-NUMBER-END

  //============================================================WALLET-PAYMENT-START

  const wPayment1 = document.querySelector('#wallet-payment-1')
  const wPayment2 = document.querySelector('#wallet-payment-2')
  const wPayment3 = document.querySelector('#wallet-payment-3')
  const wPayment4 = document.querySelector('#wallet-payment-4')

  const wCheckbox1 = document.querySelector('#wallet-checkbox-1')
  const wCheckbox2 = document.querySelector('#wallet-checkbox-2')
  const wCheckbox3 = document.querySelector('#wallet-checkbox-3')
  const wCheckbox4 = document.querySelector('#wallet-checkbox-4')

  wCheckbox1.addEventListener('change', () => {
    if (wCheckbox1.checked) {
      wPayment1.style.display = "flex";
    } else {
      wPayment1.style.display = "none";
    }
  })

  wCheckbox2.addEventListener('change', () => {
    if (wCheckbox2.checked) {
      wPayment2.style.display = "flex";
    } else {
      wPayment2.style.display = "none";
    }
  })

  wCheckbox3.addEventListener('change', () => {
    if (wCheckbox3.checked) {
      wPayment3.style.display = "flex";
    } else {
      wPayment3.style.display = "none";
    }
  })

  wCheckbox4.addEventListener('change', () => {
    if (wCheckbox4.checked) {
      wPayment4.style.display = "flex";
    } else {
      wPayment4.style.display = "none";
    }
  })

  //============================================================WALLET-PAYMENT-END

  //============================================================INPUT-WIDTH-START
  $(function () {

    var $input = $('.input'),
      $buffer = $('.input-buffer');

    // $input.on('input', function () {
    //   $buffer.text($input.val());
    //   $input.width($buffer.width());
    // });

    for (let inputWidthElem of $input) {
      inputWidthElem.addEventListener('input', inputWidthFunc)
    }

    function inputWidthFunc() {
      $buffer.text($input.val());
      $input.width($buffer.width());
    }
  });
  //============================================================INPUT-WIDTH-END

  //============================================================DATEPICKER-START
  const picker1 = new easepick.create({
    element: document.getElementById('date-from'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    format: "DD.MM.YYYY"
  });

  const picker2 = new easepick.create({
    element: document.getElementById('date-to'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    format: "DD.MM.YYYY"
  });
  //============================================================DATEPICKER-END

});