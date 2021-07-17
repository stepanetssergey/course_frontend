import BuyCar from '../contracts/BuyCars.json';
import BuyCarToken from '../contracts/ERC20.json'


const options = {
    contracts:[BuyCar, BuyCarToken],
    web3: {
        fallback: {
            type: "ws",  
            url: "ws://127.0.0.1:8545"
        }
    }
}

export default options;

//wss, https