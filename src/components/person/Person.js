import React from 'react';
import './person.css'
export default class Person extends React.Component {

    constructor() {
        super();
    
      }


    render() {
        const filter = (...args) => {
            return args.filter(no => no > 5 );
        }
        return (
            <>
                <div className="person">I am a
                    <h1>{this.props.name}</h1>
        <p>My Age: {filter(this.props.age)}</p>
                </div>
        <div>{this.props.children}</div>
            </>
        )
    }
    
        }