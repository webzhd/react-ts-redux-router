import * as React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'

require('codemirror/mode/jsx/jsx') 
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

function Coder() {
    let coder: string = `
        import React from 'react'

        function App() {
            return <div>
                <h3>I ♥ react</h3>
            </div>
        }
    `
    return <CodeMirror
        value={coder}
        options={{
            mode: 'jsx',
            theme: 'material',
            lineNumbers: true
        }}
        onChange={(editor, data, value) => {
            
        }}
    />
}

export default Coder