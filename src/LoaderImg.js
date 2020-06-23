import React, { Component } from 'react'

class LoaderImg extends Component {
   
    constructor (props){
        super (props);
        this.state = {
            src:"",
            loaded: false
         }
    } 

authenticate(){
    return new Promise(resolve => setTimeout(resolve, 100))
  }

  componentDidMount(){
    this.authenticate().then(() => {
           this.setState({
            src : 'http://img.lenagold.ru/tc/tcvet/gelkr/gelkr_tcvet045.png' ,              
            loaded: true
        })
        })
      }

    render = () => {
        const {  loaded, src } = this.state;
        if( !loaded ){
            return( <h1> Loading... </h1> );
        } else {
            return(
                <>
                    <img
                    src ={src}                 
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