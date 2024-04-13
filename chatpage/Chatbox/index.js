document.querySelector('.container1').addEventListener('mouseover', function(event) {
  if (event.target.id === 'btn1') {
     document.getElementById('popup').classList.remove('hidden');
  }
 });
 
 document.querySelector('.container1').addEventListener('mouseout', function() {
  document.getElementById('popup').classList.add('hidden');
 });