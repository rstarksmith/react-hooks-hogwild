import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import Filter from "./Filter"

import hogs from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState("")

	const handleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    const handleGreased = () => {
        setShowGreased(!showGreased)
    }
	
	const hogsToDisplay = hogs
    .filter(hog => (showGreased ? hog.greased : true))
	.sort((hog1, hog2) => {
		if(sortBy ==="weight") {
			return hog1.weight - hog2.weight
		} else if (sortBy === "name") {
			return hog1.name.localeCompare(hog2.name)
		} else {
			return hogs
		}
	})

	return (
		<div className="ui grid container">
			<div>
				<Nav />
				<Filter sortBy={sortBy} showGreased={showGreased} handleSortBy={handleSortBy} handleGreased={handleGreased}/>
			</div>
			<div>
				<HogList hogs={hogsToDisplay} />
			</div>	
		</div>
	);
}

export default App;
