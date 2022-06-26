import React, { useEffect, useState } from 'react'
import { socialURLGenerator } from '../constants/config';
import { AppContext } from '../context/AppContext';
import Loading from './elements/Loading'
// import ReactMarkdown from 'react-markdown'

function Generate() {

    const { username, aboutme } = React.useContext(AppContext);
    let finalcode = '# 💫 About Me:\n';
    const [loading, setLoading] = useState(true);

    const md = require("markdown-it")({
        html: true,
        linkify: true,
        typographer: true,
        breaks: true,
        quotes: "“”‘’",
        highlight: function (/*str, lang*/) {
            return "";
        },
    });

    const ucFirst = (string : string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const generateSocialCode = () => {
        try {
            let socialCode = '';
            let social = localStorage.getItem("social_profile");
            
            if( social ){
                const socialJSON = JSON.parse(social);
                const keyArray = Object.keys(socialJSON);

                keyArray.map((singleSocial : number | string) => {
                    let socialValue = socialJSON?.[singleSocial] || "sureshchand12a";
                                 
                    if( 
                        socialValue 
                        && socialURLGenerator.hasOwnProperty(singleSocial)
                    ){
                        // socialCode += socialURLGenerator.[].generate(socialValue);
                    }
                })

                finalcode += socialCode + "\n\n";
            }
        } catch (error) {
            console.log("Error:32", error);
            
        }
    }

    const generateMarkDown = () => {        
        finalcode += aboutme.replace(/(?:\r\n|\r|\n)/g, '<br>') + "\n\n\n";
        
        //generate social codes
        generateSocialCode();
        // setLoading(false);
    }


    useEffect(() => {
        let s = true;
        if( s ){
            generateMarkDown();
        }

        return () => {s = false}
    }, [])


    if (loading) {
        return (
            <div className='about_me_container'>
                <h2>Generating Your Profile . . .</h2>

                <div className="loading_container my-5">
                    <Loading />
                </div>
            </div>
        )
    }

    return (
        <div className='about_me_container'>
            <h2>Your Awesome Profile is Ready!!!</h2>

            <div className="w-full flex flex-col items-center">
                <div className="flex">
                    <p className="bg-green-200 text-zinc-800 p-1 px-4 rounded-t-md brightness-75">
                        PREVIEW
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Generate