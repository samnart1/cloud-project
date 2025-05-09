import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import SetQuantity from "./SetQuantity";
import { useDispatch } from "react-redux";
import {
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
} from "../../store/action";
import toast from "react-hot-toast";
import { formatPrice } from "../../utils/formatPrice";
import { truncateText } from "../../utils/truncateText";

interface ItemContentProps {
    productId: number;
    productName: string;
    image: string;
    description: string;
    quantity: number;
    price: number;
    discount: number;
    specialPrice: number;
    cartId?: number;
    id?: number;
    about?: boolean;
}

const ItemContent = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    cartId,
}: ItemContentProps) => {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);

    const dispatch = useDispatch();

    const handleQtyIncrease = (cartItems: ItemContentProps) => {
        dispatch(
            increaseCartQuantity(
                cartItems,
                toast,
                currentQuantity,
                setCurrentQuantity
            )
        );
    };

    const handleQtyDecrease = (cartItems: ItemContentProps) => {
        dispatch(
            decreaseCartQuantity(
                cartItems,
                toast,
                currentQuantity,
                setCurrentQuantity
            )
        );
    };

    const removeItemFromCart = (cartItems: ItemContentProps) => {
        dispatch(removeFromCart(cartItems, toast));
    };

    return (
        <div className="grid md:grid-cols-5 grid-cols-4 md:text-md text-sm gap-4 items-center border-[1px] border-slate-200 rounded-md lg:px-4 py-4 p-2">
            <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
                <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
                    <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">
                        {truncateText(productName)}
                    </h3>
                </div>

                <div className="md:w-36 sm:w-24 w-12">
                    <img
                        src={image}
                        alt={productName}
                        className="md:h-36 sm:h-24 w-full object-cover rounded"
                    />

                    <div className="flex items-start gap-5 mt-3">
                        <button
                            onClick={() =>
                                removeItemFromCart({
                                    productId,
                                    productName,
                                    image,
                                    description,
                                    quantity,
                                    price,
                                    discount,
                                    specialPrice,
                                    cartId,
                                })
                            }
                            className="flex items-center font-semibold space-x-2 px-4 py-1 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-red-50 transition-colors duration-200"
                        >
                            <HiOutlineTrash
                                size={16}
                                className="text-rose-600"
                            />
                            Remove
                        </button>
                    </div>
                </div>
            </div>

            <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                {formatPrice(Number(specialPrice))}
            </div>

            <div className="justify-self-center">
                <SetQuantity
                    quantity={currentQuantity}
                    cardCounter={true}
                    handleQtyIncrease={() =>
                        handleQtyIncrease({
                            productId,
                            productName,
                            image,
                            description,
                            quantity,
                            price,
                            discount,
                            specialPrice,
                            cartId,
                        })
                    }
                    handleQtyDecrease={() =>
                        handleQtyDecrease({
                            productId,
                            productName,
                            image,
                            description,
                            quantity,
                            price,
                            discount,
                            specialPrice,
                            cartId,
                        })
                    }
                />
            </div>

            <div className="justify-self-center">
                {formatPrice(Number(specialPrice) * Number(quantity))}
            </div>
        </div>
    );
};

export default ItemContent;
