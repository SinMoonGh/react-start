import ItemList from "./ItemList";

export default function Item(params) {
    const items = [
        {id: 1, name:"당근", quantity:"13", completed: false},
        {id: 2, name:"감자", quantity:"4", completed: false},
        {id: 3,name:"장난감 세트", quantity:"2", completed: true},
        {id: 4,name:"성냥", quantity:"7", completed: true},
    ]

    return (
        <>        
        {items.map((item) => (
        <ItemList key = {item.id} name ={item.name} quantity ={item.quantity} completed ={item.completed}/>
        ))}
        </>
    );    
    
}