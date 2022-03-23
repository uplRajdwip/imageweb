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
                    {props.input && <input type={'search'} onChange={props.onChange} placeholder="Search Image's" className={styles.inputFild} />}
                    {props.button && <button className={styles.SearchBtn} onClick={props.onClick}>Search</button>}
                </div>

                <div>
                    {props.loder && <div className={styles.sk_folding_cube} id={props.id}>
                        <div className={`${styles.sk_cube1} ${styles.sk_cube}`}></div>
                        <div className={`${styles.sk_cube2} ${styles.sk_cube}`}></div>
                        <div className={`${styles.sk_cube4} ${styles.sk_cube}`}></div>
                        <div className={`${styles.sk_cube3} ${styles.sk_cube}`}></div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Header