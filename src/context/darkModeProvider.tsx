import React, {createContext, useContext, useState} from 'react'

interface DarkmodeContextP {
  darkmode : boolean;
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const DarkmodeContext = createContext<DarkmodeContextP | null>(null);

const DarkmodeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [darkmode, _toggleDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => {
    const root = document.querySelector('html');
    const classlist = root?.classList;
    classlist?.toggle('dark');
    // console.log(classlist?.contains('darak'))
    _toggleDarkMode(root?.classList?.contains('dark') ?? false)
  }
  return (
    <DarkmodeContext.Provider value={{darkmode, toggleDarkMode}}>
      {children}
    </DarkmodeContext.Provider>
  )
}

export const useDarkmode = (): DarkmodeContextP => {
  return useContext(DarkmodeContext) as DarkmodeContextP;
}


export default DarkmodeProvider;