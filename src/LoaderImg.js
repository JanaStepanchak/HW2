import React, { Component } from 'react'

class LoaderImg extends Component {
   
    constructor (props){
        super (props);
        this.state = {
            src:"",
            alt:"", 
            loaded: false
         }
    } 

authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount(){
    this.authenticate().then(() => {
           this.setState({
            src : 'http://img.lenagold.ru/tc/tcvet/gelkr/gelkr_tcvet045.png' ,              
            alt : "альтернативный текст",
            loaded: true
        })
        }, 0)
      }

    render = () => {
        const {  loaded, src, alt } = this.state;
        if( !loaded ){
            return( <h1> Loading... </h1> );
        } else {
            return(
                <>
                    <img
                    src ={src}                   
                    alt={alt}
                    width={200}
                    height={200}                   
                    > 
                    </img>
                </>
            );
        }
    }
}


export default LoaderImg;