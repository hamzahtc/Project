import React, { Component } from 'react'
import {Pie } from 'react-chartjs-2';
import {connect} from 'react-redux';



class ChartGender extends Component {
        state ={
            chartData:{
                labels:['Boys','Girls'],
                datasets:[{
                    label:'Gender',
                    data:[
                        this.props.etudiants.filter((etudiant)=>etudiant.sexe_gender === 'male').length,
                        this.props.etudiants.filter((etudiant)=>etudiant.sexe_gender === 'female').length
                    ],
                    backgroundColor:[
                        'rgb(0, 102, 255)',
                        'rgb(255, 153, 153)'

                       
                    ]
                  }
                ] }
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