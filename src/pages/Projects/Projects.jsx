import React from 'react';
import styles from './styles';
import { CustomCard } from '../../components/CustomCard';
import wellness from '../../assets/wellness-shed.png';
import aucs from '../../assets/aucs.png';
import appetite from '../../assets/app-etite.png';
import qwiky from '../../assets/qwiky.png';
import eatMyApp from '../../assets/eat-my-app.png';
// import currency from '../../assets/currency-converter.png';

const Projects = () => (
    <div id="projects-container" style={styles.projectsContainer}>
        <div>
            <CustomCard
                projectImage={wellness}
                projectTitle="The Wellness Shed"
                projectTech="Wordpress"
                projectParagraph="Made a professional website with my teammates assigned during
                MSA, for AUT Millennium, using WordPress. I particularly worked on displaying the
                contents of the page (i.e. wording and displaying pictures)."
                projectLink="https://www.thewellnessshed.co.nz/"
            />
            <CustomCard
                projectImage={aucs}
                projectTitle="Auckland University Compsci Society"
                projectTech="Vanilla (No JavaScript Framework, plain HTML5, CSS3 &amp; JavaScript)"
                projectParagraph="Made a website for AUCS, a university club."
                projectLink="http://aucs.azurewebsites.net/index.html"
            />
            <CustomCard
                projectImage={appetite}
                projectTitle="app-etite"
                projectTech="Vanilla for front-end, Node.js for back-end"
                projectParagraph="As a front-end developer, I worked on the layout, map, and
                displaying data from Yelp API."
                projectLink="https://ooksei.github.io/Hackfest/"
            />
            <CustomCard
                projectImage={qwiky}
                projectTitle="Qwiky"
                projectTech="React for front-end, Node.js for back-end, NoSQL for database"
                projectParagraph="As a front-end developer, I worked on the map and getting
                data to be transferred into the NoSQL database."
                projectLink="https://badboiz.github.io/frontend/"
            />
            <CustomCard
                projectImage={eatMyApp}
                projectTitle="Eat My App"
                projectTech="Vanilla for front-end, Node.js for back-end"
                projectParagraph="I worked on the first page and cuisine page for front-end
                and setting the route for Bing Image Search API for back-end. Our team won
                the People’s Choice Award."
                projectLink="http://eatmyapp.herokuapp.com/"
            />
        </div>
        {/* <div></div> */}
        <p style={styles.text}>
            Other projects are mentioned in the&nbsp;
            <a
                href="https://www.dropbox.com/s/lfazvco9hgy6qq0/CV.pdf?dl=0"
                target="_blank"
                rel="noopener noreferrer"
            >
                CV
            </a>
            . If you want to see the code, feel free to email me at&nbsp;
            <a href="mailto:irsanarisandy@hotmail.com">
                irsanarisandy@hotmail.com
            </a>
            .
        </p>
    </div>
);

export default Projects;
