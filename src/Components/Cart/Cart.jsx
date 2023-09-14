/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({actorsData, totalCost, remaining}) => {
    return (
        <div className="cart-container mx-auto">
            <div className="text-white text-2xl space-y-3" >

            <h3 className=" text-4xl font-bold ml-8 p-5">Total Actors: {actorsData.length}</h3>
            <h5>Remaining Balance: {remaining}</h5>
            <h5>Total Cost: {totalCost}</h5>
            {
                actorsData.map(actorData =>(
                   <li key={actorData.id} className="text-white text-2xl">
                    {actorData.name}
                   </li>
                )

                )
            }
            </div>
           
        </div>
    );
};

export default Cart;