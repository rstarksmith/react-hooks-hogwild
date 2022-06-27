import React from "react";

function Filter({ showGreased, sortBy, handleGreased, handleSortBy }) {

    const onSortChange = (e) => {
        handleSortBy(e)
    }

    const onGreasedChange = () => {
        handleGreased()
    }

    return (
        <div>
            <div>
                <label className="ui item">Sort by</label>
            </div>
            <div>
                <select
                    className="ui selection dropdown "
                    name="sort"
                    onChange={onSortChange}
                    value={sortBy}
                    >
                    <option value=""></option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
            <div className="ui item">
                <label>Greased Pigs Only</label>
            </div>
            <div className="ui item">
                <input
                    className="ui toggle checkbox"
                    checked={showGreased}
                    onChange={handleGreased}
                    type="checkbox"
                /> 
            </div>
        </div>
    )
}

export default Filter