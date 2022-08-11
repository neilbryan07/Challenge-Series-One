import React, { useContext, useState } from 'react'

import Tooltip from '@mui/material/Tooltip';

import IconButton from '@mui/material/IconButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import Checkbox from '@mui/material/Checkbox';

import { GlobalContext } from '../hooks/Global';

import { Search } from './search/Search';

import { Update } from './update/Update';

import { Delete } from './delete/Delete';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function Body() {

    
  const { task, search, checked, checkBoxDelete, deleteCheckItem,  } = useContext(GlobalContext);


  return (
    <div className="mt-6">

    <div className="flex flex-col border-2 border-orange-600 rounded-lg p-4 w-full">

        <Search/>
 
        <div>

            {checked.length !== 0 ? 
                <div className='flex justify-end mt-0 mb-0'>
                    <Tooltip title="Delete Selected Items">
                        <IconButton  size="large" onClick={ () => deleteCheckItem()}>
                            <DeleteForeverOutlinedIcon style={{ color: "white" }} />
                        </IconButton>
                    </Tooltip>
                </div> : null 
            }

            { task && task.map( (item,index) => {
                return(

                <div className='flex justify-between w-full bg-zinc-800 rounded-lg mt-2' key={item.id}>

                    <div className='flex flex-row'>

                        { search === "" ?
                         <Checkbox sx={{ color: 'rgb(28 25 23)', '&.Mui-checked': { color: 'rgb(234 88 12)',},}} onChange={ (e) => checkBoxDelete(item,index)  }/>
                        : <div className='ml-10'> </div> }
                    
                        <Tooltip title={item.id}>
                            <h2 className='text-amber-600 font-medium text-base mt-3'>{ item.name }</h2>
                        </Tooltip>
                        
                    </div>

                    <div className='flex flex-row'>

                        <Update id={item.id} name={item.name} index={index} />

                        <Delete id={item.id} name={item.name} index={index} />
                        
                        
                    </div>
               
                </div>

                )
            })}
        
        </div>

    </div>

    <div className='mt-3'>
        <h1 className='text-white text-center font-semibold text-lg'>Neil Bryan R. Lagrimas</h1>
        <h1 className='text-white text-center text-orange-600 font-semibold'>Created By</h1>
    </div>

    </div>

  )
}
