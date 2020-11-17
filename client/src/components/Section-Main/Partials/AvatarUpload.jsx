import React, { useState, useRef, Fragment, useContext } from 'react'
import axios from 'axios';
import { Button, Typography } from '@material-ui/core';
import UserContext from '../../../utilities/userContext';

export default function AvatarUpload(props) {
    const {user, setUser} = useContext(UserContext);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const form = useRef(null);

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        axios
            .post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => {
                const userCopy = {...user};
                console.log(user._id, fileName.split('.')[file.name.split('.').length - 1]);
                userCopy.photo = `${user._id}.${fileName.split('.')[file.name.split('.').length - 1]}`;
                setUser(userCopy);
            })
            .catch(err => {

            })
            .finally(() => {
                setFileName(null);
                setFile(null);
            })
    }


    return (
        <Fragment>
            <form onSubmit={onSubmit} ref={form}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="medium" 
                    component="label" 
                    style={{margin: 10}}>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={onChange}
                    />
                    {user && user.photo ? 'Zmień awatar' : 'Dodaj awatar'}
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="medium" 
                    component="label" 
                    style={{display: file ? 'inline-block' : 'none', margin: 10}} >
                    <input 
                        type='submit'
                        value="submit" 
                        style={{ display: 'none' }}
                        onSubmit={onSubmit}/>
                    Potwierdź
                </Button>
            </form>

            <Typography variant="subtitle1">
                { fileName }
            </Typography>
        </Fragment>
    )
}