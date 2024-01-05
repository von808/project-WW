document.addEventListener('DOMContentLoaded', () => {

  //============================================================SELECT-AND-COPY-START
  const selectAll = document.querySelector('.select-all')
  const copySelect = document.querySelector('.copy-select')

  const selectBoxes = document.querySelectorAll('.purchases__item-box');
  const selectCheckboxes = document.querySelectorAll('.purchases__item-box .checkbox-angle .checkbox-input');
  const selectCopyTrack = document.querySelectorAll('.purchases__item-box .copy-input');


  selectCheckboxes.forEach((elCheckbox) => {
    selectAll.addEventListener('click', (e) => {
      elCheckbox.checked = true;
    });
  });
  //============================================================SELECT-AND-COPY-END

  //============================================================PAYMENT-START
  (function () {
    var caseItem = document.querySelectorAll('.wallet-payment'),
      active = document.getElementsByClassName('payment-active');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this)
          active[0].classList.remove('payment-active');

        this.classList.toggle('payment-active');
      });
    });
  })();
  //============================================================PAYMENT-END

  //============================================================SIDEBAR-START
  const sidebarBtn = document.querySelector('.sidebar__btn-open');
  const sidebar = document.querySelector('.sidebar');

  sidebarBtn.onclick = function () {
    sidebar.classList.toggle('sidebar-open')
  };
  //============================================================SIDEBAR-END

  //============================================================COPY-START
  let copyEmailBtn = document.querySelectorAll('.copy-btn');

  copyEmailBtn.forEach((el) => {
    el.addEventListener('click', function (event) {
      let emailLink = el.parentNode.querySelector('.copy-input');
      let range = document.createRange();
      range.selectNode(emailLink);
      window.getSelection().addRange(range);

      try {
        // let asd = this.parentNode.querySelector('.copy-input').textContent.trim();
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy email command was' + msg);
      } catch (err) {
        console.log('Oops, unable to copy');
      }

      window.getSelection().removeAllRanges();

      // el.parentNode.classList.add('copied');
    });
  });
  (function () {
    let caseItem = copyEmailBtn;
    let active = document.getElementsByClassName('copied');

    Array.from(caseItem).forEach(function (item, i, caseItem) {
      item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !== this.parentNode)
          active[0].classList.remove('copied');

        this.parentNode.classList.toggle('copied');
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
    const dropDownListItemsS = dropDownList.querySelectorAll('.dropdown__list-item--searchid');
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

    dropDownListItemsS.forEach(function (listItemS) {
      listItemS.addEventListener('click', function (e) {
        e.stopPropagation()
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

  //============================================================TICKETS-HISTORY-START
  let scoreA = document.querySelector('#tickets-answered');
  let scoreNA = document.querySelector('#tickets-not-answered');
  let scoreR = document.querySelector('#tickets-resolved');
  let scoreNR = document.querySelector('#tickets-not-resolved');

  const ticketsScoreTrigger = document.querySelectorAll('.dropdown__list-item');

  ticketsScoreTrigger.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      ticketsScoreUpdate();
    });
  });

  ticketsScoreUpdate()

  function ticketsScoreUpdate() {
    let ticketA = document.querySelectorAll('.dropdown__button > .dropdown__list-item-content.answered');
    let ticketNA = document.querySelectorAll('.dropdown__button > .dropdown__list-item-content.not-answered');
    let ticketR = document.querySelectorAll('.dropdown__button > .dropdown__list-item-content.resolved');
    let ticketNR = document.querySelectorAll('.dropdown__button > .dropdown__list-item-content.not-resolved');

    let scoreABox = ticketA.length
    let scoreNABox = ticketNA.length
    let scoreRBox = ticketR.length
    let scoreNRBox = ticketNR.length

    if (scoreABox < 10) {
      scoreABox = '0' + scoreABox;
    } else {
      scoreABox = scoreABox
    }
    scoreA.innerHTML = scoreABox;

    if (scoreNABox < 10) {
      scoreNABox = '0' + scoreNABox;
    } else {
      scoreNABox = scoreNABox
    }
    scoreNA.innerHTML = scoreNABox;

    if (scoreRBox < 10) {
      scoreRBox = '0' + scoreRBox;
    } else {
      scoreRBox = scoreRBox
    }
    scoreR.innerHTML = scoreRBox;

    if (scoreNRBox < 10) {
      scoreNRBox = '0' + scoreNRBox;
    } else {
      scoreNRBox = scoreNRBox
    }
    scoreNR.innerHTML = scoreNRBox;
  }
  //============================================================TICKETS-HISTORY-END

  //============================================================TICKETS-MORE-START
  const ticketsMoreBtn = document.querySelectorAll('.tickets__history-list-item--more-btn')
  const ticketsMoreList = document.querySelectorAll('.tickets__history-list--more')

  ticketsMoreList.forEach((el) => {
    const el2 = el;

    ticketsMoreBtn.forEach((el) => {
      el.addEventListener('click', (e) => {
        el.classList.toggle('tickets-more');
        el2.classList.toggle('tickets-more');
      });
    });

  });
  //============================================================TICKETS-MORE-END

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