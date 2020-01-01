import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {Dropdown, Container, Grid, Divider, Header, Form, Input, Button} from 'semantic-ui-react';
import {AdminInsertSwitch} from '../../ClassSupport/AdminInsertSwitch';

const AdminActionForms = ({action}) => {
    
    const [formGroup] = useState(AdminInsertSwitch(action));
    const [inp, setInp] = useState({});
    const [successful, setSuccessful] = useState(false);
    
    const productIDs = [
        {
            key: 'opt1',
            text: 'option @ 1',
            value: 'option_1'
        },
        {
            key: 'opt2',
            text: 'option @ 2',
            value: 'option_2'
        }
    ]
    const handleChange = (event) => {
        setInp({...inp, [event.target.name]: event.target.value})
    }
    const idChange = (e, {value}) => {
        setInp({...inp, product_id: value})
    }

    const handleSubmit = () => {
        console.log(JSON.stringify(inp));
        setSuccessful(true);
    }
    const submissionSuccess = () => {
        if (successful === true){
            return <Redirect to='/admin/insert/' />
        }
    }

    return (
        <Container>
            <Grid centered>
                <Grid.Row>
                    <Link to='/admin/insert/' style={{marginTop:'80px'}}>Go Back</Link>
                </Grid.Row>
                <Grid.Row>
                    <Header as='h2'>{action}</Header>
                </Grid.Row> 
                <Grid.Row>
                    <Form onSubmit={handleSubmit} style={{minWidth:'300px'}} id='currentForm'>
                        {submissionSuccess()}
                        {formGroup.map(item => (
                            (item !== 'product_id') ?
                            <Form.Field 
                                required 
                                key={item} 
                                name={item}
                                control={Input}
                                placeholder={item}
                                onChange={e=>handleChange(e)}
                            >
                            </Form.Field> : 
                            <Dropdown 
                                fluid
                                onChange={idChange}
                                options={productIDs}
                                key='product_id'
                                placeholder='select Product ID'
                                selection
                                value={formGroup.product_id}
                            />
                        ))}    
                        <Divider />
                        <Button fluid content='OK' type='submit' />
                    </Form>
                </Grid.Row>
            </Grid>
        </Container>
    );
}



export default AdminActionForms;