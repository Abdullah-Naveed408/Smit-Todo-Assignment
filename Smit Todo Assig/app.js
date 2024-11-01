var idCount = 1;

        function addTodo() {
            var todos = document.getElementById('todos');
            var inpVal = document.getElementById('inp');

            if (inpVal.value.trim() === '') {
                alert("Please enter a todo item.");
                return;
            }

            var element = document.createElement('div');
            element.setAttribute('id', idCount);
            element.setAttribute('class', "todo");
        
            element.innerHTML = `
                <p>${inpVal.value}</p> 
                <button onclick="deleteTodo(${idCount})">Delete</button> 
                <button onclick="updateTodo(${idCount})">Update</button>
            `;
        
            todos.appendChild(element);
            idCount++;
            inpVal.value = '';
        }
        
        function deleteTodo(id) {
            var deletedItem = document.getElementById(id);
            var parentElem = deletedItem.parentNode;
            parentElem.removeChild(deletedItem);
        }
        
        function updateTodo(id) {
            var inpVal = document.getElementById('inp');
            var todoItem = document.getElementById(id);
            
            todoItem.innerHTML = `
                <p>${inpVal.value}</p> 
                <button onclick="deleteTodo(${id})">Delete</button> 
                <button onclick="updateTodo(${id})">Update</button>
            `;
        }