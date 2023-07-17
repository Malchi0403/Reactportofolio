import React from 'react'
import { Newest } from '../Newest'

export const Mouse = () => {
    return (
        <>
            <group>
                <ambientLight intensity={1} />
                <Newest />
            </group>
        </>
    )
}
