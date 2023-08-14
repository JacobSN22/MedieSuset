import styled from 'styled-components'

export const FrontPagestyle = styled.nav`

h1 {
    text-align: center;
    margin-top: 2em;
}

.news {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1em 1em;
    margin: 0 5em 0 5em;

    .newsboxes {
        display: block;
        background-color: lightgray;
        padding: 0 0 1em 0;
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    .text {
        padding: 0 1em 0 1em;
    }

    .button {
        text-align: center;

        button {
            width: 100%;
            background-color: black;
            color: white;
            padding: 0.7em;
        }
        button:hover {
            transition: 100ms;
            background-color: lightblue;
        }
    }
}
`