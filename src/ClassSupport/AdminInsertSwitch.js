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
    return current;
}

/*export const AdminInsertMapper = property => {
    if (property === null || property.length === 0){
        return (<p></p>);
    } else{
        let p0 = property[0];
        let p1 = property[1];
        let p2 = property[2];
        let p3 = property[3];
        let p4 = property[4];
        console.log(`hint: ${p0} + ${p1} + ${p2} + ${p3} + ${p4} ------ with typeof ${typeof(property)}`);
        return (
                
        ); 
    }   
};被封印的诅咒，请勿开封。
*/
/*<Form.Input placeholder={p0} label={p0}></Form.Input>
                    {(p1 === undefined) ? (null):(<Form.Input></Form.Input>)}
                    {p2 ? (<Form.Input></Form.Input>): (null)}
                    {p3 ? (<Form.Input></Form.Input>): (null)}
                    {p4 ? (<Form.Input></Form.Input>): (null)}*/