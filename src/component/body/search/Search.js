import React, { useContext, useState, useRef  } from 'react';
import { GlobalContext } from '../../hooks/Global';

import Tooltip from '@mui/material/Tooltip';

import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import Backdrop from '@mui/material/Backdrop';

import { CssTextField , ColorButton  } from '../../constant/index';

export function Search() {

    const { createTask, searchTask, setSearch} = useContext(GlobalContext);
    const [ name, setName ] = useState("");
    const nameRef = useRef(null);

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    
    const handleSubmit = () => {
        createTask(name);
        nameRef.current.value = "";
        setName("");
        handleClose();
    }


    const handleSearch = (data) => {
        searchTask(data);
        setSearch(data);
    }

  return (
    <div className="flex flex-row">
        
        <div className='mt-2'>
            <Tooltip title="Add Task">
                <Avatar sx={{ bgcolor: 'rgb(249 115 22)' }}>
                    <IconButton  size="large" onClick={handleToggle}>
                        <AddCircleIcon style={{ color: "white" }} />
                    </IconButton>
                </Avatar>
            </Tooltip>
        </div>

        <div className='w-10/12 ml-8'>
            <Tooltip title="Search Task">
                <CssTextField fullWidth label="Search" id="custom-css-outlined-input" autoComplete='off' 
                onChange={ (e) => handleSearch(e.target.value)  }
                />
            </Tooltip>
        </div>


        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          
        >
        <div className="w-1/6 bg-zinc-900 rounded-sm absolute top-60">

            <div className='p-4 flex flex-col'>
                
            <h1 className='text-amber-600 font-semibold text-lg text-center mb-5'>ADD TASK</h1>

            <CssTextField fullWidth label="Task Name" id="custom-css-outlined-input" 
            focused  autoComplete='off' 
            onChange={ (e) => { setName(e.target.value) } } 
            inputRef={nameRef}
            value={name}
            />

            <div className='mt-5'></div>

            <ColorButton variant="contained" onClick={handleSubmit}>Add Task</ColorButton>

            <div className='mt-5'></div>

            <ColorButton variant="contained" onClick={handleClose}>Close</ColorButton>


            </div>

        </div>
        </Backdrop>
       

    </div>
  )
}
