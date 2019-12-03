import { Button } from '@material-ui/core';
import React from 'react';
import { CVIcon, EmailIcon } from '../../components/logos-and-icons';
import styles from './styles';

const Blurb = () => (
    <div id="blurb" style={styles.blurb}>
        <p>
            Hi there! My name is Irsan Arisandy and I am a full-stack website
            developer, particularly on the front-end side using various
            JavaScript Frameworks such as React and Angular. I became a website
            developer because I love solving real-life problems and getting
            satisfaction out of it.
        </p>
        <br />
        <p>
            Why should you hire me, you may ask? Well, I am a motivated learner
            and passionate in what I do, especially when it comes to coding. I
            applied the things I learned during the MSA programme to make a new
            website for my uncle to use for his business. I also enjoy working
            with a team and have experience in doing so during many hackfest /
            create camp events each year, which are hosted by Summer of Tech.
            During my internship with Kordia, I learnt how to use Vue JS
            Framework, Django Web Framework (Python), and Agile. During my
            internship with SilverStripe, I learnt BEM methodology, the use of
            PHP in back-end, and how the SilverStripe CMS is used as a tool to
            content load websites, while also improving my knowledge in Agile,
            Vue JS and front-end as a whole. Furthermore, during my time with
            Westpac as a contractor, I have gained even more skills which
            includes learning Angular for the first time and improving my soft
            skills to communicate clearer in a team. I am confident to say that
            all the experiences I have gained during my internship will help
            develop my IT career.
        </p>
        <br />
        <p>I hope to hear from you!</p>
        <Button
            variant="outlined"
            href="mailto:irsanarisandy@hotmail.com"
            target="_blank"
            style={styles.button}
        >
            <EmailIcon />
            &ensp;Email Me
        </Button>
        <Button
            variant="outlined"
            href="https://www.dropbox.com/s/lfazvco9hgy6qq0/CV.pdf?dl=0"
            target="_blank"
            style={styles.button}
        >
            <CVIcon />
            &ensp;Download My CV
        </Button>
    </div>
);

export default Blurb;
