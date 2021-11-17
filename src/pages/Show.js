import { useState } from "react"

function Show(props){

    const id = props.match.params.id
    const cheese = props.cheese
    const oneCheese = cheese.find(p => p._id === id)

    const [editForm, setEditForm] = useState(oneCheese)

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateCheese(editForm, oneCheese._id)
        props.history.push("/")
    }

    const removeCheese = () => {
        props.deleteCheese(oneCheese._id)
        props.history.push("/")
    }

    return (
        <div className="oneCheese">
            <h1>{oneCheese.name}</h1>
            <h2>{oneCheese.countryOfOrigin}</h2>
            <img src={oneCheese.image} alt={oneCheese.name} />
            <button id="delete" onClick={removeCheese}>
                Remove
            </button>
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.countryOfOrigin}
                    name="countryOfOrigin"
                    placeholder="country of origin"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="Image Url"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Update Cheese"
                />
            </form>
        </div>
    )};

export default Show