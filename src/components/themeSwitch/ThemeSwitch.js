import './ThemeSwitch.css'
import useThemeContext from "../../hooks/useThemeContext";

const ThemeSwitch = () => {

  const {theme, dispatch} = useThemeContext()

  console.log(theme)

  const handleTheme = () => {
    if (theme === 'light') {
      dispatch({type: 'DARK'})
    } else {
      dispatch({type: 'LIGHT'})
    }
  }

  return (
    <>
      <label id="switch" className="switch">
        <input type="checkbox" onChange={handleTheme} id="slider" />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ThemeSwitch;
