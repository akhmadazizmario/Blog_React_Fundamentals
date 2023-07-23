import { useState } from "react";

function Search(props) {

    const [search, setSearch] = useState("");

    const onSearchChange = () => {
        props.onSearchChange(search);  
    };

    const searchKeydown = e => { 
        if (e.key === "Enter") {
            onSearchChange();
        }
    }

    return (
        <>
        <h1>Simple Blog</h1>
        <div>Cari artikel: <input onChange={e => setSearch(e.target.value)} 
        onKeyDown={searchKeydown}>
        </input>
        <button onClick={onSearchChange}>Cari</button>
        </div>

        <small>Ditemukan {props.totalPosts} data dengan pencarian kata {search}</small>
        </>
    )
}
export default Search