import React, { Component } from 'react'
import {SettingsInputSvideo,Delete,Backspace} from '@material-ui/icons'
import {Button,InputAdornment,Input} from '@material-ui/core'
let tickets =[]
let addTicket=[]
let number=["7","8","9","4","5","6"]
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           ticketNum :[],
           createdNum:'',
           createdTicket:[],
           addTicket:[]
        };
    }
    deleteTicket =(type,item,index)=>{
    if(type==='numpad'){
       let  updatedList = this.state.createdTicket.splice(index,1)
       addTicket = this.state.createdTicket
       this.setState({createdTicket:this.state.createdTicket})
    }
    else if(type==='wheel'){
        let newList = this.state.addTicket.splice(index,1)
        tickets = this.state.addTicket
        this.setState({addTicket:newList})
    }
    }
    removeValue =()=>{
        let newValue = this.state.createdNum.slice(0,-1);
        this.setState({createdNum:newValue})
    }
    onDelete =()=>{
  this.setState({createdNum:''})
    }
    addTicket =()=>{
     addTicket.push(this.state.createdNum)
    this.setState({createdTicket:addTicket})
    }
   onButtonClick=(item)=>{
      this.setState({createdNum : this.state.createdNum + item})

   }
    generateRandomNumber =()=>{
        let randomNum = Math.floor(1000000 * Math.random())
        tickets.push(randomNum)
        this.setState({addTicket:tickets})
    }
    render() {
        return (
            <div style={{display:'flex',flex:1 ,justifyContent:'center',alignItems:'center',marginTop:15}}>
                <div style={{display:'flex',flex:1,flexDirection:'column'}}>
                    <div style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <div style={{borderWidth: 3,borderRadius: 10,borderColor: "#d3d3d3",width:'90%',padding:10,
                margin: 10,backgroundColor: "#e6f2ff"}}>
                <div style={{display:'flex',flex:2,justifyContent:'center',alignItems:'center'}}>
                 <div style={{flex:1,alignItems:'center'}}>
                    <div style={{borderWidth: 3,borderRadius:3,borderColor: "#d3d3d3",width:'70%',padding:10,
                margin: 10,backgroundColor: "#ffff"}}>
                 <div>
                 <Input style={{width:'100%'}} value={this.state.createdNum} >
                     
                 </Input>
                 </div>
                 {number && number.map((item,index)=>{
                     return(
                     <Button value={item} variant="outlined" disabled={this.state.createdNum.length >=6 ? true :false} style={{marginRight:'3rem',marginTop:'3rem',marginLeft:'2rem'}} 
                     onClick={()=> this.onButtonClick(item) }
                      >
                         {item}
                         
                     </Button>
                     )
                    
                 })}
                  <Button value="delete" variant="outlined"  style={{marginRight:'3rem',marginTop:'3rem',marginLeft:'2rem'}}
                  onClick ={()=>{this.removeValue()}}
                   >
                      <Backspace/>
                  </Button>
                     <Button value="delete" variant="outlined" disabled={this.state.createdNum.length >=6 ? true :false}  style={{marginRight:'3rem',marginTop:'3rem',marginLeft:'2rem'}}
                     onClick ={()=>this.onButtonClick(0)  }
                     > 0 </Button> 
                     <Button value="delete" variant="outlined"  style={{marginRight:'3rem',marginTop:'3rem',marginLeft:'2rem'}}
                     onClick ={()=> this.onDelete() }
                     >
                         <Delete style={{color:'#d44137'}} />
                     </Button>
                     <Button  variant="outlined" disabled={(this.state.createdNum.length===0 || this.state.createdNum.length < 6) ? true : false} style={{width:'100%',marginRight:'3rem',marginTop:'3rem',textAlign:'center'}}
                     onClick={() =>this.addTicket()}
                     >
                     Add ticket
                     </Button>
                    </div>
                 </div>
                 <div style={{flex:1}}>
                 <div style={{display:'flex',flex:2,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                 <div>
                 Click here to generate a number
                 </div>
                 <div style={{flex:2,marginTop:10,justifyContent:'center',alignItems:'center'}}>
                     
                 <SettingsInputSvideo style={{width:'50%',height:'50%',color:'#5a5e63'}} 
                 onClick={this.generateRandomNumber}
                  />
                 </div>
                 </div>
                 </div>
                </div>
            </div>

                    </div>
                    <div style={{padding:5}}>
                        
                       {this.state.createdTicket  && this.state.createdTicket.map((item,index)=>{
                           return(
                               <Input
                               style={{marginRight:'2rem'}}
                               id="input-with-icon-adorment"
                               value={item}
                               startAdornment ={
                                   <InputAdornment position="start"
                                   >
                                   <Delete onClick={()=>{this.deleteTicket("numpad",item,index)}}/>
                                   </InputAdornment>
                               }
                               
                               />
                           )
                       })}
                       {this.state.addTicket  && this.state.addTicket.map((item,index)=>{
                           return(
                               <Input
                               style={{marginRight:'2rem'}}
                               id="input-with-icon-adorment"
                               value={item}
                               startAdornment ={
                                   <InputAdornment position="start"
                                   >
                                   <Delete onClick={()=>{this.deleteTicket("wheel",item,index)}} />
                                   </InputAdornment>
                               }
                               
                               />
                           )
                       })}
                    </div>
            </div>
                </div>
        );
    }
}

export default Home;