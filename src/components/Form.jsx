import React, { useState, useEffect } from 'react';

const Form = ({ toastie }) => {

    const [text, setText] = useState("");

    useEffect(() => {
        setText("Hello World");
    }, []);


    function toLowerCase() {
        setText(text.toLowerCase());
        toastie("Text Converted to Lowercase", "success");
    }

    const toUpperCase = () => {
        setText(text.toUpperCase());
        toastie("Text Converted to Uppercase", "success");
    }
    const clearText = () => {
        setText("");
        toastie("Text Cleared", "success");
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        toastie("Copied to clip board", "success");
    }

    return (

        <>
            <div className="dark:text-gray-700 dark:bg-gray-900 bg-white  px-8 pt-6 pb-8 ">
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Enter Your Text
                    </label>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} className="dark:text-gray-300 dark:bg-gray-800
                    shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Some Cute Text" rows="12">
                    </textarea>
                </div>
                <button disabled={text.length === 0} onClick={toUpperCase} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    To Upper Case
                </button>
                <button disabled={text.length === 0} onClick={toLowerCase} className="ml-8 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    To Lower Case
                </button>
                <button disabled={text.length === 0} onClick={copyText} className="ml-8 bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Copy to Clipboard
                </button>
                <button disabled={text.length === 0} onClick={clearText} className="ml-8 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Clear Text
                </button>

            </div>
            <div className="bg-white dark:text-gray-700 dark:bg-gray-900  shadow-md px-8 pt-6 pb-8 ">
                <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Word Statistics</h2>
                <p className="mb-3 text-gray-500 dark:text-gray-400">Total {text.length > 0 ? text.split(" ").filter((el)=>{return el.length!=0}).length : 0} words or {text.length} characters</p>
                <p className="mb-3 text-gray-500 dark:text-gray-400">Can be read in {text.split(" ").length * 0.008} minutes</p>
            </div>
            <div className="bg-white shadow-md  px-8 pt-6 pb-8   border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Preview</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>

            </div>
        </>

    );
}

export default Form;
