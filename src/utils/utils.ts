export const getStorageTheme = () => {
    let theme= "light";
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };
  