import React from 'react';
import Search from './Search'

const NavBar = ({search, item}) =>(
    
<nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#ed40aa"}}>
  <a class="navbar-brand" href="#">{item.navBarTitle}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      
      {//if item.type === x do something / else do something else
        item.navBarItems.map((item)=> //TODO: add key
          <li class= {item.liClassName}>
            <a class={item.aClassName} href={item.href}>
              {item.children} 
            {/*<span class="sr-only">(current)</span>*/}
            </a>
          </li>

        )
      }
          
     
      

      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      {search}
    </form>
  </div>
</nav>   
);

export default NavBar;