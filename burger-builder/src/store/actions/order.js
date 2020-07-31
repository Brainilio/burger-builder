import * as actionTypes from "./actionTypes"
import axios from "../../axios-orders"

export const purchaseBurgerSuccess = (id, orderdata) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData: orderdata,
	}
}

export const purchaseBurgerFail = (error) => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAIL,
		error: error,
	}
}

export const purchaseBurgerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_START,
	}
}

//async code to send burger to firebase
export const purchaseBurger = (orderData) => {
	return (dispatch) => {
		dispatch(purchaseBurgerStart())
		axios
			.post("/orders.json", orderData)
			.then((response) => {
				console.log(response.data)
				dispatch(purchaseBurgerSuccess(response.data.name, orderData))
			})
			.catch((error) => {
				console.log(error)
				dispatch(purchaseBurgerFail(error))
			})
	}
}

//init purchase
export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT,
	}
}

export const fetchOrdersSuccess = (orders) => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders: orders,
	}
}

export const fetchOrdersFail = (error) => {
	return {
		type: actionTypes.FETCH_ORDERS_FAIL,
		error: error,
	}
}

export const fetchOrdersStart = () => {
	return {
		type: actionTypes.FETCH_ORDERS_START,
	}
}

export const fetchOrders = () => {
	return (dispatch) => {
		dispatch(fetchOrdersStart())
		axios
			.get("/orders.json")
			.then((response) => {
				const fetchedOrders = []
				for (let key in response.data) {
					fetchedOrders.push({ ...response.data[key], id: key })
				}
				dispatch(fetchOrdersSuccess(fetchedOrders))
			})
			.catch((err) => {
				dispatch(fetchOrdersFail(err))
			})
	}
}
