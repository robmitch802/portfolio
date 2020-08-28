import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Projects extends Component {
    render(){
        return(
            <div>
                <h2>Code and other projects </h2>
                <div class="media">
                    <img src="../../img/geo-vermonter.jpg" className="mr-3" width={128} alt="Geo-Vermonter coding project" />
                    <div class="media-body">
                        <h5 className="mt-0" >Geo-Vermonter</h5>
                        <p>Based on on the popular Google game Geo-Guesser, my partner Kevin and I built a Vermont-centric game 
                            using Leaflet maps. Start the game and the map zooms in to a close-up satellite view of a specific point
                            in Vermont. Use moves to guess which county that point is in.
                        </p>
                    </div>
                </div>
                <hr />
                <div class="media">
                    <div class="media-body">
                        <h5 className="mt-0 mb-1" >Turtle-Tac-Toe</h5>
                        <p>A wrinkle on the typical tic-tac-toe coding project, this pits turtles vs. tortoises. As my 
                            sons sing to me: "A turtle lives in water, a tortoise lives on land, 
                            a turtle's not a tortoise, it's not hard to understand."
                        </p>
                    </div>
                    <img src="../../img/tictactoe.jpg" className="ml-3" width={128} alt="turtle tac toe coding project" />
                </div>
                <p></p>
            </div>
        )
    }
}
