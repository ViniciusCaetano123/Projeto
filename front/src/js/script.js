const getStoredTheme = () => localStorage.getItem('theme')
  
const setStoredTheme = theme => localStorage.setItem('theme', theme)

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme()
  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = theme => {
    const whatIsTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  if (theme === 'auto') {
    document.documentElement.setAttribute('data-bs-theme', (whatIsTheme))
    setStoredTheme(theme)
    exibirIconToggle(whatIsTheme)
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
    setStoredTheme(theme)
    exibirIconToggle(theme)
  }
}


const exibirIconToggle = (theme)=>{    
    $(document).ready(function() {
        const toggleLight = $('.theme-toggle-icon-light');    
        const toggleDark = $('.theme-toggle-icon-dark')
        if(getPreferredTheme() == 'dark'){
            setTheme('dark')
            toggleDark.addClass('d-flex');
            toggleLight.removeClass('d-flex');
        }else{
            setTheme('light')
            toggleLight.addClass('d-flex');
            toggleDark.removeClass('d-flex');
        }
    })
}
console.log(getPreferredTheme())
exibirIconToggle(getPreferredTheme())