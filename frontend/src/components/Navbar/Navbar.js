import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import useStyles from './styles';
import logo from '../../images/logo.png';
import PromptMenu from "./PromptMenu";

import { startGame, fetchRole, resetGame } from "../../actions/roleGame";
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';


const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const roleGame = useSelector((state) => state.RoleGame);

    const handleStart = (e) => {
        dispatch(startGame(roleGame.prompt))
    }

    const handleReset = (e) => {
        dispatch(resetGame())
        dispatch(fetchRole())
    }
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div>
                <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">ChatTRPG</Typography>
                <img className={classes.image} src={logo} alt="memories" height="70"/>
            </div>
            <Toolbar  className={classes.toolBar}>
                <PromptMenu className={classes.promptMenu}/>
                <Button className={classes.buttons} onClick={handleStart} variant="contained" color="primary">Start</Button>
                <Button className={classes.buttons} onClick={handleReset} variant="contained" color="primary">Reset</Button>

            </Toolbar>

        </AppBar>)
                
}

export default Navbar;
//水 PNG圖片素材由hidungjeruk设计 https://zh.pngtree.com/freepng/cute-little-water-monster-rpg_9039516.html?sol=downref&id=bef