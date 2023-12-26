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
      // ratingActive.style.width = `${ratingActiveWidth}%`;

      if (ratingActiveWidth <= 0) {
        ratingActive.style.width = '0%';
      } else if (ratingActiveWidth >= 1 && ratingActiveWidth < 10) {
        ratingActive.style.width = '10%';
      } else if (ratingActiveWidth >= 10 && ratingActiveWidth < 20) {
        ratingActive.style.width = '10%';
      } else if (ratingActiveWidth >= 20 && ratingActiveWidth < 30) {
        ratingActive.style.width = '20%';
      } else if (ratingActiveWidth >= 30 && ratingActiveWidth < 40) {
        ratingActive.style.width = '30%';
      } else if (ratingActiveWidth >= 40 && ratingActiveWidth < 50) {
        ratingActive.style.width = '40%';
      } else if (ratingActiveWidth >= 50 && ratingActiveWidth < 60) {
        ratingActive.style.width = '50%';
      } else if (ratingActiveWidth >= 60 && ratingActiveWidth < 70) {
        ratingActive.style.width = '60%';
      } else if (ratingActiveWidth >= 70 && ratingActiveWidth < 80) {
        ratingActive.style.width = '70%';
      } else if (ratingActiveWidth >= 80 && ratingActiveWidth < 90) {
        ratingActive.style.width = '80%';
      } else if (ratingActiveWidth >= 90 && ratingActiveWidth < 100) {
        ratingActive.style.width = '90%';
      } else if (ratingActiveWidth >= 100) {
        ratingActive.style.width = '100%';
      }
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

  //============================================================CUSTOM-LINE-START
  const cstmLine = document.querySelector('.custom-line-item');
  const detailsBtn = document.querySelector('#details-btn');
  const detailsBtnItem = document.querySelectorAll('.dropdown__list-item');

  detailsBtnItem.forEach((el) => {
    el.addEventListener('click', customLineFunc);
  });

  customLineFunc()

  function customLineFunc(e) {
    if (detailsBtn.childNodes[1].classList.contains('ups')) {
      cstmLine.style.display = 'block';
    } else {
      cstmLine.style.display = 'none';
    }
  }

  const cstmLineDel = document.querySelectorAll('.custom-line-item__item-btn');

  cstmLineDel.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      el.previousElementSibling.parentNode.parentNode.classList.remove('active-line');
      el.previousElementSibling.parentNode.parentNode.previousElementSibling.classList.add('del-btn');
      firstAdd()
    });
  });

  const cstmLine1 = document.querySelector('#custom-line-1');
  const cstmLine2 = document.querySelector('#custom-line-2');
  const cstmLine3 = document.querySelector('#custom-line-3');
  const cstmLine4 = document.querySelector('#custom-line-4');
  const cstmLine5 = document.querySelector('#custom-line-5');

  const cstmBtn1 = document.querySelector('#custom-line-btn-1');
  const cstmBtn2 = document.querySelector('#custom-line-btn-2');
  const cstmBtn3 = document.querySelector('#custom-line-btn-3');
  const cstmBtn4 = document.querySelector('#custom-line-btn-4');

  cstmBtn1.onclick = function () {
    // cstmBtn1.style.display = 'none'
    // cstmLine2.style.display = 'flex';
    this.parentNode.classList.remove('active-line');
    this.parentNode.nextSibling.nextSibling.classList.add('active-line');
    this.parentNode.nextSibling.nextSibling.classList.add('del-btn');
    firstAdd()
  }

  cstmBtn2.onclick = function () {
    cstmBtn2.style.display = 'none';
    this.parentNode.nextSibling.nextSibling.classList.add('active-line');
    cstmLine2.classList.remove('del-btn');
    cstmLine3.classList.add('del-btn');
  }

  cstmBtn3.onclick = function () {
    cstmBtn3.style.display = 'none'
    this.parentNode.nextSibling.nextSibling.classList.add('active-line');
    cstmLine3.classList.remove('del-btn');
    cstmLine4.classList.add('del-btn');
  }

  cstmBtn4.onclick = function () {
    cstmBtn4.style.display = 'none'
    this.parentNode.nextSibling.nextSibling.classList.add('active-line');
    cstmLine4.classList.remove('del-btn');
    cstmLine5.classList.add('del-btn');
  }

  firstAdd()

  function firstAdd() {
    if (cstmLine1.nextElementSibling.classList.contains('active-line')) {
      cstmBtn1.style.display = 'none';
    } else {
      cstmBtn1.style.display = 'block';
    }
  }

  //============================================================CUSTOM-LINE-END

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

  //============================================================INPUT-WIDTH-START
  $(function () {

    let $input = $('.input'),
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

});