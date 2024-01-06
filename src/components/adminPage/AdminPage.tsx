import React from 'react';

import './AdminPage.css'
import {Button,styled} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const AdminPage = (props: any) => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });


    return (
        <div className={'adminsPage'}>

            <form className={'form'} id="form">
                <h3>NEW POST</h3>
                <div className="form-control">
                    <input type="text"
                           id="name"
                           placeholder="Enter your Title"/>
                </div>

                <div className="form-control">
                    <textarea style={{height:"200px"}} name={'text'}></textarea>
                </div>


                <div style={{marginTop:"200px"}} className="form-control">

                    <select name="role" id="role">
                        <option value="Oil and Gas">Oil and Gas</option>
                        <option value="Education">Education</option>
                        <option value="Agro">
                            Agro
                        </option>
                        <option value="Construction">Construction</option>
                    </select>
                </div>

                <div style={{marginTop:"60px"}} className="form-control">
                        <h4>Is Free</h4>
                    <label htmlFor="recommed-1">
                        <input type="radio" id="recommed-1" name="recommed" />
                        Yes
                    </label>
                    <label htmlFor="recommed-2">
                        <input type="radio" id="recommed-2" name="recommed" />
                        No
                    </label>
                </div>

                <Button className={'button'} style={{marginTop:"100px"}} component="label"  startIcon={<CloudUploadIcon />}>
                    Upload file
                    <VisuallyHiddenInput type="file" />
                </Button>

                <button style={{marginTop:"10px"}} className={'button'} type="submit" value="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

