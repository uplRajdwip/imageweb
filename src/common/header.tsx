import React from 'react'
import styles from './header.module.css'

const Header = (props: any) => {

    return (
        <div>
            <div className={styles.header} id='myHeader'>
                <div className={styles.headerName}>
                    <h2>PI</h2>
                </div>
                <div className={styles.input_fild}>
                    {props.Refreshbutton && <button className={styles.RefreshBtn} onClick={props.onClickRefresh}>Refresh</button>}
                    {props.input && <input type={'text'} onKeyPress={props.onKeyPress} onChange={props.onChange} placeholder="Search Image" className={styles.inputFild} />}
                    {props.Searchbutton && <button className={styles.SearchBtn} onClick={props.onClickSearch}>Search</button>}

                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Header