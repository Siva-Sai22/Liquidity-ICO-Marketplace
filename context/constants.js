// Woox: 0x4bc3eC9c51511b0Ec4B3Fc3FB5291aAEd42A6849
// ICOWoox: 0xBB67D8B175F375296D900213D5871d99A042a072
// Liquidity: 0xED6ae858349d3F6966682D89b98dB78D1c3acE53

import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import factoryAbi from './factoryAbi.json'
import ERC20ABI from './abi.json'
import Woox from './Woox.json'
import ICOWoox from './ICOWoox.json'
import Liquidity from './Liquidity.json'

export const Woox_ADDRESS = '0x4bc3eC9c51511b0Ec4B3Fc3FB5291aAEd42A6849'
export const Woox_ABI = Woox.abi

export const ICOWoox_ADDRESS = '0xBB67D8B175F375296D900213D5871d99A042a072'
export const ICOWoox_ABI = ICOWoox.abi

export const Liquidity_ADDRESS = '0xED6ae858349d3F6966682D89b98dB78D1c3acE53'
export const Liquidity_ABI = Liquidity.abi

export const FACTORY_ABI = factoryAbi
export const FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f26734ea31F984'
export const positionManagerAddress =
    '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'

const fetchContract = (signer, ABI, ADDRESS) =>
    new ethers.Contract(ADDRESS, ABI, signer)

export const web3Provider = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)

        return provider
    } catch (e) {
        console.log(e)
    }
}

export const CONNECTING_CONTRACT = async (ADDRESS) => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const network = await provider.getNetwork();
        const signer = provider.getSigner()
        const contract = fetchContract(signer, ERC20ABI, ADDRESS)

        const userAddress = signer.getAddress()
        const balance = await contract.balanceOf(userAddress)

        const name = await contract.name()
        const symbol = await contract.symbol()
        const supply = await contract.totalSupply()
        const decimals = await contract.decimals()
        const address = await contract.address

        const token = {
            address: address,
            name: name,
            symbol: symbol,
            decimals: decimals,
            supply: ethers.utils.formatEther(supply.toString()),
            balance: ethers.utils.formatEther(balance.toString()),
            chainId: network.chainId,
        }

        return token
    } catch (e) {
        console.log(e)
    }
}

export const internalWooxContract = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const contract = fetchContract(provider, Woox_ABI, Woox_ADDRESS)

        return contract
    } catch (e) {
        console.log(e)
    }
}

export const internalICOWooxContract = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const contract = fetchContract(provider, ICOWoox_ABI, ICOWoox_ADDRESS)

        return contract
    } catch (e) {
        console.log(e)
    }
}

export const internalAddLiquidity = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const contract = fetchContract(provider, Liquidity_ABI, Liquidity_ADDRESS)

        return contract
    } catch (e) {
        console.log(e)
    }
}

export const getBalance = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        return await signer.getBalance()
    } catch (e) {
        console.log(e)
    }
}