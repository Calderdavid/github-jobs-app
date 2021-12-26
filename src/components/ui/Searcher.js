import React from 'react'
// import {FormControl} from 'react-bootstrap'
import '../../../src/index.css';
import Button from 'react-bootstrap/Button'


const Searcher = () => {
    return ( 
        <>   
            <form>
                <input type="text" id="search" name="fname"
                placeholder = "Title, companies, expertise of benefits"/>

                <Button id="search-btn" variant="primary">Search</Button>

            </form>
        </>
    )
}

export default Searcher


