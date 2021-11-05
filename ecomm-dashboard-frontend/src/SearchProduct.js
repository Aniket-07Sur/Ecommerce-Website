import Header from './Header';
import {useState} from 'react';
import { Table } from "react-bootstrap";
function SearchProduct() {
    const [data,setData] = useState([])
    async function Search(key)
    {
        if(key.length>1)
        {
            let result =await fetch("http://localhost:8000/api/search/"+key);
            result = await result.json();
            console.log(result);
            setData(result);
        }   
    }
    return (
        <div>
            <Header />
            <div className="col-sm-10 offset-sm-1">
                <h1>Search Component</h1><br/>
                <input type="text"  onChange={(e)=>Search(e.target.value)} className="form-control" placeholder="Search Product"/><br/>
                {
                    data.length>0?
                    <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><img style={{ width: 100 }} src={"http://localhost:8000/" + item.file_path} /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                :<h2>Search Product</h2>
                }
            </div>
        </div>
    );
}
export default SearchProduct;