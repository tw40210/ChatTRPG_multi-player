import {  Container, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import React, {useEffect, useState} from "react";
import { useDispatch} from 'react-redux';

import {fetchRole} from '../../actions/roleGame'

import GameTable from "../GameTable/GameTable";
import Form from '../Forms/Form';




const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch(); 

    useEffect(() =>{
        dispatch(fetchRole());
    }, [currentId, dispatch])

    return (
        <Container>
            <Grow in>
                <Container >
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <GameTable setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid className={classes.formContainer} item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
                
}

export default Home;