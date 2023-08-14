import styled from 'styled-components'

export const NavStyle = styled.nav`

nav {
    text-align: right;
}

ul {
    display: inline-block;
    margin: 2.7em 5em 0 0;
}

li {
    display: inline;
    padding: 0 1em;
    
    a {
        color: black;
        text-decoration: none;
    }
    a:hover {
            color: red;
        }
}
h1 {
    display: inline;
}
img {
    float: left;
    margin: 0 0 0 5em;
}

    .dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 90px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: red;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover li a {
    color: red;
}
`