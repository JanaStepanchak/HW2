import React, { Component } from 'react'

class LoaderImg extends Component {
   
    state = {
            srct:"3",
            loaded: false
         }
/*authenticate(){
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
}*/

//---------------------------------------------------------

componentDidMount= () => {
   let img = new Image();  
  //  let img =document.createElement('img')  

    img.onload = () => {      
        console.log(`Image loaded, ${img.width}x${img.height}`); 
        this.setState({
            srct : img.src,              
            loaded: true
        });
        console.log(" setState" ,   this.state);

     }; 

    img.onerror = function () {     
        console.log("An error occurred while loading image");      
    };

    img.src = "http://img.lenagold.ru/tc/tcvet/gelkr/gelkr_tcvet045.png";
    console.log("state " ,   this.state);
    console.log("CDM " );
}



render = () => {
    const { srct , loaded } = this.state;
    if( !loaded ){
        console.log("render 1" );
        return( <h1> Loading... </h1> );
    } else {
        console.log("render 2" );
        return(
            <>
                <img
                src = {srct }  
                alt=""          
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