import React, { useState } from 'react'
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom' 
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core'

import TabPanel from './tabPanel'
import PizzaBase from './pizzaBase'
import PizzaTop from './pizzaTop'

import { addOrder } from '../redux/actions/actions';

const selectOptions = [
    {
        title: 'Crust & Sauce',
        section: 'PizzaBase'
    },
    {
        title: 'Toppings',
        section: ''
    }
]

function PizzaOrder({ handleClick }) {
    const history = useHistory()
    let [pizza, update] = useState({
        size: '',
        crust: '',
        sauce: '',
        veggies: '',
        meats: '',
        cheese: ''
    })

    const [expanded, setExpanded] = useState(false);
    
    //changes which panel is expanded 
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    //updates pizza state based on selected pizza base options
    const handleBaseChange = (e) => {
        const { name, value } = e.target
        console.log('baseChange' + value)
        update(
            { ...pizza, [name]: value }
        )
    }

    //updates pizza state based on selected pizza topping options
    const handleTopChange = (e) => {
        const { name, value } = e.target
        console.log(' topChange ' + value)
        update(
            { ...pizza, [name]: value }
        )
    }
    
    //move user to order review page while keeping redux state
    const handleNext = () =>{
        history.push('/review')
    }

    return (
        <TabPanel value='2' index='2'>
            <h2>Pizza Order</h2>

            <div>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{selectOptions[0].title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails onChange={handleBaseChange}>
                        <Typography>
                            <PizzaBase onChange={handleBaseChange}></PizzaBase>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{selectOptions[1].title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails onChange={handleTopChange}>
                        <Typography>
                            <PizzaTop onChange={handleTopChange}></PizzaTop>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <br />
                <Button variant="contained" color="primary" onClick={handleClick(pizza)} style={{ margin: '10px' }}>Add to order</Button>
                <Button variant="contained" color="primary" onClick={handleNext} style={{ margin: '10px' }}>Review Order</Button>
            </div>
        </TabPanel >
    )
}

//mapping dispatch action to handleClick function prop
const mapDispatchToProps = dispatch => ({
    handleClick(data) {
        return () => {
            dispatch(addOrder(data))
        }
    }
})

//connecting component to redux store
export default connect(
    null,
    mapDispatchToProps
)(PizzaOrder)



