import React, {useState, useEffect} from 'react';
import {Dropdown, Container, Divider, Segment, Header } from 'semantic-ui-react';
import {AdminInsertSwitch} from '../../ClassSupport/AdminInsertSwitch';

const adminOptions = [
    {
        key: 'add_category',
        text: 'add category',
        value: 'add_category'
    },
    {
        key: 'delete_category',
        text: 'delete category',
        value: 'delete_category'
    },
    {
        key: 'add_product',
        text: 'add product',
        value: 'add_product'
    },
    {
        key: 'update_product',
        text: 'update product',
        value: 'update_product'
    },
    {
        key: 'delete_product',
        text: 'delete product',
        value: 'delete_product'
    },
    {
        key: 'add_promotion',
        text: 'add promotion',
        value: 'add_promotion'
    },
    {
        key: 'delete_promotion',
        text: 'delete promotion',
        value: 'delete_promotion'
    },
    {
        key: 'order_status',
        text: 'order status',
        value: 'order_status'
    }
];

const AdminSelector = () =>{
    const [sel, setSel] = useState('');
    var value = sel;
    const handleChange = (e, {value}) => {
        setSel(value);
    };

    useEffect(()=>{
        AdminInsertSwitch(value);
    })

    return (
        <Container textAlign='center'>
            <Divider clearing />
            <Header as='h1'>Admin Page</Header>
            <Segment raised style={{marginTop:'100px'}} >
                <Dropdown
                    fluid
                    onChange={handleChange}
                    options={adminOptions}
                    placeholder='What would you like to do?'
                    selection
                    value={value}
                />
            </Segment>
            <Divider />
            <Segment.Group>
                <Segment>
                    <Header as='h3'>{value}</Header>
                </Segment>
                <Segment>
                    <p></p>
                </Segment>
            </Segment.Group>
        </Container>
    );
};
//{<AdminInsertMapper />}
export default AdminSelector;