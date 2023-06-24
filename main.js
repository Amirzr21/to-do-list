document.querySelector('#push').onclick = function(){
  if(document.querySelector('#newTask input').value.length == 0){
    alert("Please Enter a task")
  }else{
    document.querySelector('#tasks').innerHTML +=`
    <div class="task">
    <span id="taskName">
    ${document.querySelector('#newTask input').value}
    </span>

    <button class="delete">
    <i class="fa-solid fa-trash-can"></i>
    </button>
    </div>
   


    `;
      //now active cancel button
      let current_tasks = document.querySelectorAll('.delete');
      for(let i = 0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
          this.parentNode.remove();
        }
      }

  }
}