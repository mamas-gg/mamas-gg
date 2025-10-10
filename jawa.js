// Simple nav toggle and footer year
document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('#navToggle, #navToggle2, #navToggle3');
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        var nav = btn.previousElementSibling;
        if(!nav) nav = document.getElementById('nav') || document.getElementById('nav2') || document.getElementById('nav3');
        if(nav){
          if(nav.style.display === 'flex' || nav.style.display === '') nav.style.display = 'none';
          else nav.style.display = 'flex';
        }
      });
    });
  
    var y = new Date().getFullYear();
    ['year','year2','year3'].forEach(function(id){
      var el = document.getElementById(id);
      if(el) el.textContent = y;
    });
  });
  