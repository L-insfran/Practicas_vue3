<script setup>
  import { reactive } from 'vue';
  import InputNew from '@/components/InputNew.vue';
  
  let boards = reactive([
    {
      id: crypto.randomUUID(),
      name: 'tablero 1',
      items: [
        {
          id:crypto.randomUUID(),
          title: 'Feature de archivos',
        },
        {
          id:crypto.randomUUID(),
          title: 'Resolver bug',
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: 'tablero 2',
      items: [
        {
          id:crypto.randomUUID(),
          title: 'mandar reporte',
        },
        {
          id:crypto.randomUUID(),
          title: 'Code review',
        }
      ]
    }
  ]); //variables reactivas que se usan para objetos o arreglos

  function handleNewItem(text, board) {
    //console.log(text.value, board.id, board.name)
    board.items.push({
      id: crypto.randomUUID(),
      title: text.value
    })
  }

  function handleNewBoard() {
    const name = prompt('Nombre del tablero');
    if(name != ''){
      boards.push({
        id: crypto.randomUUID(),
        name,
        items: []
      })
    }
  }


function startDrag(evt, board, item){
  evt.dataTransfer.setData('text/plain', JSON.stringify({boardId: board.id, itemId: item.id}));
}

function onDrop(evt, dest){
  const {boardId, itemId} = JSON.parse(evt.dataTransfer.getData('text/plain'));
  const originBoard = boards.find(board => board.id === boardId);
  const originItem = originBoard.items.find(item => item.id === itemId);


  dest.items.push({...originItem});
  originBoard.items = originBoard.items.filter(item => item.id !== itemId);
}
</script>

<template>
    <nav>
      <ul>
        <li><a href="#" @click.prevent="handleNewBoard">Create board</a></li>
      </ul>
    </nav>
    <div class="boards-container">
      <div class="boards">
        <div 
          class="board" 
          @drop="onDrop($event, board)" 
          @dragover.prevent 
          @dragenter.prevent 
          v-for="board in boards" :key="board.id">
          <div>{{board.name}}</div>
            <InputNew @on-new-item="(text) => handleNewItem(text, board)" />
          <div class="intems">
            <div 
              class="item" 
              draggable="true" 
              @dragstart="startDrag($event, board, item)" 
              v-for="item in board.items" :key="item.id">
              {{item.title}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
  nav {
    background-color: black;
  }
  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  nav ul li a {
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;;
  }
  .boards-container {
    display: flex;
    justify-content: center;
  }
  .boards {
    display: flex;
    justify-content: center;
  }
  .board {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 300px;
    background-color: #efefef;
  }
  .items {
    display: flex;
    flex-direction: column;
  }
  .item {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    background-color: white;
    
  }
</style>