import React, {useCallback, useContext, useState} from 'react';
import {Link} from "react-router-dom";
import movie from '../../images/lg.png'
import styles from './Head.module.scss'

import AddModal from "../Modals/AddModal";
import {AuthContext} from "../../Context";

const Head = ({setSuccessActive, search, setSearch}) => {

    const [modalActive, setModalActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState(search);

    const addMovieButtonClick = useCallback(() => setModalActive(true), []);
    const onSearchButtonClick = useCallback(() => setSearch(searchQuery), [searchQuery, setSearch])

    const {isAuth, setIsAuth} = useContext(AuthContext);


    const logout = useCallback(()=> {
        setIsAuth(false)
    })

    return (
        <header
            data-testid='head-page'
            className={styles.header}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <Link
                        data-testid='search-click'
                        to={'/'}
                        className="header__logo"
                    >
                        <img src={movie} alt="logo"/>
                    </Link>
                    <button
                        className={styles.btn_black}
                        onClick={addMovieButtonClick}
                    >
                        +add movie
                    </button>
                    <button
                        className={styles.btn_black}
                        onClick={logout}
                    >
                        quit
                    </button>
                    <AddModal
                        active={modalActive}
                        setActive={setModalActive}
                        setSuccessActive={setSuccessActive}
                    />
                </div>
                <div className={styles.finder}>
                    <div className={styles.finder_title}>
                        find your movie
                    </div>
                    <div className={styles.finder_row}>
                        <input
                            type="text"
                            placeholder='What do you want to watch?'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className={styles.btn_red} onClick={onSearchButtonClick}>search</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Head;
