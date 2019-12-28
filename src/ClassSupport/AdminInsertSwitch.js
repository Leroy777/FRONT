import React, {useState, useEffect} from 'react';
import { Form, Button } from "semantic-ui-react";

export const AdminInsertSwitch = (key) => {
    switch(key){
        case 'add_category':
            return ['category'];
        case 'delete_category':
            return ['category']
        case 'add_product':
            return ['title', 'category', 'descr', 'price']
        case 'update_product':
            return ['product_id', 'instock', 'promo']
        case 'delete_product':
            return ['product_id']
        case 'add_promotion':
            return ['title', 'type', 'image', 'descr', 'offer_ends']
        case 'delete_promotion':
            return ['promotion_id']
        case 'order_status':
            return ['trans_id', 'process_status']
        default:
            break;
    }
}
export const AdminInsertMapper = property => {
    console.log(`active: ${JSON.stringify(property)}`);
    return (null
        /*<Form>
            {list.map(
                k => (
                    <Form.Input key={k}>{item.get(k)}</Form.Input>
                )
            )}
            <Button>Commit</Button>
        </Form>*/
    );    
};


    /*console.log(list)
    const [item, setItem] = useState(new Map())
    const updateMap = (k,v) => {
        for (let i in list){
            setItem(item.set(k,i));
        }
    }
    useEffect (()=>{
        updateMap()
        console.log(item)
    });*/