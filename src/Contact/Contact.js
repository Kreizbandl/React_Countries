import './Contact.css';

function Contact () {
    return(
        <div className="contact">
            <h1>Feedback Form</h1>
            <form>

                {/* TODO better styling + remove divs */}
                <div>
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name"/>
                </div>

                <div>
                    <label for="email">Email: </label>
                    <input type="text" id="email" name="email"/>
                </div>

                <div>
                    <label for="message">Message: </label>
                    <textarea type="text" id="message" name="message"></textarea>
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Contact;