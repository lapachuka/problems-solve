function setup() {
  var ul = document.getElementById('commentList');
  var li = document.createElement('li');

  document
    .getElementById('postComment')
    .addEventListener('click', function(event) {
      let comment = document.getElementById('comment').val;
      if (comment) {
        li.appendChild(document.createTextNode(comment));
        ul.appendChild(li);
        comment = '';
      }
    });
}

// Example case.
document.body.innerHTML = `
<ul id='commentList'>
</ul>
<form>
  <input type='text' id='comment'/>
  <input type='button' id='postComment' value='Post'/>
</form>`;

setup();

$('#comment').val('test');
$('#postComment').click();
console.log(document.body.innerHTML);
