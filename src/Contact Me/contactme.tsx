

function ContactMe()
{
    return (
        <div id="contactMe" className="container ContactMe">
            <p style={{ fontSize: "3vw" }} className="ContactMeHeading"><b>Wanna talk?</b></p>
            <p className="purpleBar" />
            <p style={{ fontSize: "4vw" }} className="ContactMeHeading"><b>START THE CONVO!</b></p>
            <p className="bigPurpleBar" />
            <br />
            <br />
            <form className="ContactMeInside">
                <input type="text" placeholder="Your name." />
                <br />
                <br />
                <input type="text" placeholder="Your email address." />
                <br />
                <br />
                <input type="text" placeholder="Start the Conversation." />
                <br />
                <br />
                <input type="submit" defaultValue="Submit" />
            </form>
        </div>
    );
}

export default ContactMe;