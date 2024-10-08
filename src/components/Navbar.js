import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <a href="#" class="navbar-brand">DemoTech</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbar">
        <ul class="navbar-nav">
            <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
        </ul>
    </div>
</nav>
    </div>
  )
}

export default Navbar