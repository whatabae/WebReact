import React, {useState} from "react";
import './ToDoList.css';

function ToDoList(){
    const [inputItem, setInputItem] = useState("");
    const [renameTF, setRenameTF] = useState(true); //최초 rename true로 설정 수정X
    const [itemList, setItemList] = useState([
        {id:'1', value:'리액트 듣기'},
        {id:'2', value:'점심먹기'},
        {id:'3', value:'과제하기'}
    ])

    //onChange={(event) => {
    // setItemList(event.target.value);
    const ChangeItem = (event)=>{
        setItemList(event.target.value);

    }

    const RenameTF = () => {
        if(renameTF){ //setRenameTF 호출시 T->F / F->T
            setRenameTF(false);
        } else{
            setRenameTF(true);
        }
        
    }

    const DeleteToDoList = (id) => {
        setItemList((itemList)=> itemList.filter((itemList)=>itemList.id!==id));
        console.log(itemList);
    }

    const AddToDoList =()=>{
        setItemList((prevItem)=>{
            console.log(itemList.length+1, inputItem);
            return[
                {
                    id:itemList.length+1, value:inputItem,
                },
                ...prevItem,
            ]
        });
        setInputItem("");
    }

    return(
        <div className="container">
            <h1>To-Do List</h1>
            <div className="add-elements">
                <input id="add" value={inputItem} onChange={(event)=>setInputItem(event.target.value)}></input>
                <button id="btn" onClick={AddToDoList}>할일 추가</button>
            </div>
            <div id="element-list">
                <ul id="list">
                    {itemList.map((item)=>{
                        return ({if(){//삼항연산자 사용 리스트/수정 표시 -> rename True면 일반 List 반환 
                        (<li key={item.id}> {item.value}
                        <img src="pencil.png" onClick={()=>RenameTF()} alt="rename"></img>
                        <img src="trashcan.png" onClick={()=>DeleteToDoList(item.id)} alt="trash"></img></li>)
                        } else{
                        (<li key={item.id}>
                        <input  name="itemList.value" value={item.value} onChange={(event)=>ChangeItem()} />{/*수정 + 수정된 값을  itemList에 저장*/}
                        {/* <button type="submit">수정완료</button> */}
                        {/* <img src="pencil.png" onClick={()=>RenameTF() renamekey={item.id}} alt="rename"></img> */}
                        <img src="trashcan.png" onClick={()=>DeleteToDoList(item.id)} alt="trash"></img></li>)}})
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;