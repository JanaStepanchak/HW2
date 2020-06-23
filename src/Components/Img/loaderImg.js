import React from 'react'

const Img = ({ props,  loaded }) => {

    constructor( props ){
        super( props );
        this.state = {
            loaded: true
        }

    }

    this.setState({
        src : 'https://i.pinimg.com/564x/c0/de/00/c0de0090c76cf34289f95b7083315239.jpg',
        alt:"альтернативный текст",
        loaded: false
    });


    return(

        <img 
        src={src}
        alt={alt}
        >
        </img>
    )
}

export default LoaderImg;