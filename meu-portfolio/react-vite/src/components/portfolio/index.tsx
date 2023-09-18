import './index.css';

export function Header(){
    return (
        <header>
            <nav className="header__flex">
                <div className='header__flex__link__menu'>
                    <ul>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#habilidades">Habilidades</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>
                    <h2 className='header__flex__h2'>Portfólio</h2>
                <div className='toggle'>
                    <input type="checkbox" name="checkbox" id="checkbox" onClick={AlteraCor} />
                    <label htmlFor="checkbox" className='switch'>
                        <span className='slider'></span>
                    </label>                    
                </div>                
            </nav>
        </header>
    )
}

export function Main(){
    return (
        <main>
            <section className='container' id='sobre' data-aos="fade-right">   
                 <div>             
                     <h1 className='container__h1'>Olá, eu sou o <strong>Willian Santana</strong></h1>
                     <div className='container_buttom'>
                        <a className='buttom__download' href="/src/components/pdf/curriculo.pdf" attributes-list download>Download CV</a>
                         <a className='buttom__cv' href="https://wa.me/5516993402404" target="_blank">WhatsApp</a>
                     </div>
                 </div>
                 <div>
                     <img className='img' src="/src/assets/img/imagem_pessoal.jpg" alt="Imagem Pessoal" />
                 </div>                               
             </section>    
             <section className='sobre__container' data-aos="fade-left">
                 <h1>Sobre mim</h1>           
             </section>  
             <section className='texto__sobre__container' data-aos="fade-left">
                 <p>Desenvolvedor FullStack com experiência em React.js, Next.js, Redux, JavaScript, TypeScript, NodeJs, Progress, Angular, Laravel, Mysql, Styled Components, Material UI e consumo de APIs REST. Apaixonado pelo desenvolvimento de Software. Também possui experiência em projetos gerenciados por Metodologias Ágeis. Formado em Análise e Desenvolvimento de sistemas e cursando Especialização na Alura.</p>             
             </section>  
             <Habilidades/>    
             <Projetos/> 
             <Contato/>     
        </main>
    )
}

function Habilidades(){
    return (
        <section className='habilidades'>
                <div className="habilidades__container">
                    <h1 data-aos="fade-right" id='habilidades'>Habilidades</h1>
                    <div className="habilidades__cards" data-aos="fade-right">
                        <div className="box" key="0">
                            <p>HTML5</p>
                            <img className='img__html' src="/src/assets/img/html.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>CSS3</p>
                            <img className='img_css' src="/src/assets/img/css.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>Bootstrap</p>
                            <img className='img__bootstrap' src="/src/assets/img/bootstrap.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>JavaScript</p>
                            <img className='img_js' src="/src/assets/img/javascipt.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>React.js</p>
                            <img className='img__react' src="/src/assets/img/react.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>Typescript</p>
                            <img className='img_typescript' src="/src/assets/img/typescript.png" alt="" />
                        </div>                        
                        <div className="box" key="0">
                            <p>PHP</p>
                            <img className='img_php' src="/src/assets/img/php.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>Laravel</p>
                            <img className='img__laravel' src="/src/assets/img/laravel.jpg" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>Angular</p>
                            <img className='img__angular' src="/src/assets/img/angular.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>Progress</p>
                            <img className='img__progress' src="/src/assets/img/progress.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>Node.js</p>
                            <img className='img__nodejs' src="/src/assets/img/nodejs.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>Nest.js</p>
                            <img className='img__nestjs' src="/src/assets/img/nestjs.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>Mysql</p>
                            <img className='img__mysql' src="/src/assets/img/mysql.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>Oracle</p>
                            <img className='img__oracle' src="/src/assets/img/oracle.png" alt="" />
                        </div>
                        <div className="box" key="0">
                            <p>Postgres</p>
                            <img className='img__postgres' src="/src/assets/img/postgres.png" alt="" />
                        </div>                        
                    </div>
                </div>
             </section>   
    )
}

function Projetos(){
    return (
        <section className='projetos'>
            <div className='projetos__h1__projetos' data-aos="fade-left">
                <h1 id='projetos'>Projetos</h1>
            </div>
            <div className='projetos__h1__destaques' data-aos="fade-left">
                <h1>Destaques . . .</h1>
            </div>
            <div className='projetos__destaques' data-aos="fade-left">
                <div className='projetos__destaques__box'>
                    <img src="/src/assets/img/projeto1.jpg" alt="" />
                </div>
                <div className='projetos__destaques__box'>
                    <img src="/src/assets/img/projeto2.jpg" alt="" />
                </div>
                <div className='projetos__destaques__box'>
                    <img src="/src/assets/img/projeto3.jpg" alt="" />
                </div>
            </div>
            <div className='todos__projetos__h1' data-aos="fade-right">
                <h1>Todos os Projetos . . .</h1>
            </div>
            <div className='todos__projetos' data-aos="fade-right">
                <div className='todos__projetos__box'>
                    <img src="/src/assets/img/projeto3.jpg" alt="" />
                </div>
                <div className='todos__projetos__box'>
                    <img src="/src/assets/img/projeto4.jpg" alt="" />
                </div>
                <div className='todos__projetos__box'>
                    <img src="/src/assets/img/projeto5.jpg" alt="" />
                </div>
                <div className='todos__projetos__box'>
                    <img src="/src/assets/img/projeto1.jpg" alt="" />
                </div>
                <div className='todos__projetos__box'>
                    <img src="/src/assets/img/projeto2.jpg" alt="" />
                </div>
                <div className='todos__projetos__box'>
                    <img src="/src/assets/img/projeto3.jpg" alt="" />
                </div>
                <div className='todos__projetos__box'>
                    <img src="/src/assets/img/projeto3.jpg" alt="" />
                </div>
                <div className='todos__projetos__box'>
                    <img src="/src/assets/img/projeto4.jpg" alt="" />
                </div>
                <div className='todos__projetos__box'>
                    <img src="/src/assets/img/projeto5.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

function Contato(){
    return (
        <section id='contato'>
            <div className='contato__h1'>
                <h1>Contatos</h1>
            </div>
            <div className='contato__container'>
                <div className='contato__conteudo'>
                    <a href="https://github.com/Williandevweb/">
                        <img src="/src/assets/img/github.svg" alt="" />   
                    </a> 
                    <a href="https://github.com/Williandevweb/">
                        <h2>GitHub</h2>
                    </a>                                 
                </div>
                <div className='contato__conteudo'>
                    <a href="https://wa.me/5516993402404">
                        <img src="/src/assets/img/phone.svg" alt="" />   
                    </a> 
                    <a href="https://wa.me/5516993402404">
                        <h2>Contato</h2>
                    </a>                                  
                </div>
                <div className='contato__conteudo'>
                    <a href="https://www.linkedin.com/in/willian-santana-programador/">
                        <img src="/src/assets/img/linkedin.svg" alt="" />   
                    </a> 
                    <a href="https://www.linkedin.com/in/willian-santana-programador/">
                        <h2>Linkedin</h2>
                    </a>                                  
                </div>
                <div className='contato__conteudo'>
                    <a href="mailto:willianleonardorv@gmail.com">
                        <img src="/src/assets/img/mail.svg" alt="" />   
                    </a> 
                    <a href="mailto:willianleonardorv@gmail.com">
                        <h2>E-mail</h2>
                    </a>                                 
                </div>
            </div>
        </section>
    )
}

function AlteraCor(){

    let elemento: any = document.getElementById("checkbox");

    if(elemento.checked == true){
        document.body.style.setProperty('--cor-primaria', 'white');
        document.body.style.setProperty('--cor-secundaria', '#111125');
        document.body.style.setProperty('--cor-terciaria', '#111125');              
    }else {
        document.body.style.setProperty('--cor-primaria', '#111125');
        document.body.style.setProperty('--cor-secundaria', 'white');
        document.body.style.setProperty('--cor-terciaria', 'rgb(177, 166, 166)');
    }
}