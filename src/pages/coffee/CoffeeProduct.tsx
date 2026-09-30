import { useParams } from "react-router";
import { coffeeProducts } from "../../DummyData";
import ProductPage from "../../Registery/Marketing/ProductPage";
import useTheme from "../../Theme/UseTheme";

export default function CoffeeProduct(){
    let params = useParams()
    const productid = params.productID
    const theme = useTheme()

    const product = coffeeProducts[productid!]
    return <div className="flex min-h-screen w-full items-center justify-center">
         
        <ProductPage
          key={product.title}
          {...product}
        />
      
    </div>

}