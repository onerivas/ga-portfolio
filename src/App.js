
import './App.css';

function App() {
  return (
    <div className="container-fluid">
    <div className='d-flex justify-content-center'>
    <h1 className='name display-2'>juan.carlos.rivas</h1>
    </div>
      <div className='nav navbar nav-fill justify-content-center'>
        <ul className='nav'>
          <li className='nav-item' ><a className='nav-link' href='https://www.linkedin.com/in/onerivas/' target='_blank'>LinkedIn</a></li>
          <li className='nav-item' ><a className='nav-link' href='https://github.com/onerivas' target='_blank'>GitHub</a></li>
          <li className='nav-item' ><a className='nav-link' href='#resume'>resume</a></li>
          <li className='nav-item' ><a className='nav-link' href="mailto:one.rivas@gmail.com">
                one.rivas@gmail</a></li>
        </ul>
      </div>
      <div className='main'>
        <div>
          <div className='w-75 mx-auto'>
            <h1 className='secTitles'>about.me</h1>
            <div className='pb-3 text-center'>
              <p className='aboutMe w-75 mx-auto p-4'>I am a curious thinker who is excited to continue to learn new technologies and further grow as a human-centric software engineer in the rapidly evolving industry of software development. I leverage my technical knowledge of various front-end and back-end development technologies and my analytical troubleshooting skills to deliver thoughtful solutions to today’s problem. I enjoy bringing compassion, patience, and emotional intelligence to a team and helping colleagues stay motivated and feel valued. </p>
              </div>
            </div>
          </div>
          <div className='project-gallery w-75 mx-auto'>
            <h1 className='secTitles text-right'>completed.projects</h1>
            <div className='project my-3'>
              <div class="card w-75 ">
                <a href='https://doggie-to-doodoo.herokuapp.com/' target='_blank'>
                  <img src="/images/doggieToDooDoo.png" class="card-img-top" alt=""/>
                </a>
              </div>
              <div className='aboutProject-1'>
                <h4 className='aboutTitle'>DoggieToDooDoo</h4>
                <p className=''> DoggieToDooDoo was made to help pet owners track their pet's day! Once you sign up you can add todo items and keep track if you've completed them. Add feeding times, potty breaks, or anything you need!! DoggieToDooDoo was made with <strong>React, React-Router, Bootstrap, Axios, and hosted on Heroku</strong>. A seperate back-end database was created for DoggieToDooDoo using <strong>Express, MongoDB, Mongoose, Passport, BCrypt, JWT, and hosted on Heroku</strong>.
                </p>
              </div>
            </div>
            <div className='project my-3'>
              <div class="card w-75 ">
                <a href='https://onerivas.github.io/NASA-app/' target='_blank'>
                  <img src="/images/nasaPhoto.png" class="card-img-top" alt=""/>
                </a>
              </div>
              <div className='aboutProject'>
                <h4 className='aboutTitle'>NASA.Photography</h4>
                <p className=''> NASA Photography is an photo gallery collecting NASA's Picture of the Day. The images are displayed by month. This app was created using <strong>jQuery, AJAX, HTML, CSS, JavaScript, and the NASA APoD API.</strong>.
                </p>
              </div>
            </div>
            <div className='project my-3'>
              <div class="card w-75 ">
                <a href='https://safe-castle-33189.herokuapp.com/home' target='_blank'>
                  <img src="/images/movies.png" class="card-img-top" alt=""/>
                </a>
              </div>
              <div className='aboutProject-1'>
                <h4 className='aboutTitle'>My.Movie.Collection</h4>
                <p className=''> My Movie Collection was made to help users track their movie collection. Once you add a movie to your collection, you can show which you have lent out to friends. Never forget who has your movie again! My Movie Collection was made using <strong>EJS, HTML, CSS, Express, Express-Sessions, MongoDB, Mongoose, Method-Override, BCrypt, Bootstrap, and hosted on Heroku</strong>.
                </p>
              </div>
            </div>
            <div className='project my-3'>
              <div class="card w-75 ">
                <a href='https://limitless-oasis-80314.herokuapp.com/' target='_blank'>
                  <img src="/images/mossJobs.png" class="card-img-top" alt=""/>
                </a>
              </div>
              <div className='aboutProject'>
                <h4 className='aboutTitle'>mossJobs</h4>
                <p className=''> mossJobs was created so our General Assembly cohort would be able to share job oppertunities. It was created using <strong>PHP, PostgreSQL, React, Materialize, and hosted on Heroku</strong>. mossJobs was created with <a href='https://alisoncarnes-portfolio.herokuapp.com/' target='_blank'>Alison Carnes</a>.
                </p>
              </div>
            </div>
            <div className='project my-3'>
              <div class="card w-75 ">
                <a href='https://travel-gram-app.herokuapp.com/' target='_blank'>
                  <img src="/images/travelgram.png" class="card-img-top" alt=""/>
                </a>
              </div>
              <div className='aboutProject'>
                <h4 className='aboutTitle'>travelGram</h4>
                <p className=''> travelGram was made to share travel photos. User can post photos and comment on each others post. travelGram was created using <strong>React, MongoDB, Mongoose, Express, and hosted on Heroku</strong>. It was created in a team with <a href='' target='_blank'>Andre Le</a> and <a href='' target='_blank'>Richard Yang</a>
                </p>
              </div>
            </div>
          </div>
      </div>
      <div className='w-75 mx-auto'>
        <a id='resume'></a>
        <h1 className='secTitles'>resume.</h1>
        <div className='pb-3 text-center'>

          <div className='aboutMe w-75 mx-auto p-4'>
            <img src="/images/rivasResume.jpg" class="card-img-top" alt=""/>
          </div>
        </div>
      </div>
      <div className='footer'>
      <ul>
        <li>Proudly Made in San Jose, CA by Juan Carlos Rivas</li>
        <li><a href="https://www.linkedin.com/in/onerivas/" target="_blank"><i class="fab fa-linkedin"></i></a> </li>
        <li><a href="https://github.com/onerivas" target="_blank"><i class="fab fa-github-square"></i></a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
