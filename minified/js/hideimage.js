function window_size(){var e=0,n=0;"number"==typeof window.innerWidth?(e=window.innerWidth,n=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(e=document.documentElement.clientWidth,n=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(e=document.body.clientWidth,n=document.body.clientHeight),n>e&&(document.getElementById("container").style.backgroundImage="none")}