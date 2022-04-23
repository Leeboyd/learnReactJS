const h1 = document.createElement("h1")
h1.textContent = "Hello World!"
h1.className = "header"
console.log(h1)

// <h1 class="header">

const element = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
console.log(element)

// 印出來是一個物件

ReactDOM.render(element, document.getElementById("root"))