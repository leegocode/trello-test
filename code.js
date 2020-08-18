const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for(let i = 0; i<list_items.length; i++){
    const item = list_items[i];

    item.addEventListener('dragstart', function(){
        console.log('dragstart');
        draggedItem = item;
        setTimeout(function() {
            item.style.display = "none";
        }, 0)
    });

    item.addEventListener('dragend', function() {
        setTimeout(function(){
            draggedItem.style.display = 'block';
            draggedItem = null;

        }, 0);

    })

    for(let j = 0; j<lists.length; j++){
        const list = lists[j];
<<<<<<< HEAD
        
=======

>>>>>>> 41411d0... trello first time
        list.addEventListener('dragover',function(e){
            e.preventDefault();
        });
        list.addEventListener('dragenter', function(e){
            e.preventDefault();
<<<<<<< HEAD
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });
        list.addEventListener('dragleave',function(e){
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
            
        list.addEventListener('drop',function(e){
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
=======
            this.style.backgroundColor = 'rgba(206, 227, 41, 1)';
        });
        list.addEventListener('dragleave',function(e){
            // this.style.backgroundColor = 'rgba(246, 170, 170, 0.84)';
        });

        list.addEventListener('drop',function(e){
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0, 255, 179, 1)';
>>>>>>> 41411d0... trello first time
        });




    }
<<<<<<< HEAD
    

}
=======


}
>>>>>>> 41411d0... trello first time
