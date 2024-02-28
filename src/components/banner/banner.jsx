import React from 'react'
import '../banner/banner.css'
import logoBanner from '../banner/imgBanner/logoBanner.png'


class Banner extends React.Component{
    render(){
        return(
            <div className="banner">
                <div className="banner-content">
                    <img src={logoBanner} alt="logo" />
                    <h2 className="title">БРЕНД ОДЕЖДЫ</h2>
                    <a href="" className="banner-btn">Перейти в категории</a>
                </div>
            </div>
        
        )
    }
}

export default Banner