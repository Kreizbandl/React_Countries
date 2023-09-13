import './Contact.css';

function Contact () {
    return(
        <div className="contact">
            <h1>Feedback Form</h1>
            <form>

                {/* TODO better styling + remove divs */}
                <div>
                    <label forhtml="name">Name: </label>
                    <input type="text" id="name" name="name" aria-label="Enter your name"/>
                </div>

                <div>
                    <label forhtml="email">Email: </label>
                    <input type="text" id="email" name="email" aria-label="Enter your email"/>
                </div>

                <div>
                    <label forhtml="message">Message: </label>
                    <textarea type="text" id="message" name="message" aria-label="Enter a message"></textarea>
                </div>

                <button type="submit" aria-label="Submit">Submit</button>

            </form>
        </div>
    )
}

export default Contact;