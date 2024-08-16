import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleclear = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Cleared the textarea!", "success");
    }

    const handlesentencecase = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
        props.showAlert("Converted to Sentercase!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnchange = (Event) => {
        setText(Event.target.value)
    }

    return (
        <>
            <div className="container" style={{
                color: (() => {
                    if (props.mode === 'dark') {
                        return 'white';
                    } else if (props.mode === 'success') {
                        return 'white';
                    } else if (props.mode === 'primary') {
                        return 'white';
                    } else if (props.mode === 'info') {
                        return 'white';
                    } else {
                        return 'black'; // Default color
                    }
                })()
            }}>
                <h1>{props.heading}</h1>
                <div className="class mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} rows="10" id="mybox" style={{
                        backgroundColor: (() => {
                            if (props.mode === 'dark') {
                                return '#435871';
                            } else if (props.mode === 'success') {
                                return '#4a7e48';
                            } else if (props.mode === 'primary') {
                                return '#20396e';
                            } else if (props.mode === 'info') {
                                return '#55dadd';
                            } else {
                                return 'white'; // Default color
                            }
                        })(), color: (() => {
                            if (props.mode === 'dark') {
                                return 'white';
                            } else if (props.mode === 'success') {
                                return 'white';
                            } else if (props.mode === 'primary') {
                                return 'white';
                            } else if (props.mode === 'info') {
                                return 'white';
                            } else {
                                return 'black'; // Default color
                            }
                        })()
                    }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclear}>Clear all</button>
                <button className="btn btn-primary mx-2" onClick={handlesentencecase}>Sentence Case</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{
                color: (() => {
                    if (props.mode === 'dark') {
                        return 'white';
                    } else if (props.mode === 'success') {
                        return 'white';
                    } else if (props.mode === 'primary') {
                        return 'white';
                    } else if (props.mode === 'info') {
                        return 'white';
                    } else {
                        return 'black'; // Default color
                    }
                })()
            }}>
                <h2>Your text summary</h2>
                <p>{} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview"}</p>
            </div>
        </>
    )
}
