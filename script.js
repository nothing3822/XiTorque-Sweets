function setLang(lang){
  const isUr = lang === 'ur';
  document.documentElement.lang = isUr ? 'ur' : 'en';
  document.documentElement.dir = isUr ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-ur', isUr);
  const btnEn = document.getElementById('btn-en');
  const btnUr = document.getElementById('btn-ur');
  if(btnEn) btnEn.classList.toggle('active', !isUr);
  if(btnUr) btnUr.classList.toggle('active', isUr);
  document.querySelectorAll('[data-en]').forEach(function(el){
    el.textContent = isUr ? el.getAttribute('data-ur') : el.getAttribute('data-en');
  });
}

function toggleNav(){
  const nav = document.getElementById('nav-links');
  if(nav) nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function(){
  setLang('en');

  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('f-name').value;
      const phone = document.getElementById('f-phone').value;
      const msg = document.getElementById('f-msg').value;
      const text = 'Hello Xitorque Sweets, my name is ' + name + ' (' + phone + '). ' + msg;
      window.open('https://wa.me/923272899214?text=' + encodeURIComponent(text), '_blank');
    });
  }

  const bookingForm = document.getElementById('booking-form');
  if(bookingForm){
    bookingForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('b-name').value;
      const phone = document.getElementById('b-phone').value;
      const order = document.getElementById('b-order').value;
      const typeInput = document.querySelector('input[name="booking-type"]:checked');
      const type = typeInput ? typeInput.value : '';
      const text = 'Hello Xitorque Sweets, I would like to place an ADVANCE BOOKING.\nName: ' + name +
        '\nPhone: ' + phone + '\nBooking Type: ' + type + '\nOrder Details: ' + order;
      window.open('https://wa.me/923272899214?text=' + encodeURIComponent(text), '_blank');
    });
  }
});
