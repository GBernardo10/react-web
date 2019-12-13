import styled from "styled-components";

export const NavBar = styled.header`
    nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: #2f004b;
        min-height: 8vh;
    }
    li {
        margin: 2% 5% 0%;
    }
    .logo {
        font-size: 2em;
        color: white;
    }
    .logo h4 {
        font-size: 2.5rem;
    }
    .nav-links {
        display: flex;
        justify-content: flex-end;
        width: 47%;
    }
    .nav-links a {
        color: white;
    }
    .burger div {
        background-color: white;
        width: 25px;
        height: 3px;
        margin: 5px;
        transition: all 0.3s;
    }
    .burger {
        display: none;
        cursor: pointer;
    }
    @media screen and (max-width: 1024px) {
        .nav-links {
            display: flex;
            justify-content: flex-end;
            width: 47%;
        }
    }
    @media screen and (max-width: 768px) {
        nav {
            display: flex;
            justify-content: center;
        }
        .nav-links li {
            opacity: 0;
        }
        .nav-links {
            position: absolute;
            right: 0px;
            height: 92vh;
            top: 8vh;
            background-color: #2f004b;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 70%;
            transform: translateX(100%);
            transition: transform 0.5s ease;
        }
        .burger {
            position: absolute;
            left: 87%;
            display: block;
        }
    }
    .nav-active {
        transform: translateX(0%);
    }
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .toggle .line2 {
        opacity: 0;
    }
    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
