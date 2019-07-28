import React, { Component } from 'react';

import './Puzzle.scss'
import Title from '../../components/Tile/Tile';
import Button from '../../components/UI/Button/Button';
import * as utils from '../../utils/index';
import Overlay from '../../components/UI/Overlay/Overlay';

class Puzzle extends Component {
    state = {
        items: [],
        setIndex: 15,
        success: false,
        divisional: null
    }

    refreshHandler = () => {
        const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '']; 
        const newSortArray = utils.shuffle(items);
        this.setState({
            items: newSortArray,
            setIndex: newSortArray.indexOf(''),
            divisional: Math.sqrt(items.length)
        });
    }

    

    swapHandler = (element, index) => {
        if (this.state.setIndex > index) {
            if (this.state.setIndex%this.state.divisional === 0 && this.state.setIndex - index === 1) return false;
        } else if (index > this.state.setIndex) {
            if (index%this.state.divisional === 0 && index - this.state.setIndex === 1) return false;
        }
        
        let update = false;
        if (index < this.state.setIndex && (this.state.setIndex - index === 1 || this.state.setIndex - index === this.state.divisional)) {
            update = true;
        } else if (index > this.state.setIndex && (index - this.state.setIndex === 1 || index - this.state.setIndex === this.state.divisional)) {
            update = true;
        }
        if (update) {            
            let cloneItems = [...this.state.items];
            cloneItems[index] = '';
            cloneItems[this.state.setIndex] = element;
            utils.checkSequene(cloneItems); // Check player won or not 
                this.setState({
                    items: cloneItems,
                    setIndex: index
                });
        }

    }

    render() {
        return (
                <div className="Section">
                    <div className="row">
                        <div className="box">
                        {
                    this.state.items.length === 0 ? 
                        <Overlay>
                            { this.state.success ? <div>Great You Won</div> : null }
                            <Button clicked={this.refreshHandler}>Play</Button>
                        </Overlay> :
                        <React.Fragment>
                            {
                                this.state.items.map((ele, i) => {
                                    return (
                                    <Title element={ele} key={i} clicked={() => this.swapHandler(ele, i)}/>
                                    )
                                })
                            }
                        </React.Fragment>
                            }
                        </div>
                    </div>
                    
                </div>
        )
    }
}

export default Puzzle;