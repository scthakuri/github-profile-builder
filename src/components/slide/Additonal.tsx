import React from 'react'
import { SlideProps } from '../../constants/type'
import { AppContext } from '../../context/AppContext'
import ProfileViews from '../elements/ProfileViews'
import SliderHeader from '../elements/SliderHeader'
import Trophy from '../elements/Trophy'

function Additonal({ onBackPress }: SlideProps) {
    const { setGenerate } = React.useContext(AppContext);
    
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
                        <button type="button" className="btn" onClick={() => setGenerate(true)}>Generate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Additonal