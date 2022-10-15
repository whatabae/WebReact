import React, {useState, useRef}from "react";
import './ToDoList.css';

function ToDoList(){
    const [inputItem, setInputItem] = useState("");
    const idRef = useRef("");
    const focusref = useRef();
    const [EditTF, setEditTF] = useState(true); //최초 rename true로 설정 수정X
    const [itemList, setItemList] = useState([
        {id:1, value:'리액트 듣기'},
        {id:2, value:'점심먹기'},
        {id:3, value:'과제하기'}
    ])

    const RenameToDoList = (id)=>{//인덱스 값으로 들어가서 +1됨
        itemList.map((item)=>{//itemList를 뿌리면서 맞는 id 찾기
            console.log("id : ", id, "item.id:", item.id, "inputItem : ", inputItem );
            if(item.id===id){
                idRef.current = id;
                setInputItem(item.value);
            };
        });
        console.log("id :",id, "/itemList.value :", itemList.value, "idRef", idRef.current);
        focusref.current.focus();
        setEditTF(false);
    }

    const DeleteToDoList = (id) => {
        setItemList((itemList)=> itemList.filter((itemList)=>itemList.id!==id));
        console.log(itemList);
    }

    const EditToDoList =()=>{
        setItemList(item =>
            item.map(obj => {
            if (obj.id === idRef.current) {
            return {...obj, value:inputItem};   
            }
            return obj;
        }),
        );
    setEditTF(true);
    };

    const AddToDoList =()=>{
        setItemList((prevItem)=>{
            console.log(itemList.length+1, inputItem);
            return[...prevItem,
                {
                    id:itemList.length+1, value:inputItem,
                },
            ]
        });
        setInputItem("");
    }

    return(
        <div className="container">
            <h1>To-Do List</h1>
            <div className="add-elements">
                <input id="add" value={inputItem} ref={focusref} onChange={(event)=>setInputItem(event.target.value)}></input>
                {EditTF ? //초기값 true
                (<button id="btn" onClick={AddToDoList}>할일 추가</button>)
                :
                (<button id="btn" onClick={EditToDoList}>수정 완료</button>)}
            </div>
            <div id="element-list">
                <ul id="list">
                    {itemList.map((item)=>{
                        return (
                        <li key={item.id}> {item.value}
                        <img src="pencil.png" onClick={()=>RenameToDoList(item.id)} alt="rename"></img>
                        <img src="trashcan.png" onClick={()=>DeleteToDoList(item.id)} alt="trash"></img>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;