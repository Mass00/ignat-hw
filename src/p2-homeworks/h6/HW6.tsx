import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import st from './HW6.module.css'
function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', ''))
    }

    return (

        <div>
            <hr/>
            homeworks 6
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {/*should work (должно работать)*/}
                <div>
                        <SuperEditableSpan
                            value={value}
                            onChangeText={setValue}
                            spanProps={{children: value ? undefined : 'enter text...'}}
                        />
                    <div className={st.btngrp}>
                        <SuperButton className={st.btn} onClick={save}>save</SuperButton>
                        <SuperButton className={st.btn} onClick={restore}>restore</SuperButton>
                    </div>
                </div>
                <div>
                    {/*для личного творчества, могу проверить*/}
                    {/*<AlternativeSuperEditableSpan/>*/}

                    <hr/>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default HW6
