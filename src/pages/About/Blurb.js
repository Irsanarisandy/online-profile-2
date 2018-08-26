import { Button } from '@material-ui/core';
import React from 'react';
import styles from './styles';

const Blurb = () => (
    <div id="blurb" style={styles.blurb}>
        <p>
            Hi there! I&#39;m a Computer Science graduate from the University of
            Auckland, seeking opportunities to work as a full-stack website
            developer or a software developer. I&#39;m enthusiastic when it
            comes to learning new skills, especially when it relates to
            computers and other forms of technology. I enjoy making programs and
            have experiences with many programming languages.
        </p>
        <br />
        <p>
            Why should you hire me, you may ask? Well, I&#39;m a motivated
            learner and passionate in what I do, especially when it comes to
            coding. I applied the things I learned during MSA programme to make
            a new website for my uncle to use for his business. I also enjoy
            working with a team and have experience in doing so during many
            hackfest / create camp events each year, which are hosted by Summer
            of Tech. During my internship with Kordia, I have learned many
            things, including how to use Vue JS Framework, Django Web Framework
            (Python), code development procedures (i.e. Agile) and the
            importance of documentations. I am confident to say that all the
            experiences I have gained during my internship will help develop my
            IT career.
        </p>
        <br />
        <p>I hope to hear from you!</p>
        <br />
        <Button
            variant="outlined"
            href="https://www.dropbox.com/s/npvzonzakkjqsbc/CV.pdf?dl=0"
            target="_blank"
            style={styles.button}
        >
            Download my CV
        </Button>
    </div>
);

export default Blurb;
