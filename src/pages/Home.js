import React from 'react';
import Todos from 'components/Todos';

class Home extends React.Component{

    render(){
        return (
            <div class='container-fluid'>
                <div class='col-md-offset-3 col-md-6'>
                    <h3 style={{textAlign: 'center'}}>Todo List</h3>
                    <Todos/>
                </div>
            </div>
        );
    }

}

export default Home;