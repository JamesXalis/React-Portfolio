
function ResumeContainer() {

    const handleClick = () => {

    }

    return (
        <>
            <div>
                <aside>
                    <button onClick={handleClick}>
                    Download My Resume
                    </button>
                </aside>
                <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                </ul>
            </div>
            <div>
                <h3>Back-End Proficiencies</h3>
                <ul>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL + Sequelize</li>
                    <li>MongoDB + Mongoose</li>
                    <li>REST</li>
                    <li>APIs</li>
                    <li>GraphQL</li>
                </ul>
            </div>

        </>
    );
}

export default ResumeContainer;