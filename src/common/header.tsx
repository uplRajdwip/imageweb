import { Form } from 'formik'
import React, { useState } from 'react'
import styles from './header.module.css'

const Header = (props: any) => {


    return (
        <div>
            <div className={styles.header} id='myHeader'>
                <div className={styles.headerName}>
                    <h2>PI</h2>
                </div>
                <div className={styles.input_fild}>
                    {props.input && <input type={'text'} onKeyPress={props.onKeyPress} onChange={props.onChange} placeholder="Search Image's" className={styles.inputFild}/>}
                    {props.button && <button className={styles.SearchBtn} onClick={props.onClick}>Search</button>}
                </div>

                <div>
                   
                </div>
            </div>
        </div>
    )
}

export default Header