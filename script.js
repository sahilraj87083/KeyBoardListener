let table = document.getElementById('table')

window.addEventListener('keydown' , (e) => {
    table.innerHTML = `
    <h1>Press Key</h1>
    <div class = "table">
        <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td id = "keypressed">${e.key === ' ' ? 'space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    </div>
    `
});
