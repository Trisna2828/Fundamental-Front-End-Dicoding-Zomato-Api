import profileImage from "../view/author.jpg"

class Author extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                text-align: justify;
            }
            :host {
                color: white;
                font-size: xx-small;
            }

            .container-row {
                display: flex;
                flex-direction: row;
            }

            .container-row>img {
                max-width: 50px;
                max-height: 50px;
                border-radius: 50%;
            }

            .container-column {
                flex-direction: column;
            }

            .description {
                padding-left: 20px;
                padding-top: 10px;
            }

            .description>section {
                margin-bottom: 5px;
            }
            @media screen and (max-width: 500px) {
                * {
                    font-size : 8px;
                }
                :host {
                    max-height: 100px;
                }
                .container-row>img {
                    margin-top: 5px;
                }
            }
        </style>
        <div class="container-row">
            <img alt="profile-image" id="profileImage">
            <article class="container-column description">
                <section id="project">
                    <p>This project was made as a submission for Dicoding Academy Course: Fundamental Front End Developer</p>
                </section>
                <section id="author">
                    <p>This project was made by Nur Trisna Hidayat. Trisna is Geographic Student, he also a GIS Specialist. Lately he tried to discover his inner potensial, he tried coding and building and he found happy to did that. Now he decide to learn more about coding on website development and his desire is being a developer</p>
                </section>
            </article>
        </div>
        `;
        this.shadowDOM.querySelector('#profileImage').src = profileImage;
    }
}

customElements.define("author-profile", Author);