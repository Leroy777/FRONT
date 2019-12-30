import React from 'react';
import { Form, Divider, Button } from "semantic-ui-react";

export const AdminInsertSwitch = key => {
    let current = null; //refresh and re-init current 
    switch(key){
        case 'add_category':
            current = ['category'];
            break;
        case 'delete_category':
            current = ['category'];
            break;
        case 'add_product':
            current = ['title', 'category', 'descr', 'price'];
            break;
        case 'update_product':
            current = ['product_id', 'instock', 'promo'];
            break;
        case 'delete_product':
            current = ['product_id'];
            break;
        case 'add_promotion':
            current = ['title', 'type', 'image', 'descr', 'offer_ends'];
            break;
        case 'delete_promotion':
            current = ['promotion_id'];
            break;
        case 'order_status':
            current = ['trans_id', 'process_status'];
            break;
        default:
            break;
    }
    console.log(`current = ${current} with type of ${typeof(current)}`);
    AdminInsertMapper(current);
}

export const AdminInsertMapper = property => {
    console.log(`hint: ${JSON.stringify(property)} with typeof ${typeof(property)}`);
    if (!property){
        return (<p></p>);
    } else{
        return (
                <Form>
                    <p>{property}</p>
                    <Divider />
                    <Button>Commit</Button>
                </Form>
        ); 
    }   
};
