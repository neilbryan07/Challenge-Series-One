import React,{ useState,createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Value } from './Value';

export const GlobalContext = createContext();

function GlobalProvider (props) {

    const [ task , setTask ] = useState(Value);

    const [ search, setSearch ] = useState("");

    const [ searchTaskData , setSearchTaskData ] = useState(Value);

    const [ checked , setChecked, ] = useState([]);


    const createTask = (data) => {

        let uuid = uuidv4();

        setTask((oldData)  => [ ...oldData , {
            id : uuid,
            name : data, 
        }])

        setSearchTaskData((oldData)  => [ ...oldData , {
            id : uuid,
            name : data, 
        }])
    }


    const updateTask = (index,name) => {
        let newSet = [...task];
        newSet[index].name = name;
        setTask(newSet);
        setSearchTaskData(newSet);
    }


    const deleteTask = (id) => {

        let validation = task.filter( (data,index) => { return index === id } );

        let checker = searchTaskData.findIndex( (data) => data.id === validation[0].id );

        let newSet = searchTaskData.filter( (data,index) => { return index !== checker } );

        setTask(newSet);
        setSearchTaskData(newSet);
    }

    const checkBoxDelete = (item,index) => {

        let main_checker = [ ...checked ];

        let validation = task.filter( (data,indexs) => { return indexs === index } );

        let checker = main_checker.findIndex( (data) => data.id === validation[0].id );

        if(checker === -1) {
            setChecked((data) =>[...data, { 
                id : item.id,
                name : item.name
            }])
        } 

        else {
            let newSet = main_checker.filter( (data,index) => { return index !== checker } );
            setChecked(newSet);
        }

    }

    const deleteCheckItem = () => {
        let dataTask = [...task];

        let indexRemover = [];

        for(let i =0; i < checked.length; i++ ) {
            indexRemover.push(dataTask.findIndex( (data) => data.id === checked[i].id ))
        } 

        let test = dataTask.filter( (value,index) => {
        return !indexRemover.includes(index); 
        } )

        setTask(test)
        setSearchTaskData(test);
        setChecked([]);
    }

    const searchTask = (rawName) => {

        console.log(searchTaskData);

        if(rawName !== "") {

            let data = [...task];

            let newSet = data.filter( (item,index) => {
                let result = item.name.toLowerCase().includes(rawName.toLowerCase());
                return result;
            })
    
            setTask(newSet);

        } else {
            setTask(searchTaskData);
        }
    
    }
  

    const value = { 
        task, setTask, 
        searchTaskData, setSearchTaskData, 
        createTask , 
        updateTask, 
        deleteTask, 
        searchTask, 
        search, setSearch, 
        checked , setChecked,
        checkBoxDelete,
        deleteCheckItem,
     }

    return(
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    ) 
}


export default GlobalProvider;