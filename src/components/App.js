import React, { Component } from "react";
import axios from "axios";

import Json from "./colleges.json";
import Info from "./information";
    
    class App extends Component {
      constructor() {
        super();
        this.state = {
          college: [],
          loading: false,
          count:20,
          j:10,
          college_data:[]
        };
      }
      componentDidMount() {
        this.setCollege();
        this.refs.myscroll.addEventListener("scroll", () => {
          if (
            this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
            this.refs.myscroll.scrollHeight
          ) {
            this.loadMore();
          }
        });
      //  this.setCollege();
      }

      //set college
      setCollege(){
        this.setState({ loading: true });
        const {college,college_data}=this.state;
        console.log(Json);
        Json.colleges.map((college1)=>{
          console.log(college1);
          college.push(college1);
        })
        for(let i=0;i<10;i++){
            college_data.push(college[i]);
        }
        console.log(college_data);
      }
    
      //get 10 college every time when it load
      getColleges() {
        const {college,count,j,college_data}=this.state;
        this.setState({ loading: true });
        Json.colleges.map((college1)=>{
          console.log(college1)
          college.push(college1);
        })
        const length=college.length;
        if(count<length){
          for(let i=j;i<count;i++){
              college_data.push(college[i]);
          }
        }else{
          alert("Data over");
        }

        this.setState({
          college:[],
        })
        console.log(college_data);
      }
    
      //handle load fuction when scroll reach at end
      loadMore() {
        const {j,count,college_data}=this.state;
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ count: count + 10, j:j+10, loading: false});
        }, 2000);

        this.getColleges();
      }
     
    
      render() {
        const {college_data}=this.state;
        return (
          <div
          className="App"
          ref="myscroll"
          style={{ height: "650px", overflow: "auto" }}
        >
          <div className="heading">
                <h3>Colleges in North India</h3>
              </div>
          {console.log(college_data)}
          <div className="head1">
           {college_data.map((college) => {
             console.log("hii");
            return (
              console.log(college),     
              <Info college={college}/>
            )
          })}
         
          </div>
          {this.state.loading
            ? <h1 className="App-intro">
                loading ...
              </h1>
            : ""}
  
        </div>
        
        );
      }
    }
    
    export default App;
