import React, { Component } from 'react'
import { Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';


class ChartFiliere extends Component {
    
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['GI','TM','ER','GODT','ISIL','MGE'],
                datasets:[{
                    label:'Filiere',
                    data:[
                       this.props.GI,
                       this.props.TM,
                       this.props.ER,
                       this.props.GODT,
                       this.props.ISIL,
                       this.props.MGE
                    ],
                    backgroundColor:[
                        'rgb(4, 102, 700)',
                        'rgb(255, 26, 26)',
                        'rgb(0, 255, 153)',
                        'rgb(255, 255, 102)',
                        'rgb(255, 255, 150)',
                        'rgb(255, 255, 450)',
                        'rgb(255, 255, 100)'


                       
                    ]
                  }
                ] }
        }
    }
    render() {
        return (
            <div className="chart">
                <Bar height="300px" width="300px"
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
export default connect(mapStateToProps,null)(ChartFiliere);