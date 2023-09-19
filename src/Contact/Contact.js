import './Contact.css';
import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = () => {
        // ...
        console.log('Feedback', name, email, message);
        setShowForm(false);
    };

    return (
        <>
            {/* Überschrift */}
            < h1 > Feedback Form</h1 >
            {showForm ? (
                <div className="contact">
                    {/* Feedback Formular */}
                    <form onSubmit={handleSubmit}>
                        {/* Eingabefeld für den Namen mit beschreibendem Label */}
                        <div>
                            <label forhtml="name">Name:
                                <input type="text" id="name" name="name" aria-label="Enter your name"
                                    aria-required="true" autoFocus value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={() => {
                                        const nameIsEmpty = name === '';
                                        document.getElementById('name').style.borderColor =
                                            nameIsEmpty ? 'red' : 'inherit';
                                    }} />
                                {/* autoFocus auf input verstößt gegen a11y rule */}
                            </label>
                        </div>
                        {/* Eingabefeld für die Email mit beschreibendem Label */}
                        <div>
                            <label forhtml="email">Email:
                                <input type="text" id="email" name="email" aria-label="Enter your email"
                                    aria-required="true" value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => {
                                        const emailIsEmpty = email === '';
                                        document.getElementById('email').style.borderColor =
                                            emailIsEmpty ? 'red' : 'inherit';
                                    }} />
                            </label>
                        </div>
                        {/* Textbereich für die Nachricht mit beschreibendem Label */}
                        <div>
                            <label forhtml="message">Message:
                                <textarea type="text" id="message" name="message" aria-label="Enter a message"
                                    aria-required="true" value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onBlur={() => {
                                        const messageIsEmpty = message === '';
                                        document.getElementById('message').style.borderColor =
                                            messageIsEmpty ? 'red' : 'inherit';
                                    }} ></textarea>
                            </label>
                        </div>
                        {/* Button zum Absenden des Formulars mit beschreibendem Label */}
                        <button id="submit" type="submit" aria-label="Submit" disabled={!name || !email || !message}>Submit</button>
                    </form>
                </div>
            ) : (
                <p>Thank you for your message!</p>
            )}
        </>
    )
}

export default Contact;