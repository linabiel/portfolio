import React, {Component} from "react";

class About extends Component {

    render() {

        return (

            <div id='main-container'>
                <h2 className='main-about'>
                    I am an inquisitive Software Developer, on a constant mission to expand my
                    knowledge. Throughout my career in the Art and Culture sector, I have developed
                    a strong analytical and critical thinking mindset. Having worked for over 10 years in
                    various roles in Customer Service, I have learnt to approach problems in a tactful,
                    open-minded, and diplomatic manner. As someone who always had an interest in
                    technologies, I am excited to start a career in a new industry, where I can build on
                    my existing skills and bring in the creativity I nourished as a freelance art critic.
                </h2>

                <h2 id='cc-grad'>
                    CodeClan Graduate
                </h2>

                <h2 className='main-about'>
                    A 16 week Professional Software Development Course that is accredited by the SQA. 800+ hours of learning in-demand methodology, languages, databases and frameworks. Solo and Group Projects, pair-programming, coding and presenting working apps in under a week.
                </h2>
            </div>
        )
    }
}

export default About;