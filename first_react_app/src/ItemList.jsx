export default function ItemList({name, quantity, completed}) {
    return(
        <>
        <h3>{name}{completed ? "(재고 없음)":""}: {quantity}</h3>
        </>
    );
}