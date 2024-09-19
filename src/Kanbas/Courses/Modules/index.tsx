export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <div>
            <button>Collapse All</button> 
            <button>View Progress</button>
            <select id="wd-publish-all">
            <option selected value="PUBLISH_ALL">Publish All</option>
            <option value="Publish">Publish</option>
            </select>
            <button>+ Module</button><br/>
        </div>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
                </ul>
              </li>
            </ul>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node JS</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting UI with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Create UI with HTML</li>
                  <li className="wd-content-item">Deploy assignment to Netlify</li>
                </ul>
              </li>
            </ul>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and DOM</li>
                  <li className="wd-content-item">Formatting Web Content with Headings</li>
                  <li className="wd-content-item">Formating with Lists and Tables</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
);}
    