import React, {useCallback, useState} from 'react';

import styles from "./Moviecard.module.scss";
import DeleteModal from "../Modals/DeleteModal";
import EditModal from "../Modals/EditModal";

const PopUp = ({close, movie, handleRemove, active}) => {

    const [deleteModalActive, setDeleteModalActive] = useState(false);
    const [editModalActive, setEditModalActive] = useState(false);

    const deleteMovieButtonClick = useCallback(() => setDeleteModalActive(true), []);
    const editMovieButtonClick = useCallback(() => setEditModalActive(true), []);

    const notCloseOnContent = useCallback((e) => e.stopPropagation(), []);

    return (
        <div
            className={active ? styles.popUp : styles.hidePopUp}
            onClick={close}
        >
            <div
                className={styles.modalContent}
                onClick={notCloseOnContent}
            >
                <span
                    className={styles.close}
                    onClick={close}
                >
                    &times;
                </span>
                <div className={styles.buttons}>
                    <button
                        className={styles.popUpButton}
                        onClick={editMovieButtonClick}
                    >
                        Edit
                    </button>
                    <button
                        className={styles.popUpButton}
                        onClick={deleteMovieButtonClick}
                    >
                        Delete
                    </button>
                </div>
                <DeleteModal
                    movie={movie}
                    handleRemove={handleRemove}
                    active={deleteModalActive}
                    setActive={setDeleteModalActive}/>
                <EditModal
                    movie={movie}
                    active={editModalActive}
                    setActive={setEditModalActive}
                />
            </div>
        </div>
    );
};

export default PopUp;
