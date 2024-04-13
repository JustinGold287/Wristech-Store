document.querySelector('.cion').addEventListener('mouseover', function(event) {
  if (event.target.id === 'btn') {
     document.getElementById('popup').classList.remove('hidden');
  }
 });
 
 document.querySelector('.cion').addEventListener('mouseout', function() {
  document.getElementById('popup').classList.add('hidden');
 });