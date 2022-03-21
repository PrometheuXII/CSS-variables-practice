// console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--div-background-color'))

document.getElementById('dark-theme-btn').addEventListener('click', () => {
    document.documentElement.style.setProperty(
        '--background-color', '#333'
    ),
    document.documentElement.style.setProperty(
        '--text-color', '#fff'
    )
})

document.getElementById('light-theme-btn').addEventListener('click', () => {
    document.documentElement.style.setProperty(
        '--background-color', 'white'
    ),
    document.documentElement.style.setProperty(
        '--text-color', '#000'
    )
})