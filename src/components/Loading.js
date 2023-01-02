import React from 'react'
import { useSelector } from 'react-redux';

function Loading() {
    const { loading } = useSelector(state => state)

    return (
        <>
            {loading && <div div class="progress" >
                <div class="indeterminate"></div>
            </div >}

        </>
    )
}

export default Loading
