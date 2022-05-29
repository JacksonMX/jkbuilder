import React, { useEffect, useState } from 'react'
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import 'grapesjs/dist/css/grapes.min.css';
import st from '../../styles/main.module.css'

const Builder = () => {
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            plugins: [gjsPresetWebpage],
            pluginsOpts: {
                gjsPresetWebpage: {}
            }
        });

        setEditor(editor);
    }, [])
    
    return (
        <section id='editor'>

        </section>
    )
}

export default Builder