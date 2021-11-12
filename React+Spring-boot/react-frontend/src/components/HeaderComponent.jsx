import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a style={{marginLeft:"120px"}}  class="navbar-brand text-white">Management</a>
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link text-white" href="http://localhost:3000/">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="http://localhost:3000/employees">Employees</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;