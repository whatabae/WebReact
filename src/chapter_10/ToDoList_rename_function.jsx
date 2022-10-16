import React, {useState, useRef}from "react"; //import react 
import './ToDoList.css';

function ToDoList(){
    const [inputItem, setInputItem] = useState("");//input태그에 쓰일 State변수 선언
    const idRef = useRef(""); //id를 참조할때 쓰일 ref변수 선언
    const focusref = useRef();//focus를 위한 ref변수 선언
    const [EditTF, setEditTF] = useState(true); //최초 rename true로 설정 수정X
    const [itemList, setItemList] = useState([ //state 배열 선언
        {id:1, value:'리액트 듣기'},
        {id:2, value:'점심먹기'},
        {id:3, value:'과제하기'}
    ])

    const RenameToDoList = (id)=>{//인덱스 값으로 들어가서 +1됨
        itemList.map((item)=>{//itemList를 뿌리면서 맞는 id 찾기
            if(item.id===id){
                idRef.current = id;
                setInputItem(item.value);//id가 일치하면 해당하는 값을 input에 넣는다.
            };
        });
        focusref.current.focus(); //focus
        setEditTF(false);// T->F 수정버튼으로 바꿈
    }

    const DeleteToDoList = (id) => { //id를 받아서 delete 
        setItemList((itemList)=> itemList.filter((itemList)=>itemList.id!==id));
    }

    const EditToDoList =()=>{//ToDoList 수정 
        setItemList(item => //setItemList을 받아서 map 으로 뿌리고 id가 같으면 수정
            item.map(obj => {
            if (obj.id === idRef.current) {
            return {...obj, value:inputItem};   
            }
            return obj;
        }),
        );
    setInputItem(""); //input 초기화
    setEditTF(true); //F->T 수정버튼 -> 추가버튼 
    };

    const AddToDoList =()=>{ //add List 
        setItemList((prevItem)=>{
            return[...prevItem,//itemList받아서 뿌리고 뒤에 추가
                {
                    id:itemList.length+1, value:inputItem,
                },
            ]
        });
        setInputItem(""); //input 초기화
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