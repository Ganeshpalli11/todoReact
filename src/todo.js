import React from 'react'
import { useState} from 'react';


const Index=()=>{
const [Editing,setEditing]=useState({
    id:"",
    isEditing:false,
    
});
    const [list,setList]=useState([]);
    const [message,setMessage]=useState({
        text:"",
        id:1,
        date:"",
        time:"",
    })
    
    const Save=(e)=>{ 
       setMessage({...message,
    text:e.target.value,})
    }

    const handleClick=(e)=>{
        e.preventDefault();
        const currentDate = new Date();
        const day = currentDate.toLocaleDateString();
        const time1 = currentDate.toLocaleTimeString();
        if(message.text.length===0){
            alert("Please enter some text to add");
        }
        else{
        let newToDoItem={
            ...message,
            text:message.text,
            id: message.id+1,
            date:day,
            time:time1,
           
        }
        console.log(message.id);
   
        

        
        setList([...list,newToDoItem])
        setMessage({text:"",id:message.id+1});
       
    }}

const handleDel=(id)=>{
    let newToDo=list.filter((eachItem)=>
        eachItem.id!==id
        
    )
    setList(newToDo);

}

const handleEdit=(id)=>{
    setEditing({
        ...Editing,
        id:id,
        isEditing:true,
    });
    let EditableItem=list.find((eachItem)=>
        eachItem.id===id
    );
    setMessage({
        ...message,
        text:EditableItem.text,
        id:EditableItem.id,
    });
   
}
const handleEditing=(e)=>{
    let newToDos=list.map((EachItem)=>{
        const currentDate = new Date();
        const day = currentDate.toLocaleDateString();
        const time1 = currentDate.toLocaleTimeString();
        if((EachItem.id)===(Editing.id)){
            return{
                text:message.text,
                id:Editing.id,
                date:day,
            time:time1,
            }
        }
        else{
            return EachItem;
        }
    });
    setList(newToDos);
    setEditing({
        id: "",
        isEditing: false,
    });
    setMessage({
        text: "",
        id: message.id + 1,
        date: "",
        time: "",
    });
}
const handleView = (id) => {
    const selectedItem = list.find((item) => item.id === id);
    alert(`To-Do Message: ${selectedItem.text}`);
}


    const ToDo=()=>{
        return (
          
            <div class="container">

                <form>
                    <input type="text" placeholder='Enter Task ToDo' value={message.text} onChange={Save} id="inputText" autoFocus></input><p>   </p>
                   {Editing.isEditing ?  
                    (<button type="submit" onClick={()=>handleEditing()} id="addButton">Edit</button>):(<button type="submit"  onClick={handleClick} id="addButton">Add</button>)}
                    
                </form>
                {
             
        }
        {list.length===0 ? (<h3>No items</h3>):

               ( <ul>
    {list.map((EachItem) => {
        const { text, id,date,time } = EachItem;
       

        return (
            <li key={id} id="listElement">
                {text}    <br></br> <br></br>Date: {date} <br></br>Time: {time} <p>    </p>  
                <button onClick={() => handleDel(id)} id="delButton">Delete</button> 
                <button onClick={()=>handleEdit(id)} id="editButton">Edit</button>
                <button onClick={()=>handleView(id)} id="handleView">View</button>
                
            </li>
          
        );
        
        
    })}
    
</ul>
)}
            </div>
        )
    }

    return <ToDo/>

}
export default Index;