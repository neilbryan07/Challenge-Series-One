import React, { useContext, useState, useRef  } from 'react';
import { GlobalContext } from '../../hooks/Global';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';

import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';

import { CssTextField , ColorButton  } from '../../constant/index';

export function Delete({ id , name , index }) {


    const {deleteTask} = useContext(GlobalContext);
    const [ updatename, setUpdateName ] = useState(name);
    const nameRef = useRef(name);

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    
    const handleSubmit = () => {
        deleteTask(index);
        nameRef.current.value = "";
        setUpdateName("");
        handleClose();
    }



  return (
    <>

    <Tooltip title="Delete Task">
        <IconButton onClick={ handleToggle } size="large">
            <DeleteOutlineIcon style={{ color: "rgb(234 88 12)" }} />
        </IconButton>
    </Tooltip>

    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
    >
        <div className="w-1/6 bg-zinc-900 rounded-sm absolute top-60">

            <div className='p-4 flex flex-col'>
                
            <h1 className='text-amber-600 font-semibold text-lg text-center mb-5'>Delete TASK</h1>

            <CssTextField fullWidth label="Task Name" id="custom-css-outlined-input" 
                focused  autoComplete='off' 
                inputRef={nameRef}
                value={updatename}
                InputProps={{
                    readOnly: true,
                 }}
            />

            <div className='mt-5'></div>

            <ColorButton variant="contained" onClick={handleSubmit}>Delete Task</ColorButton>

            <div className='mt-5'></div>

            <ColorButton variant="contained" onClick={handleClose}>Close</ColorButton>

            </div>

        </div>
    </Backdrop>
      
    </>
  )
}
