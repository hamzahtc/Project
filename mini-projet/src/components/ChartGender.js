import React, { Component } from 'react'
import {Pie } from 'react-chartjs-2';
import {connect} from 'react-redux';


class ChartGender extends Component {
    
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Boys','Girls'],
                datasets:[{
                    label:'Gender',
                    data:[
                       this.props.boys,
                       this.props.girls
                    ],
                    backgroundColor:[
                        'rgb(0, 102, 255)',
                        'rgb(255, 153, 153)'

                       
                    ]
                  }
                ] }
        }
    }
    render() {
        return (
            <div className="chart">
                <Pie height="300px" width="300px"
                    data={this.state.chartData}
                   
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        etudiants : state.etudiant.etudiants
    }
}
export default connect(mapStateToProps,null)(ChartGender);