import {useTheme, useUpdateTheme} from './ThemeContext'

const FunctionContextComponent = ()=>{
    
    const darkTheme = useTheme()
    const toggleTheme = useUpdateTheme()

    const ThemeStyles = {
        backgroundColor: darkTheme ? '#987' : '#678',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={ThemeStyles}>Function Theme</div>
        </>
    )
}

export default FunctionContextComponent