import React from "react"
import classes from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const NavigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" active={true}>
			Burger Builder
		</NavigationItem>
		<NavigationItem link="/orders">My Orders</NavigationItem>
		<NavigationItem link="/auth">Login</NavigationItem>
	</ul>
)

export default NavigationItems
