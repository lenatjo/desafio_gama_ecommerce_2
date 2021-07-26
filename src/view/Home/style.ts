import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: auto;

    .app{
        display: flex;
        flex-direction: row;
    }

    .logo-section{
        height: 120px;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: black;
        background-color: black;
    }

    .name-ecommerce-section{
        height: 120px;
        width: 70vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: black;
        background-color: black;
    }

    .areas-section{
        height: 120px;
        width: 40vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: black;
        background-color: black;
    }

    .space-section{
        min-height: 120px;
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: black;
        background-color:black;
    }

    .cart-section{
        min-height: 120px;
        width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: black;
        background-color:black;
    }

    .img-logo{
        height: 100px;
        align-items: center;
        margin-left: 20px;
        //margin-top: 10px;
    }

    .h1-header {
        color: white;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        margin-top: 0;
        font-family: 'Open Sans', sans-serif;
    }

    .h2-header {
        color: white;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        margin-top: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 30px;
    }

    .cart-text{
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 27px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #FFFFFF;
    }



    .p{
        margin: 0.5rem 0;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #000000;
    }

    .products{
        background-image: url(../../assets/background_products.jpg);
        background-color: gray;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-around;
    }

    .products-cards{
        background: white;
        border-radius: 20px;
        width: 245px;
        height: 320px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        margin: 2rem 1rem;
        //box-shadow: 0 8px 8px 0 rgb(41 41 41 / 13%);
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        color: #E5E5E5;
        align-items: center;
    }

    .card-text{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        color: #E5E5E5;
    }

    .card-price{
        margin: 0.5rem 0;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: red;
    }

    .btn-card{
        margin: 1rem 0;
        background: black;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 20px;
        box-shadow: 0 8px 8px 0 rgb(41 41 41 / 20%);
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        color: #E5E5E5;
        appearance: auto;
        user-select: none;
        white-space: pre;
        align-items: flex-start;
        text-align: center;
        cursor: pointer;
    }

    .footer{
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        color: white;
        justify-content: space-around;
        background-color: black;
    }

    .footer-links{
        margin-top: 20px;
        margin-left: 1250px;
    }

    .social-icons{
        color: white;
        fill: white;
        margin-left: 10px;
    }

    .customer-section{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        background-color: black;
        color: white;
        font-family: 'Open Sans', sans-serif;
    }

    .data-input {
        width: 300px;
        height: 42px;
        background: #E5E5E5;
        border-radius: 5px;
        border: none;
        margin-top: 10px;
    }

    .btn-register{
        width: 126px;
        height: 42px;
        border: none;
        background: #EF042E;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 20px;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        color: #E5E5E5;
    }

`