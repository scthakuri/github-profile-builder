import React, { useState } from 'react'
import { SlideProps } from '../../constants/type'
import { AppContext } from '../../context/AppContext'
import ProfileViews from '../elements/ProfileViews'
import SliderHeader from '../elements/SliderHeader'
import Trophy from '../elements/Trophy'
import Generate from './Generate'

function Additonal({ onBackPress }: SlideProps) {
    const [visible, setVisible] = useState(true);

    const { aboutme } = React.useContext(AppContext);

    const generateFinalMarkDown = () => {
        try {
            let markdowncode = `# 💫 About Me:\n`;
            markdowncode += localStorage.getItem("profile_views_markdown") + "\n";
            markdowncode += aboutme.replace(/(?:\r\n|\r|\n)/g, '<br>');
            markdowncode += '\n\n';
            markdowncode += localStorage.getItem("social_profile_markdown") + "\n";
            markdowncode += localStorage.getItem("skill_markdown") + "\n";
            markdowncode += localStorage.getItem("github_stat_markdown") + "\n";
            markdowncode += localStorage.getItem("trophy_markdown") + "\n";
            markdowncode += localStorage.getItem("donate_markdown") + "\n";            
            markdowncode += '\n<div align="center">Show some ❤️ by starring some of the repositories!</div>';

            localStorage.setItem("final_markdowncode", markdowncode);
        } catch (error) {
            
        }
    }

    if( visible ){
        return (
            <div className='about_me_container'>
                <SliderHeader
                    title="Additional Stuffs"
                    onBackPress={onBackPress}
                />
    
    
                <div className="slider_content_settings slider_content_settings_additonal">
                    <div className="row">
                        <Trophy />
                        <div className="divider"></div>
                        <ProfileViews />
    
                        <div className='btn_container mt-3'>
                            <button type="button" className="btn" onClick={() => {
                                generateFinalMarkDown();
                                setVisible(false);
                            }}>Generate</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Generate
            onBackPress={() => setVisible(true)}
        />
    )
}

export default Additonal