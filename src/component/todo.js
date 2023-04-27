import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    if (!inputdata) {
      alert("plz enter somethink");
    } else {
      setItems([...items, inputdata]);
      setInputData("");
    }
  };

  let removeit = (index) => {
    const newarr = items.filter((val,ind) => {
        return ind !== index;
        // console.log(val)
    })
    setItems(newarr)
  };

  let editit = (index)=>{
    setInputData(items[index])
    const newarr = items.filter((val,ind) => {
      return ind !== index;
    
  })
  setItems(newarr)

  }

  let removeitAll = () =>{
     setItems([]);
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            
            <figcaption>Add your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="🍗Add Item"
              classname="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={addItems}></i>
          </div>

          <div className="showItems">
            {items.map((curElem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{curElem}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={() =>editit(index)}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={()=>{removeit(index)}}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove all" onClick={()=>{removeitAll()}}>
              <span>CheckList</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
