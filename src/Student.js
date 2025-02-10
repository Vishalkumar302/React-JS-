import React from 'react'

export default class Student extends React.Component{
    render()
    {
        return(
            <div>Student {this.props.name}
            <h2>{this.props.email}</h2>
            </div>
            
        )
    }
}
